import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Modal = ({ id, close }) => {
  const { isOpen, data } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  if (!isOpen || !data) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalBacraund className={`modal ${isOpen ? "open" : ""}`}>
      <ModalContent>
        <div className="content">
          <h1>{data.payload.title}</h1>
          <h1>{data.payload.date}</h1>
          <div>
            <button onClick={close}>close</button>
          </div>
        </div>
      </ModalContent>
    </ModalBacraund>,
    document.getElementById("modal")
  );
};
const ModalBacraund = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  &.open {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  border-radius: 20px;

  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  & > div > div {
    display: flex;
    gap: 10px;
  }

  & button {
    margin-top: 10px;
    padding: 5px 10px;
    font-family: "Times New Roman", Times, serif;
    font-weight: 700;
    color: white;
    background-color: orange;
    border: none;
    font-size: 20px;
    border-radius: 7px;
    cursor: pointer;
  }
`;

export default Modal;
