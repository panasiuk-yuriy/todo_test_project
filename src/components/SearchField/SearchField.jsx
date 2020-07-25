import React, { useCallback } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../store/query';
import './SearchField.scss';

export const SearchField = () => {
  const dispatch = useDispatch();

  const dispatchWithDebounce = useCallback(debounce(dispatch, 500), []);

  const handleSetQuery = (event) => {
    dispatchWithDebounce(setQuery(event.target.value));
  };

  return (
    <input className='search'
      type="text"
      placeholder="Enter task name for search"
      onKeyUp={(event) => handleSetQuery(event)}
    />
  );
};

