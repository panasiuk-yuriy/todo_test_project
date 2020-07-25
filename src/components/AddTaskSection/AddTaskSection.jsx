import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/todos';
import './AddTaskSection.scss';

export const AddTaskSection = () => {

  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSetName = (event) => {
    setName(event.target.value.trimLeft())
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask({ name, id: Date.now(), done: false }))
    setName('');
  };

  return (
    <div className="top">
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="top__form">
          <input
            className='top__input-add'
            type="text" value={name}
            onChange={(event) => handleSetName(event)
            }
            placeholder="Enter task and press 'Add Task' button"
          />
          <button
            disabled={name.length < 1}
            className="top__add-btn btn"
            type='submit'>
            Add Task
          </button>
        </div>
      </form>
    </div>
  )
}