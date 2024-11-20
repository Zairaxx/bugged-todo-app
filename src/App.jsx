import { useState } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
export default function App() {
  let [todos, setTodos] = useState([
    {
      todo: "Börja på denna övningsuppgift",
      completed: true
    },
    {
      todo: "Tvätta kläder",
      completed: false
    }
  ]);
  let addTodo = () => {
    let todoInput = document.querySelector("#todoInput");
    let newTodo = {
      todo: todoInput.value,
      completed: false
    };
    let allTodos = [...todos];
    allTodos.push(newTodo);
    allTodos.sort((a, b) => {
      return a.completed - b.completed;
    });
    alert(`Todo: "${todoInput.value}" added!`);
    todoInput.value = "";
    setTodos(allTodos);
  };
  //Skapa complete todo

  let completeTodo = (index) => {
    let newTodoList = [...todos];

    newTodoList[index].completed = true;
    newTodoList.sort((a, b) => {
      return a.completed - b.completed;
    });
    setTodos(todos);
  };

  return (
    <div className="App">
      <h1>Todo application</h1>
      <Routes>
        <Route
          path="/"
          element={<Home todos={todos} completeTodo={completeTodo} />}
        />
        <Route path="/new" element={<AddTodo addTodo={addTodo} />} />
      </Routes>
    </div>
  );
}
