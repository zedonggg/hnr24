import NavBar from "./navbar";
import Footer from "./footer";
import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import "./navbar.css";import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./profile.css"
import { where } from "firebase/firestore";
import { db } from "./firebase";
import { getDocs, query, collection } from "firebase/firestore";
import "./firebase";
import { useEffect } from "react";
import { ConstructionOutlined } from "@mui/icons-material";

function ProfilePage() {
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
        setContents([...contents, fetchedContents]);
        console.log(contents);
    }

    useEffect(() => {
        fetchPost();
    }, []);


    return (
        <>
        { isLoggedin? (<>
        <NavBar />
        <Container className="profilec">
            <Row className="row1">
                <h1 className="profilename">Profile</h1>
            </Row>
            <Row>
                <Col><h4>Name : {user.displayName}</h4></Col>
                <Col><h4>Email : {user.email}</h4></Col>
            </Row>
            <Row className="postsrow">
                <h3>Your Posts</h3>
            </Row>
            <Row><a href="/addform"><h3 href="/addform">Click to add a new listing</h3></a></Row>
        </Container>
        <Footer />
        </>) :
        navigate("/")}
        </>
    )
}

export default ProfilePage;