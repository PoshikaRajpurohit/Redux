import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import "../App.css"; 
import logo from "../assets/images/Logo.avif"

const Header = () => {
  return (
    <Navbar className="custom-navbar shadow-sm py-3" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-4">
          <img src={logo} alt="logo" height={"50px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/add-book" className="nav-add-book fw-semibold px-3">
              ➕ Add Book
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
