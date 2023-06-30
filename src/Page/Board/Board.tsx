import { useState, useEffect } from "react";
import * as Styled from "./styled";
import { MarginTopWrapper } from "../../Common/styled";
import axios from "axios";


const Board = () => {
  const [boardList, setBoardList] = useState<any[]>([]);

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

  return (
          <Styled.BoardWrapper>
            <Styled.TitleBox>
              <Styled.BoardTitle>게시판 목록</Styled.BoardTitle>
            </Styled.TitleBox>
            <ul>
              {boardList.length > 0 ? (
                boardList.map((board) => (
                  <Styled.ListItem key={board.id}>
                    {board.board_title} {board.board_contents} {board.board_writer} {board.board_hits} {board.board_pass}
                  </Styled.ListItem>
                ))
              ) : (
                <Styled.LoadingMessage>Loading...</Styled.LoadingMessage>
              )}
            </ul>
          </Styled.BoardWrapper>
        );
};

export default Board;