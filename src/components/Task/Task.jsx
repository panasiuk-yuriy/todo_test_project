import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, changeStatus, editTask } from '../../store/tasks';
import cn from 'classnames';
import { Popup } from '../PopUp/PopUpWindow';
import PropTypes from 'prop-types';
import './Task.scss';

export const Task = ({ name, done, id }) => {

  const dispatch = useDispatch();
  const [activeDelete, setActiveDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState('');

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId))
    setActiveDelete(false)
  };

  const activateEditing = () => {
    setIsEdit(true);
    setNewName(name)
  };

  const handleChange = ({ target }) => {
    setNewName(target.value.trimLeft().replace(/(\s{2,})/, ' '))
  };

  const escapeEditing = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      setIsEdit(false);
    }
  };

  const handleEditTask = (target, taskId, newName) => {
    if (target.keyCode === 13) {
      dispatch(editTask(taskId, newName))
    };

    if (newName === '' && target.keyCode === 27) {
      setIsEdit(false);
    }

    if (newName === '') {
      return;
    }

    escapeEditing(target);
  };

  return (
    <li>
      <div className="task">
        {isEdit ?
          (<input
            onChange={(e) => handleChange(e)}
            className="task__editing top__input-add"
            value={newName}
            onBlur={() => setIsEdit(false)}
            onKeyDown={e => handleEditTask(e, id, newName)}
            autoFocus
          />
          ) :
          (<>
            <p
              onClick={() => dispatch(changeStatus(id, done))}
              onDoubleClick={() => activateEditing()}
              className={cn("task__name", { 'task__done': done })}
              role="presentation"
            >
              {name}
            </p>
            {done &&
              <button className="task__delete-btn btn" type='button'
                onClick={() => setActiveDelete(true)}>delete</button>}
          </>)
        }
      </div>
      {activeDelete &&
        <Popup
          open={activeDelete}
          name={name}
          text='Do you really want delete'
          closePopup={() => setActiveDelete(false)}
          confirmAction={() => handleDeleteTask(id)}
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
