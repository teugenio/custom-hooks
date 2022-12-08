import { useEffect, useReducer } from "react";
import { todoReducer } from "./TodoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer( todoReducer, [], init ) // dispatch

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) );
    }, [todos])

    const handleNewTodo = (todo) => {

        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }

        dispatch( action );
        // console.log( todo , action);
   }

   const handleRemoveTodo = (todo) => {


        console.log( todo );

        const action = {
            type: '[TODO] Remove todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleToggleTodo = (todo) => {


        console.log( "afectado",todo );

        const action = {
            type: '[TODO] Toggle todo',
            payload: todo
        }

        dispatch( action );
    }

  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo
  }
}
