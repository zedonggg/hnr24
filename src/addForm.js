import { Container, Navbar } from "react-bootstrap";
import { Form, Row, Col, Button } from "react-bootstrap";
// import Button from "react-bootstrap";
// import Col from "react-bootstrap";
import { useState } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

function AddForm() {
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
    alert(inputs);
  }

    return (
        <>
        <NavBar />
      <Container className="adddforms">
        <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="What's your listing name?" type="text" 
        name="listingname" 
        value={inputs.listingname || ""} 
        onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" 
        name="location" 
        value={inputs.location || ""} 
        onChange={handleChange} placeholder="Location" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" 
        name="description" 
        value={inputs.description || ""} 
        onChange={handleChange}placeholder="Provide a brief description of your listing" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridLocDetails">
        <Form.Label>Meetup Details</Form.Label>
        <Form.Control type="text" 
        name="meetdetail" 
        value={inputs.meetdetail || ""} 
        onChange={handleChange}placeholder="Provide detailed meetup locations including dates of sales" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridImg">
          <Form.Label>Please provide a link to promotional images</Form.Label>
          <Form.Control type="text" 
        name="imglink" 
        value={inputs.imglink || ""} 
        onChange={handleChange}/>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPrice">
          <Form.Label>Prices starting from</Form.Label>
          <Form.Control type="text" 
        name="prices" 
        value={inputs.prices || ""} 
        onChange={handleChange}/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Add Listing
      </Button>
    </Form>
      </Container>
      <Footer />
      </>
    );
  }
  
  export default AddForm;