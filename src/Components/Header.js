import React from "react";
import { Card, CardBody } from "reactstrap";


function Header({name, title}){
    return (
        // <div style={{background : 'yellow', padding : 20, width : 400}}>
        //     <h1>{title}</h1>
        //     <p>{name}</p>
        //     <p>This is header component</p>
        // </div>

        <div>
            <Card className=" m-3" color = "warning" >
                <CardBody>
                <h1 className="text-center m-3">Welcome to Courses Application</h1>
                </CardBody>
            </Card>
            
        </div>
    );
}

export default Header;