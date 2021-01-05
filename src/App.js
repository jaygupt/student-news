import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './bullDog.png';
import Image from 'react-bootstrap/Image';
import './App.css';
import Navbar from './Components/Navbar';
import Cardview from './Components/Cardview';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className = "bar-header">
        <Router>
          <Navbar/>
          <Switch>
            <Route path = '/'/>
          </Switch>
        </Router>
      </header>
      <header className="App-header">
        <h2 className = "title1">
          <center>Student News</center>
        </h2>
        <Container>
          <Row className = "justify-content-md-center">
            <div className = "bullDog">
              <Col>
                <Image
                  src = {logo}
                  width = "400"
                  height = "300"
                  roundedCircle
                />
              </Col>
            </div>
          </Row>
        </Container>
        <h2 className = "title2">
          <center>Selected By Students For Students</center>
        </h2>
        <center><Cardview/></center>
      </header>
        
    </div>
  );
}

export default App;


