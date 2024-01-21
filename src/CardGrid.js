import "./CardGrid.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { db } from "./firebase";
import { getDocs, query, collection } from "firebase/firestore";
import "./firebase";
import { useEffect, useState } from "react";

function CardGrid() {
    const [contents, setContents] = useState([]);

    const fetchPost = async () => {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const fetchedContents = [];
        querySnapshot.forEach((doc) => {
            // Assuming doc.data() has name and productImages properties
            fetchedContents.push({
                id: doc.id,
                name: doc.data().name,
                description: doc.data().description,
                productImages: doc.data().productImages,
            });
        });
        setContents(fetchedContents);
        console.log(contents);
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <Container>
            <p>You may also like</p>
            <Row xs={1} md={4} className="g-4">
                {contents.map(item => (
                    <Col key={item.id}>
                        <Card className="h-70">
                            {item.productImages && item.productImages[0] && (
                                <Card.Img variant="top" src={item.productImages[0]} />
                            )}
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Button variant="primary" href={`/productpage/${item.id}`}>View Product</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardGrid;
