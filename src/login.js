import "./login.css";
import { Form, InputGroup, Container, Button } from "react-bootstrap";
import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch {
            setNotice("You entered a wrong username or password.");
            navigate("/signin")
        }
    }

    return (
        <>
    <Container className="d-flex align-items-center heading">
        <p className="text-center m-auto"><i class="fa-solid fa-cart-shopping"></i>    Shop @ NUS</p>
    </Container>
    <Container className="m-auto d-flex align-items-center py-2 justify-content-center loginform">  
      <Form className="m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your Student ID</Form.Label>
          <InputGroup><Form.Control type="email" value = {email} placeholder="E.g. E1234567"
          onChange={(e) => setEmail(e.target.value)} required />
          <InputGroup.Text id="basic-addon2">@u.nus.edu</InputGroup.Text></InputGroup>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick = {(e) => loginWithUsernameAndPassword(e)}>
          Submit
        </Button>
      </Form>
      </Container>
      </>
    );
  
}
  export default LoginForm;