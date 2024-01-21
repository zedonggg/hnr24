import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/esm/Container';
import "./searchbar.css"

function SearchBar() {
  return (
    <Container className='searchbar'>
      <InputGroup className="mb-3">
        <Form.Control
            className='fa'
          placeholder= "Discover, Connect and Share"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </Container>
  );
}

export default SearchBar;