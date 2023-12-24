import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getItem, postItem } from "../store/todosSlice";
import { useNavigate } from "react-router";

const AddTodo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");

  const inputTitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const inputDateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

  const addSubmitChangeHandler = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      date: date,
    };
    dispatch(postItem(data));
    setDate("");
    setTitle("");
    navigate("/list");
  };

  return (
    <>
      <FormStyle onSubmit={addSubmitChangeHandler}>
        <div>
          <input
            value={title}
            type="text"
            placeholder="title"
            onChange={inputTitleChangeHandler}
          />
          <input type="date" onChange={inputDateChangeHandler} value={date} />
          <button>ADD</button>
        </div>
      </FormStyle>
    </>
  );
};

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  & div {
    display: flex;
    flex-direction: column;
    background-color: blue;
    padding: 20px;
    align-items: center;
    gap: 10px;
    border-radius: 7px;
  }

  & input {
    width: 300px;
    padding: 4px;
    font-size: 20px;
    border-radius: 7px;
    border: none;
    font-family: "Times New Roman", Times, serif;
  }
  & button {
    padding: 5px 10px;
    font-family: "Times New Roman", Times, serif;
    font-weight: 700;
    color: white;
    background-color: orange;
    border: none;
    font-size: 20px;
    border-radius: 7px;
  }
`;

export default AddTodo;
