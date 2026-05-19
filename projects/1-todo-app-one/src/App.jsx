import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import AppName from './Components/AppName'
import AppTodo from './Components/AddTodo'
import Item from './Components/Item-One'
import Item2 from './Components/Item-two'
import"./App.css"


function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo-copy/>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App
