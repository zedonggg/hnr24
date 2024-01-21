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

function CommCards() {
    const [contents, setContents] = useState([]);

    const fetchPost = async () => {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const fetchedContents = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.productType === "Community") { 
                fetchedContents.push({
                    id: doc.id,
                    name: data.name,
                    description: data.description,
                    productImages: data.productImages,
                });
            }
        });
        setContents(fetchedContents);
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <Container>
            <br />
            <Row xs={1} md={4} className="g-4">
                {contents.map(item => (
                    <Col key={item.id}>
                        <Card>
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

export default CommCards;
