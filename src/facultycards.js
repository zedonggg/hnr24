import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./fundraisercards.css";

function FacultyCards() {
    return (
      <>
      <Container className='ml-auto'>
        <h1>Official Faculty merchandise sales <i class="fa-solid fa-shirt"></i></h1>
      </Container>
      <Container className='ml-auto'>
        <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button href="/"></Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container></>
    );
  }

export default FacultyCards;