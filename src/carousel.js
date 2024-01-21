import Container from "react-bootstrap/esm/Container";
import "./carousel.css";
import Carousel from 'react-bootstrap/Carousel';
import { db } from "./firebase";
import { getDocs, query, collection , doc} from "firebase/firestore";
import "./firebase";
import { useEffect, useState } from "react";

// function ExampleCarouselImage() {
//     return (
//         <div className="carouimg"></div>
//     );
// }

function DisplaySlider() {
  const [contents, setContents] = useState([]);
    const content2 = [];
    
    const fetchPost = async () => {
        const q = query(collection(db, "products"))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            content2.push({id:doc.id, description:doc.data().description, name:doc.data().name, img:doc.data().productImages});
            console.log(content2);
            
        });
        const content3 = content2.slice(0, 3)
        setContents([...contents, ...content3]);
       
    }

    useEffect(() => {
        // console.log("hello")
        async function f() {
            await fetchPost();
            
        }
        f()
    }, [])

  return (
    <Container>
    <Carousel className="h-400">
      {
        contents.map(item => (
          <Carousel.Item>
            <img src={item.img ? item.img[0] : null} className="h-200 mx-auto d-block carouimg"></img>
            <Carousel.Caption>
              <h3>{item.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
    </Container>
  );
}

export default DisplaySlider;