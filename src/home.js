import NavBar from "./navbar";
import DisplaySlider from "./carousel";
import Footer from "./footer";
import SearchBar from "./searchbar";
import CardGrid from "./CardGrid";
import { db } from "./firebase";
import { getDocs, query, collection , doc} from "firebase/firestore";
import "./firebase";
import { useEffect } from "react";

function HomePage() {
    const fetchPost = async () => {
        // await getDocs(collection(db, "products"))
        //     .then((querySnapshot)=>{               
        //         const newData = querySnapshot.docs                
        //         console.log(newData);
        //     })
        const q = query(collection(db, "products"))
        const querySnapshot = await getDocs(q)
        console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          });
       
    }

    useEffect(() => {
        console.log("hello")
        async function f() {
            await fetchPost()
        }
        f()
    }, [])

    return (
        <>
        <NavBar />
        <SearchBar />
        <DisplaySlider />
        <CardGrid />
        <Footer />
        </>
    );
}

export default HomePage;