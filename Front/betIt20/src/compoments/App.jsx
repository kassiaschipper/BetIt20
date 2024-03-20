//import { useState } from "react";
import GlobalStyle from "../assets/style/GlobalStyle";
import Home from "./home/Home";
import Registration from "./registration/Registration";
import Draw from "./draw/Draw";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/draw" element={< Draw/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
