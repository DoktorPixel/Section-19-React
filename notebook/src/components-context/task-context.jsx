import React, { createContext, useContext, useReducer, useEffect } from 'react';
import tasksReducer from '../components-reducer/tasks-reducer';

// Создаем контекст для задач
const TasksContext = createContext();

// Создаем и экспортируем хук для использования контекста
export function useTasksContext() {
  return useContext(TasksContext);
}

// Создаем и экспортируем провайдер контекста, который будет оборачивать все дочерние компоненты
export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks,
    (initial) => {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : initial;
    }
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];
