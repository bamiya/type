import Main from "./Page/MainPage/Main"
import Header from "./Component/Header/Header"
import Board from "./Page/BoardPage/Board";
import Login from "./Page/LoginPage/Login";
import SignUp from "./Page/SignUpPage/SignUp";
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
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
export default App;
