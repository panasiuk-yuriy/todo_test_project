import React from 'react';
import { useSelector } from 'react-redux'
import { getVisibleTasks } from '../../store/index';
import { Task } from '../Task/Task';

export const TasksList = () => {
const todos = useSelector(getVisibleTasks);

  return (
    <>
    <ul className="task-list">
      {todos.map(task => (
        <Task key={task.id} {...task}/>
      ))}
    </ul>
    </>
  )
}