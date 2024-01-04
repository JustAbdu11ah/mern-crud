import { FETCH_TODOS } from '../actions/todoActions';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    // Add other cases for different actions if needed
    default:
      return state;
  }
};

export default todoReducer;
