import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap";
import Col from "react-bootstrap";
import Row from "react-bootstrap";
import { useState } from "react";

function AddForm() {
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

    return (
      <Container>
        <Form>
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
        <Form.Control placeholder="Provide a brief description of your listing" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridLocDetails">
        <Form.Label>Meetup Details</Form.Label>
        <Form.Control placeholder="Provide detailed meetup locations including dates of sales" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridImg">
          <Form.Label>Please provide a link to promotional images</Form.Label>
          <Form.Control />
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridPrice">
          <Form.Label>Prices starting from</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Add Listing
      </Button>
    </Form>
      </Container>
    );
  }
  
  export default AddForm;