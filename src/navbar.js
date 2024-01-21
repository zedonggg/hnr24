import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





function NavBar() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [isLoggedin, setIsLoggedIn] = useState(false);
      onAuthStateChanged(auth, function(user) {
        setIsLoggedIn(!!user);
      });

      const user = auth.currentUser;

    const logoutUser = async (e) => {
        e.preventDefault();

        await signOut(auth);
        navigate("/");
    }

// function LoginStatus() {
//   var navrendered = "<h1>0</h1>";
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       navrendered = (<>
//       <Nav.Link href="#link">Profile</Nav.Link>
//       <Nav.Link href="/signup"><Button href="/signup" variant='primary' className='signin'>Sign Out</Button></Nav.Link>
//       </>);
//     } else {
//       navrendered = (<Nav.Link href="/signup"><Button href="/signup" variant='primary' className='signin'>Sign In</Button></Nav.Link>);
//     }
//   });
// }
//   console.log(navrendered);
  return (
    <Navbar expand="lg" className="navbar1 py-4">
      <Container className='navbox'>
        
        <Navbar.Brand className='brand' href="/"><i class="fa-solid fa-cart-shopping"></i>   SHOP<span style={{color: "#ff6d00"}}>NUS</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto justify-content-end pl-4">
            <Nav.Link href="/community">Community</Nav.Link>
            <Nav.Link href="/fundraiser">Fundraisers</Nav.Link>
            <Nav.Link href="/faculty">Faculty</Nav.Link>
            {isLoggedin? (<>
       <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link><Button  variant='primary' className='signout' onClick={(e) => logoutUser(e)}>Sign Out</Button></Nav.Link>
      </>) : (<Nav.Link href="/signup"><Button href="/signup" variant='primary' className='signin'>Sign In</Button></Nav.Link>) }
            {/* <Nav.Link href="/signup"><Button href="/signup" variant='primary' className='signin'>Sign In</Button></Nav.Link> */}
            
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;