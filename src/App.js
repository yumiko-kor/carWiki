import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Controller } from "react-hook-form";

// page
import Main from "./pages/Main";
import { Login } from "./pages/Login/index";
import { CarView } from "./pages/CarManagement";
import { UserView } from "./pages/UserMangement"
import { StaffView } from "./pages/StaffMangement";

// style & Library
import styled from "styled-components";
import { MainLayout, LoginLayout, Layout } from "./components/common/layout";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter basename="/carwiki" >
      <GlobalStyles />
      {/* <ControllerLink>토큰이 있다면 사용할 컴포넌트</ControllerLink> */}
      
      <Routes>
        {/* 로그인 페이지 */}
        <Route element={<LoginLayout />}>
          <Route path="/" element={<Login />} />
        </Route>

        {/* 메인 화면 -> Layout은 mainLayout으로 빠져야 함 */}
        {/* 메뉴 관리 -> 공통 Layout이 element가 되어야 함 */}
        <Route element={<Layout />}>
          <Route>
            <Route path="/main" element={<Main />} />
          </Route>

        {/* 자동차 관리 */}
          <Route path="/car-management/">
            <Route path="carview"  />
          </Route>
          
        {/* 유저 관리 */}
          <Route path="/user-management/">
            <Route path="userview"/>
          </Route>

        {/* 직원 관리 */}
          <Route path="/staff-management/">
            <Route path="staffview"/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
