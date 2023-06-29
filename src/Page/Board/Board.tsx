import { useState, useEffect } from 'react';
import * as Styled from "./styled";
import axios from 'axios';

const Board = () => {
  const [boards, setBoards] = useState([
    {
        id : '',
        title : '',
        content : ''
    }
  ]);

  useEffect(() => {
    // API 호출
    axios.get('http://localhost:8080/board')
      .then(response => {
        setBoards(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Styled.BoardWrapper>
      <h2>게시판 목록</h2>
      <ul>
        {boards.map(board => (
          <li key={board.id}>
            <h3>{board.title}</h3>
            <p>{board.content}</p>
          </li>
        ))}
      </ul>
    </Styled.BoardWrapper>
  );
};

export default Board;