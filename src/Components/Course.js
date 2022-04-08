import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import base_url from "../api/bootapi";

const Course=({course, update})=> {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/delete/${id}`).then(
            (response) => {
                toast.success("course deleted");
                update(id);
            },
            (error) => {
                toast.error("not deleted! something went wrong");
            }
        );
    };

    return (<Card className="text-center">
        <CardBody>
            <CardSubtitle className="fw-bold">{course.name}</CardSubtitle>
            <CardText>{course.address}</CardText>
            <Container >
                <Button color="danger" onClick={() => {deleteCourse(course.id);}}>Delete</Button>
                <Button color="warning m-3">Update</Button>
            </Container>
        </CardBody>
    </Card>);
}

export default Course;