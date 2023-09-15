import BoardList from "../../Component/Board/BoardList/BoardList";
import {BoardCreate} from "../../Component/Board/BoardCreate/BoardCreate";
import {BoardDetail} from "../../Component/Board/BoardDetail/BoardDetail";
import { Route, Routes } from "react-router-dom";

const Board = () => {
  return (
    <Routes>
      <Route path="/" element={<BoardList />} />
      <Route path="/boardcreate" element={<BoardCreate />} />
      <Route path="/:id" element={<BoardDetail />} />
    </Routes>
  );
};

export default Board;