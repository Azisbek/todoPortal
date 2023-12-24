import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../store/todosSlice";
import ItemTodo from "./ItemTodo";
import styled from "styled-components";

const ListTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todoData);
  const loading = useSelector((state) => state.todo.status);

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);
  return (
    <>
      {loading === "loading" && (
        <h1 style={{ textAlign: "center" }}>Loading..</h1>
      )}
      <UlStyle>
        {todos.map((el) => {
          return (
            <ItemTodo
              key={el.id}
              title={el.title}
              date={el.date}
              completed={el.completed}
              id={el.id}
            />
          );
        })}
      </UlStyle>
    </>
  );
};
const UlStyle = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin-top: 20px;
`;

export default ListTodo;
