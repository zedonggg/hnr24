import "./login.css";
import { Form, InputGroup, Container, Button } from "react-bootstrap";

function LoginForm() {
    return (
        <>
    <Container className="d-flex align-items-center heading">
        <p className="text-center m-auto"><i class="fa-solid fa-cart-shopping"></i>Shop @ NUS</p>
    </Container>
    <Container className="m-auto d-flex align-items-center py-2 justify-content-center loginform">  
      <Form className="m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your Student ID</Form.Label>
          <InputGroup><Form.Control type="email" placeholder="E.g. E1234567" />
          <InputGroup.Text id="basic-addon2">@u.nus.edu</InputGroup.Text></InputGroup>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
      </>
    );
  }
  
  export default LoginForm;