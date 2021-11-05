import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

export const AppUI = () => {
  const {
    error, 
    loading, 
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodosError error={error} />}
        {loading && new Array(5).fill(1).map((a, i) =>  <TodosLoading key={i} />)}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        {searchedTodos.map((todo, index) => (
          <TodoItem 
            key={index} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  )
}
