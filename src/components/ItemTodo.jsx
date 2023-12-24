import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeModal, modalThunk, openModal } from "../store/modalSlice";
import Modal from "./modal/Modal";
import { deleteItem } from "../store/todosSlice";

const ItemTodo = ({ title, date, id, completed }) => {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modal.data);

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const deleteItemHandler = (id) => {
    dispatch(deleteItem(id));
    closeModalHandler();
  };

  const openModalHandler = async () => {
    try {
      const data = await dispatch(modalThunk(id));
      console.log("Modal Data:", data);
      dispatch(openModal(data));
    } catch (error) {
      console.error("Error opening modal:", error);
    }
  };

  return (
    <>
      <ListStyle>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <button onClick={() => deleteItemHandler(id)}>delete</button>
        <button onClick={() => openModalHandler()}>open</button>
      </ListStyle>
      <Modal close={closeModalHandler} data={modalData} id={id} />
    </>
  );
};

const ListStyle = styled.li`
  padding: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background-color: blue;
  color: white;
  width: 600px;
  font-family: "Times New Roman", Times, serif;
  cursor: pointer;
  border-radius: 10px;
  word-break: break-all;

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

export default ItemTodo;
