const CHANGE_QUERY = 'CHANGE_QUERY';

export const setQuery = (text) => ({ type: CHANGE_QUERY, text });

const reducer = (query = '', action) => {
  switch (action.type) {
    case CHANGE_QUERY:
      return action.text.toLowerCase();
    default:

    return query;
  }
};

export default reducer;
