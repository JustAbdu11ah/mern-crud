import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <h1>MERN Stack CRUD with Redux</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
