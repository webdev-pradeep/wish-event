import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Message from "./Components/Message";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Message />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
