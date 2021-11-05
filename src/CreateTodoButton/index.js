import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

export const CreateTodoButton = (props) => {
  const { openModal, setOpenModal} = useContext(TodoContext);
  const onClickButton = () => {
    props.setOpenModal(!openModal);
  };
  return (
    <button 
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
};
