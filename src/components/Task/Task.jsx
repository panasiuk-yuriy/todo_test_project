import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask , changeStatus } from '../../store/tasks';
import cn from 'classnames';
import { Popup } from '../PopUp/PopUpWindow';

import './Task.scss';

export const Task = (props) => {
  const { name, done, id} = props;

  const dispatch = useDispatch();
  const [activeDelete, setActiveDelete]= useState(false);
  
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId))
    setActiveDelete(false)
  };

  return (
    <li>
      <div className="task"
      role="presentation"
      onClick={()=> dispatch(changeStatus(id, done))}>
      <label className={cn("task__name", {'task__done': done})}>
        {name}
      </label >
      {done &&
        <button className="task__delete-btn btn" type='button' 
          onClick={() => setActiveDelete(true)}>delete</button>}
      </div>
      {activeDelete &&
          <Popup
            name={name}
            text='Do you realy want delete?'
            closePopup={() => setActiveDelete(false)}
            confirmAction={() => handleDelete(id)}
          />
        }
    </li>
  )
}