import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// page
import Main from "./pages/Main";

// style
import styled from "styled-components";
import globalStyles from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
