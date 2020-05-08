import React, { Component } from 'react';

import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';


class Reg extends Component {


  constructor() {

    super();
    


    this.state = {

      username: '',
      password: '',
      email: '',

      gender: '',

      

     

      

    }


    this.username = this.username.bind(this);
    this.password = this.password.bind(this);
    this.email = this.email.bind(this);
 

    this.gender = this.gender.bind(this);

    this.register = this.register.bind(this);

  }




  username(event) {

    this.setState({ username: event.target.value })

  }


  password(event) {

    this.setState({ password: event.target.value })

  }


  email(event) {

    this.setState({ email: event.target.value })

  }

  gender(event) {

    this.setState({ gender: event.target.value })

  }




  register(event) {

    console.log(this.state)
    fetch('http://todoapp.ahmedrohym.com/api.php?apicall=signup', {

      method: 'post',

      /*headers: {

        'Accept': 'application/json',

        'Content-Type': 'application/json'

      },*/

      body: JSON.stringify({


        username: this.state.username,

        password: this.state.password,

        email: this.state.email,

        gender: this.state.gender,

       

      })

    }).then((Response) => Response.json())

      .then((Result) => {

        if (Result.message == 'User registered successfully')

                this.props.history.push("/Dashboard");

        else

          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')

      })

  }


  render() {


    return (

      <div className="app flex-row align-items-center">

        <Container>

          <Row className="justify-content-center">

            <Col md="9" lg="7" xl="6">

           <Card className="mx-4">
            <CardBody className="p-4">

                  <Form>

                    <div class="row" className="mb-2 pageheading">
                  <div class="col-sm-12 btn btn-primary">

                        Sign Up

                        </div>

                    </div>

                    <InputGroup className="mb-3">

                      <Input type="text"  onChange={this.username} placeholder="Enter username" />

                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Input type="password"  onChange={this.password} placeholder="Enter password" />

                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Input type="text"  onChange={this.email} placeholder="Enter email" />

                    </InputGroup>

                    <InputGroup className="mb-4">
                   <Input type="text"  onChange={this.gender} placeholder="Enter gender" />
                 </InputGroup>

                    
                    <Button  onClick={this.register}  color="success" block>Create Account</Button>

                  </Form>

                </CardBody>

              </Card>

            </Col>

          </Row>

        </Container>

      </div>

    );
  }

}


export default Reg;