import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import {Button, Col, Container, Row} from "reactstrap";
import {ToastContainer, toast} from "react-toastify";
import Home from "./Components/Home";
import Course from "./Components/Course";
import Allcourse from "./Components/Allcourse";
import AddCourse from "./Components/AddCourse";
import Menus from "./Components/Menus";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  const btnHandle = () => {
    toast.success("this is my first message", {position : "top-center"});
  };

  return (
    <div >
       <Router>
        <ToastContainer />
        {/* <Button color="primary" onClick = {btnHandle}>First React Button</Button>
        <Header name = "Saurav" title = "pagal" />
        <hr />
        <Header name = "Yadav" title = "yoyo"/>
        <h1>hello Bhai</h1>
        // <p>kya chal rha</p>
        <Home />
        <Course />
        <Allcourse />
        <AddCourse /> */}
        <Container>
          <Header />
          <Row>

            <Col md={4}>
              <Menus />
            </Col>

            <Col md={8}>
              <Routes>
              
                <Route path="/" element = {<Home />} />
                <Route path="/add-course" element = {<AddCourse />} />
                <Route path="/view-course" element = {<Allcourse />} />
              
              </Routes>
            </Col>

          </Row>

        </Container>
       </Router>
    </div> 

  );
}

export default App;
