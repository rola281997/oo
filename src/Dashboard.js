import React, { Component } from 'react';  
import './App.css';  
import TodoList from "./components/TodoList";
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  class Dashboard extends Component {  
    render() {  
  
        return (  
          <div className="App">
            <TodoList />
          </div> 
        );  
    }  
}  
  
export default Dashboard;
