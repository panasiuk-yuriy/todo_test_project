const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
const DELETE_TASK = 'DELETE_TASK';
const ADD_TASK = 'ADD_TASKS';

export const addTask = (task) => ({ type: ADD_TASK, task });
export const deleteTask = (id) => ({ type: DELETE_TASK, id });
export const changeStatus = (id, done) => ({ type: CHANGE_TASK_STATUS, id, done});

const reducer = (tasksList = [], action) => {
  switch (action.type) {
    case CHANGE_TASK_STATUS:
      return tasksList.map(task => {
        if (task.id === action.id) {
          return {...task, done: !action.done}
        }
        return task;
      })
    case DELETE_TASK:
      return tasksList.filter(task =>task.id !== action.id)
    case ADD_TASK:
      return [...tasksList, action.task]
    default:
      return tasksList;
  }
};

export default reducer;
