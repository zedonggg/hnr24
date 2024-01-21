import { useState } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import "./ProductImage.css";

const ProductImage = ({ productImages }) => {
    // Default to the first image in the array or a placeholder if the array is empty
    const [currentImage, setCurrentImage] = useState(productImages?.[0] || "https://via.placeholder.com/150");

    const handleImageClick = (imageUrl) => {
        setCurrentImage(imageUrl);
    };

    return (
        <Row>
            <Col sm={2}>
                <ListGroup>
                    {productImages && productImages.map((imageUrl, index) => (
                        <ListGroup.Item key={index} action onClick={() => handleImageClick(imageUrl)}>
                            <img className="w-100" src={imageUrl} alt={`Product Image ${index + 1}`} />
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
            <Col sm={8}>
                <img className="w-100" src={currentImage} alt="Large Product Image" />
            </Col>
        </Row>
    );
}

export default ProductImage;


