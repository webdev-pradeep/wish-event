import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Message from "./Components/Message";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Message />} />
      </Routes>
    </>
  );
};

export default App;
