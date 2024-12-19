import { useState, useEffect } from 'react';
import { Todo } from '@/types/todo';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-hot-toast';

const initialTodo: Todo = {
  id: uuid(),
  text: "Add your first todo...",
  isCompleted: false,
  date: new Date().toUTCString().slice(0, 16)
};

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([initialTodo]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: uuid(),
      text,
      isCompleted: false,
      date: new Date().toUTCString().slice(0, 16)
    };
    setTodos(prev => [...prev, newTodo]);
    toast.success("Added");
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
    toast.error("Deleted");
  };

  const completeTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, isCompleted: true, date: new Date().toUTCString().slice(0, 16) }
        : todo
    ));
    toast.success("Completed!");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return { todos, addTodo, deleteTodo, completeTodo };
};