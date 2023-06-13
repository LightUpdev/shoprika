import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h3 className="font-color fw-bold">Shopriqa</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-dark">
            <div className="navbar">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Salons</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Super-market
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Cosmetics
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#faq">Faq</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </div>
          </Nav>
          <div className="nav-action">
            <div className="btn outline me-5">Sign In</div>
            <div className="btn filled">Sign Up</div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
