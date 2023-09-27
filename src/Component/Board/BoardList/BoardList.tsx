import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";
import { BoardLink } from "./styled";
import axios from "axios";
import Header from "../../Header/Header";

interface Board {
  id: number;
  board_title: string;
  board_writer: string;
  board_hits: number;
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

  // const handleBoardClick = (id: number) => {
  //   navigate(`/board/${id}`);
  // };
  //<Styled.ListText onClick={() => handleBoardClick(board.id)}>{board.board_title}</Styled.ListText>

  const handleCreateButtonClick = () => {
    navigate("/create"); // 원하는 경로로 이동
  };

  return (
    <>
    <Header titleColor="black" textColor="black" />
    <Styled.BoardListContainer>
      <Styled.TopPaper>

          <Styled.Menu>
            <Styled.MenuText>전체</Styled.MenuText>
            <Styled.MenuText>인기글</Styled.MenuText>            
          </Styled.Menu>
          <Styled.CreateButton onClick={handleCreateButtonClick}>글쓰기</Styled.CreateButton>

      </Styled.TopPaper>
      <Styled.Header>
        <Styled.HeaderItem>제목</Styled.HeaderItem>
        <Styled.HeaderItem>작성자</Styled.HeaderItem>
        <Styled.HeaderItem>조회수</Styled.HeaderItem>
      </Styled.Header>
        <Styled.ListWrapper>
          <Styled.List>
            {boardList.length > 0 ? (
              boardList.map((board) => (
                <Styled.ListItem key={board.id}>                  
                  <BoardLink to={`/board/${board.id}`}>{board.board_title}</BoardLink>
                  <Styled.ListText>{board.board_writer}</Styled.ListText>
                  <Styled.ListText>{board.board_hits}</Styled.ListText>
                </Styled.ListItem>
              ))
            ) : (
              <Styled.LoadingMessage>Loading...</Styled.LoadingMessage>
            )}
          </Styled.List>
        </Styled.ListWrapper>
    </Styled.BoardListContainer>
    </>
  );
};

export default BoardList;