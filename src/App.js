import React from "react";
import Layaut from "./components/layout/Layaut";
import { Navigate, Route, Routes } from "react-router";
import AddTodo from "./components/addTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <>
      <Layaut>
        <Routes>
          <Route path="/" element={<Navigate to="/form" />} />
          <Route path="/form" element={<AddTodo />} />
          <Route path="/list" element={<ListTodo />} />
        </Routes>
      </Layaut>
    </>
  );
}

export default App;
