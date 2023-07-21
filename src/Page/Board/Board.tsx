import { useState, useEffect } from "react";
import * as Styled from "./styled";
import axios from "axios";

interface Board {
  id: number;
  board_title: string;
  board_contents: string;
  board_writer: string;
  board_hits: number;
  board_pass: string;
}

const Board = () => {
  const [boardList, setBoardList] = useState<any[]>([]);

  const [updatedBoard, setUpdatedBoard] = useState({
    board_title: "",
    board_contents: "",
    board_writer: "",
    board_hits: 0,
    board_pass: ""
  });

  const getBoardList = async () => {
    try {
      const res = await axios.get('http://localhost:8080/board');
      setBoardList(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBoardList();
  }, []);

  const handleCreateBoard = async () => {
    try {
      await axios.post("http://localhost:8080/board", updatedBoard);
      getBoardList();
      setUpdatedBoard({
        board_title: "",
        board_contents: "",
        board_writer: "",
        board_hits: 0,
        board_pass: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateBoard = async (id: number) => {
    try {
      await axios.put(`http://localhost:8080/board/${id}`, updatedBoard);
      getBoardList();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteBoard = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/board/${id}`);
      getBoardList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Styled.BoardWrapper>
      <Styled.TitleBox>
        <Styled.BoardTitle>게시판 목록</Styled.BoardTitle>
      </Styled.TitleBox>
      <Styled.FormBox>
        <Styled.Input
          type="text"
          placeholder="제목"
          value={updatedBoard.board_title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUpdatedBoard({
              ...updatedBoard,
              board_title: e.target.value
            })
          }
        />
        <Styled.Input
          type="text"
          placeholder="내용"
          value={updatedBoard.board_contents}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUpdatedBoard({
              ...updatedBoard,
              board_contents: e.target.value
            })
          }
        />
        <Styled.Input
          type="text"
          placeholder="작성자"
          value={updatedBoard.board_writer}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUpdatedBoard({
              ...updatedBoard,
              board_writer: e.target.value
            })
          }
        />
        <Styled.Input
          type="text"
          placeholder="비밀번호"
          value={updatedBoard.board_pass}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUpdatedBoard({
              ...updatedBoard,
              board_pass: e.target.value
            })
          }
        />
        <Styled.Button onClick={handleCreateBoard}>생성</Styled.Button>
      </Styled.FormBox>
      <Styled.List>
        {boardList.length > 0 ? (
          boardList.map((board) => (
            <Styled.ListItem key={board.id}>
              <Styled.ListText>{board.board_title}</Styled.ListText>
              <Styled.ListText>{board.board_contents}</Styled.ListText>
              <Styled.ListText>{board.board_writer}</Styled.ListText>
              <Styled.ListText>{board.board_hits}</Styled.ListText>
              <Styled.ListText>{board.board_pass}</Styled.ListText>
              <Styled.Button onClick={() => handleUpdateBoard(board.id)}>
                수정
              </Styled.Button>
              <Styled.Button onClick={() => handleDeleteBoard(board.id)}>
                삭제
              </Styled.Button>
            </Styled.ListItem>
          ))
        ) : (
          <Styled.LoadingMessage>Loading...</Styled.LoadingMessage>
        )}
      </Styled.List>
    </Styled.BoardWrapper>
  );
};

export default Board;