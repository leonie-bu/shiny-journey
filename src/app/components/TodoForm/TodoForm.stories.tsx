import React from "react";
import TodoForm from "./TodoForm";

export default {
    title: 'Component/TodoForm',
    component: TodoForm,
  };

  export const TodoF =() :JSX.Element => <TodoForm value="" onChange={() => console.log('Test')} />