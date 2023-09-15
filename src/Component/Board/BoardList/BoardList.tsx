import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";
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

  const handleBoardClick = (id: number) => {
    navigate(`/board/${id}`);
  };

  return (
    <>
    <Header titleColor="black" textColor="black" />
    <Styled.BoardListContainer>
      <Styled.TopPaper>
        <Styled.WrapperMenu>
          <Styled.Menu>
            <Styled.MenuText>전체</Styled.MenuText>
            <Styled.MenuText>인기글</Styled.MenuText>            
          </Styled.Menu>
          <Styled.CreateButton>글쓰기</Styled.CreateButton>
        </Styled.WrapperMenu>
      </Styled.TopPaper>
        <Styled.ListWrapper>
          <Styled.List>
            {boardList.length > 0 ? (
              boardList.map((board) => (
                <Styled.ListItem key={board.id} onClick={() => handleBoardClick(board.id)}>
                  <Styled.ListText>{board.board_title}</Styled.ListText>
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