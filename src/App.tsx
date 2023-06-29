import Main from "./Page/Main/Main"
import Header from "./Component/Header/Header"
import Board from "./Page/Board/Board";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';


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
      </Routes>
    </BrowserRouter>
  )
}
export default App;
