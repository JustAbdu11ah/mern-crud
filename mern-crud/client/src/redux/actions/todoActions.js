import axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';

// Action creator for fetching todos
export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/todos');
    dispatch({
      type: FETCH_TODOS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};
