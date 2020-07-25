import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createSelector } from 'reselect';
import queryReducer from './query';
import tasksReducer from './tasks';

export const getTasksList = (state) => state.tasksList;
export const getQuery = (state) => state.query;

export const getVisibleTasks = createSelector(
  getTasksList,
  getQuery,

  (todos, query) => {
    return todos.filter(task => (task.name)
      .toLowerCase()
      .includes(query.toLowerCase()));
  },
);

const rootReducer = combineReducers(
  {
    tasksList: tasksReducer,
    query: queryReducer,
  },
);

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') || '')
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(),
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});


export default store;
