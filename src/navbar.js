import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css";


function NavBar() {
  return (
    <Navbar expand="lg" className="navbar1 py-4">
      <Container className='navbox'>
        
        <Navbar.Brand className='brand' href="#home"><i class="fa-solid fa-cart-shopping"></i>   SHOP<span style={{color: "#ff6d00"}}>NUS</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto justify-content-end pl-4">
            <Nav.Link href="#home">Community</Nav.Link>
            <Nav.Link href="/fundraiser">Fundraisers</Nav.Link>
            <Nav.Link href="#link">Faculty</Nav.Link>
            <Nav.Link href="/signin"><Button href="/signin" variant='primary' className='signin'>Sign In</Button></Nav.Link>
            
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