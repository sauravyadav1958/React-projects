import React from "react";
import {Card, Container, Button} from "reactstrap";

const Home = () =>{
    return (
        <div>
            <Card className = "text-center p-3" color="light"  >
                <h1 >Card title</h1>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                <Container className="mb-3">
                        <Button color = "primary" outline>Start Using</Button>
                </Container>   
            </Card>    
        </div>
    );
}

export default Home;