import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";
import axios from "axios";

const BoardCreate = () => {
  const navigate = useNavigate();

  const [updatedBoard, setUpdatedBoard] = useState({
    board_title: "",
    board_contents: "",
    board_writer: "",
    board_hits: 0,
    board_pass: ""
  });

  const handleCreateBoard = async () => {
    try {
      await axios.post("http://localhost:8080/board", updatedBoard);
      setUpdatedBoard({
        board_title: "",
        board_contents: "",
        board_writer: "",
        board_hits: 0,
        board_pass: ""
      });
      navigate("/board");
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
};

export  {BoardCreate}