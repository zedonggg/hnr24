import "./facultypage.css"
import NavBar from "./navbar";
import Footer from "./footer";
import SearchBar from "./searchbar";
import FacultyCards from "./facultycards";

function FacultyPage() {
    return (
        <>
        <NavBar />
        <SearchBar />
        <FacultyCards />
        <Footer />
        </>
    )
}

export default FacultyPage;