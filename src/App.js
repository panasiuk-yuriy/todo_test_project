import React from 'react';
import { useSelector } from 'react-redux';
import { TasksList } from './components/TasksList/TasksList';
import { AddTaskSection } from './components/AddTaskSection/AddTaskSection';
import { SearchField } from './components/SearchField/SearchField';
import { getTasksList } from './store/index';
import './App.scss';

function App() {
  const tasks = useSelector(getTasksList);
  
  return (
  <>
  <div className='container'>
    <h1 className="title">Tasks App</h1>
    {tasks.length >= 2 && <SearchField />}
    <div className="task-container">
      <AddTaskSection />
      <section className="main">
        <TasksList />
      </section>
    </div>
  </div>
  </>
  );
}

export default App;
