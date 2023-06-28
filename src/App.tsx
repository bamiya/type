import Main from "./Page/Main/Main"
import Header from "./Component/Header/Header"
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
