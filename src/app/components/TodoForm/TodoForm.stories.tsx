import React from "react";
import TodoForm from "./TodoForm";

export default {
    title: 'Component/TodoForm',
    component: TodoForm,
  };

  export const Todo =() :JSX.Element => <TodoForm todo="Todo" onChange={() => console.log('Test')} />