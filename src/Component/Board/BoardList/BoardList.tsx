import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const BoardList = () => {
  const [boardList, setBoardList] = useState<Board[]>([]);
  const navigate = useNavigate();

  const getBoardList = async () => {
    try {
      const res = await axios.get<Board[]>("http://localhost:8080/board");
      setBoardList(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBoardList();
  }, []);

  const handleBoardClick = (id: number) => {
    navigate(`/board/${id}`);
  };

  return (
    <>
    <Styled.TopPaper>abc</Styled.TopPaper>
    <Styled.ListWrapper>
      <Styled.List>
        {boardList.length > 0 ? (
          boardList.map((board) => (
            <Styled.ListItem key={board.id} onClick={() => handleBoardClick(board.id)}>
              <Styled.ListText>{board.board_title}</Styled.ListText>
              <Styled.ListText>{board.board_contents}</Styled.ListText>
              <Styled.ListText>{board.board_writer}</Styled.ListText>
              <Styled.ListText>{board.board_hits}</Styled.ListText>
              <Styled.ListText>{board.board_pass}</Styled.ListText>
            </Styled.ListItem>
          ))
        ) : (
          <Styled.LoadingMessage>Loading...</Styled.LoadingMessage>
        )}
      </Styled.List>
      </Styled.ListWrapper>
    </>
  );
};

export default BoardList;