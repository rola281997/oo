import React, { Component } from 'react';

import './App.css';

import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';

class Login extends Component {

    constructor() {

        super();


      this.state = {

          username: '',

            password: ''

        }


        this.password = this.password.bind(this);

        this.username = this.username.bind(this);

        this.login = this.login.bind(this);

    }


    username(event) {

        this.setState({ username: event.target.value })

    }

    password(event) {

        this.setState({ password: event.target.value })

    }

    login(event) {

        debugger;

        fetch('http://todoapp.ahmedrohym.com/api.php?apicall=login', {

            method: 'post',

            body: JSON.stringify({

                username: this.state.username,

                password: this.state.password

            })

        }).then((Response) => Response.json())

            .then((result) => {

                console.log(result);

                if (result.message == 'Invalid username or password')

                    alert('Invalid User');

                else

                    this.props.history.push("/Dashboard");

            })

    }


    render() {


        return (

            <div className="app flex-row align-items-center">

                <Container>

                    <Row className="justify-content-center">

                        <Col md="9" lg="7" xl="6">


                            <CardGroup>

                                <Card className="p-2">

                                    <CardBody>

                                        <Form>

                                            <div class="row" className="mb-2 pageheading">

                                                <div class="col-sm-12 btn btn-primary">

                                                    Login

                             </div>

                                            </div>

                                            <InputGroup className="mb-3">


                                                <Input type="text" onChange={this.username} placeholder="Enter username" />

                                            </InputGroup>

                                            <InputGroup className="mb-4">


                                                <Input type="password" onChange={this.password} placeholder="Enter password" />

                                            </InputGroup>

                                            <Button onClick={this.login} color="success" block>Login</Button>

                                        </Form>

                                    </CardBody>

                                </Card>

                            </CardGroup>

                        </Col>

                    </Row>

                </Container>

            </div>

        );

    }

}


export default Login;