import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
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
import { auth } from "./store/auth";
import { MainLayout, LoginLayout, Layout, Return } from "./components/common/layout";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const isToken = sessionStorage.getItem('token') ? true : false;

  return (
    <BrowserRouter basename="/carwiki" >
      <GlobalStyles />
      {/* <ControllerLink>토큰이 있다면 사용할 컴포넌트</ControllerLink> */}
      <ControllLink>{isToken ? <Link to="/main"/> : <Link to="/fail" />}</ControllLink>
      <Routes>
        {/* 로그인 페이지 */}
        <Route element={<LoginLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/fail" element={<Return/>} />
        </Route>
        {/* 메인 화면 -> Layout은 mainLayout으로 빠져야 함 */}
        {/* 메뉴 관리 -> 공통 Layout이 element가 되어야 함 */}
        <Route>
          <Route element={ <Layout /> }>
            <Route path="/main" element={<Main />} />
          </Route>

        {/* 자동차 관리 */}
          <Route path="/car-management/" element={<CarView />} >
            {/* 등록페이지 */}
            {/* <Route path="carview" /> */}
          </Route>
          
        {/* 유저 관리 */}
          <Route path="/user-management/" element={<UserView />}>
            {/* <Route path="userview" element={<UserView />} /> */}
          </Route>

        {/* 직원 관리 */}
          <Route path="/staff-management/" element={<StaffView />} >
            {/* <Route path="staffview" element={<StaffView />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const ControllLink = styled.div`
	/* position: absolute; */
`;


export default App;
