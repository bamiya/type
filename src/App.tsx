import Main from "./Page/Main/Main"
import Header from "./Component/Header/Header"
import Board from "./Page/Board/Board";
import Login from "./Page/Login/Login";
import SignUp from "./Page/SignUp/SignUp";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

const App = () => {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Main/>}/>
          <Route path="/board" element={<Board/>}/>
        </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
