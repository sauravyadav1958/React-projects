import React, {useEffect, useState} from "react";
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const Allcourse = () => {

    useEffect(() => {document.title = "All Course || FullStack"}, []);


    //function call to server:
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/employees`).then(
            (response) => {
                //success
                console.log(response.data);
                toast.success("courses has been loaded", {
                    position : "bottom-center"
                });
                setCourses(response.data);

            },
            (error) => {
                //for error
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };

    useEffect(() => {getAllCoursesFromServer();}, []);



    const [courses, setCourses] = useState([
        // {title:"Java Course", description: "this is demo course"},
        // {title:"Django Course", description: "this is demo course"},
        // {title:"Reactjs Course", description: "this is demo course"},
        // {title:"Angular Course", description: "this is demo course"},
    ]);

    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id != id));
    };

    return (

        <div>
            <h1>All Course</h1>
            <p>List of courses are as follows</p>

            {courses.length > 0 ? courses.map((item) => <Course key={item.locationId} course={item} update={updateCourses}/>) 
            : "No Courses"}
        </div>
    );
}

export default Allcourse;