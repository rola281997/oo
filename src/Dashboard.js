import React, { Component } from 'react';
import  { useState } from "react";

import './App.css';

import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { status: true };
    }
    
    App() {
        const [todos, setTodos] = useState([
          {
            text: "Attend Lac2",
            isCompleted: false
          },
          {
            text: "Complete Lab2",
            isCompleted: false
          },
          {
            text: "Complete Bonus",
            isCompleted: false
          }
        ]);
      
        const addTodo = text => {
          const newTodos = [...todos, { text }];
          setTodos(newTodos);
        };
      
        const completeTodo = index => {
          const newTodos = [...todos];
          newTodos[index].isCompleted = true;
          setTodos(newTodos);
        };
      
        const removeTodo = index => {
          const newTodos = [...todos];
          newTodos.splice(index, 1);
          setTodos(newTodos);
        };

        const [value, setValue] = useState("");
      
        const handleSubmit = e => {
          e.preventDefault();
          if (!value) return;
          addTodo(value);
          setValue("");
        };
      
        this.render()
        {   
            return (
                <div className="app">
                    <div className="todo-list">
                    {todos.map((todo, index) => (
                            <div className="todo" style={{ backgroundColor: todo.isCompleted ? "green" : "#fff" }}>
                                {index.text}
                                <div>
                                    <button onClick={() => completeTodo(index)}>√</button>
                                    <button onClick={() => removeTodo(index)}>x</button>
                                </div>
                            </div>
                    ))}
                    <form onSubmit={handleSubmit}>
                        <label>Task</label>
                        <input
                        type="text" id="txt"
                        placeholder="Task Name"
                        className="input"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />
                    <button>Add</button>
                </form>
                    </div>
                </div>
            );
        }
    }
        
    

    
}

export default Dashboard;