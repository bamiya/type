import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const BoardDetail = () => {
  const { id } = useParams();
  const [board, setBoard] = useState<Board | null>(null);

  const getBoardDetail = async () => {
    try {
      const res = await axios.get<Board>(`http://localhost:8080/board/${id}`);
      setBoard(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBoardDetail();
  }, [id]);

  return (
    <Styled.DetailWrapper>
      {board ? (
        <>
          <Styled.DetailTitle>{board.board_title}</Styled.DetailTitle>
          <Styled.DetailContents>{board.board_contents}</Styled.DetailContents>
          <Styled.DetailWriter>{board.board_writer}</Styled.DetailWriter>
          <Styled.DetailHits>{board.board_hits}</Styled.DetailHits>
          <Styled.DetailPass>{board.board_pass}</Styled.DetailPass>
        </>
      ) : (
        <Styled.LoadingMessage>Loading...</Styled.LoadingMessage>
      )}
    </Styled.DetailWrapper>
  );
};

export {BoardDetail}