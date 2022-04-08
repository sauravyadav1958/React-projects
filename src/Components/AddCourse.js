import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import Course from "./Course";

const AddCourse = () => {

    useEffect(() => {document.title = "Add Course || FullStack"}, []);

    const [course, setCourse] = useState({});

    //form handler function

    const handleForm = (e) =>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    };

    //creating function to post data on server
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/registerEmp`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Details added successfully");
                // setCourse({id:"", name:"", address:""});
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Something went worng");
            }
        );
    };



    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>

            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="id" 
                    
                    />
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" id="title" 
                    onChange={(e)=> {
                        setCourse({...course, name: e.target.value});
                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" id="description" style={{height : 150}}
                    onChange={(e)=> {
                        setCourse({...course, address: e.target.value});
                    }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type = "submit" color="success">Add Course</Button>
                    <Button type = "reset" color="warning mx-2">Clear</Button>
                </Container>
            </Form>
            
        </Fragment>
        
    );
}

export default AddCourse;
