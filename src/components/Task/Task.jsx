import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, changeStatus } from '../../store/tasks';
import cn from 'classnames';
import { Popup } from '../PopUp/PopUpWindow';
import PropTypes from 'prop-types';
import './Task.scss';

export const Task = ({ name, done, id }) => {

  const dispatch = useDispatch();
  const [activeDelete, setActiveDelete] = useState(false);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId))
    setActiveDelete(false)
  };

  return (
    <li>
      <div className="task">
        <p
          onClick={() => dispatch(changeStatus(id, done))}
          className={cn("task__name", { 'task__done': done })}
          role="presentation"
        >
          {name}
        </p >
        {done &&
          <button className="task__delete-btn btn" type='button'
            onClick={() => setActiveDelete(true)}>delete</button>}
      </div>
      {activeDelete &&
        <Popup
          open={activeDelete}
          name={name}
          text='Do you really want delete?'
          closePopup={() => setActiveDelete(false)}
          confirmAction={() => handleDelete(id)}
        />
      }
    </li>
  )
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};
