import React from "react";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}
