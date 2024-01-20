import "./footer.css";
import Container from "react-bootstrap/esm/Container";


function Footer() {
    return (
        <Container className="footer">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Shop@NUS </span>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="#"><i class="fa-brands fa-twitter"></i></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><i class="fa-brands fa-instagram"></i></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
    </ul>
    </footer>
        </Container>
    );
}

export default Footer;