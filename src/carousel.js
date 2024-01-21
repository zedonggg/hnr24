import Container from "react-bootstrap/esm/Container";
import "./carousel.css";
import Carousel from 'react-bootstrap/Carousel';
import { db } from "./firebase";
import { getDocs, query, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

function DisplaySlider() {
  const [contents, setContents] = useState([]);

  const fetchPost = async () => {
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    const fetchedContents = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.home === true && data.productImages && data.productImages.length > 0) {
        fetchedContents.push({
          id: doc.id,
          name: data.name,
          image: data.productImages[0] // First image of each product
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
      <Carousel className="h-400">
        {contents.map((item, index) => (
          <Carousel.Item key={`${item.id}-${index}`}>
            <img src={item.image} alt={item.name} className="d-block w-100" />
            <Carousel.Caption>
              <h3>{item.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default DisplaySlider;

