import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

export const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('')
  const { 
    addTodo,
    setOpenModal,
   } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
        placeholder = "Cortar la cebolla para el almuerzo"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button 
        type="button"
        className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button 
          className="TodoForm-button TodoForm-button--add"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}
