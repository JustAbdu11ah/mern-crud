import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../redux/actions/todoActions';

const TodoList = ({ todos, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.description}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

const mapDispatchToProps = {
  fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
