import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import img from '../marca.png';
import CartWidget from './CartWidget';
export const NavBar = () => {

return (

    <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
    <Container>
    <Navbar.Brand href="#home"><img  src= {img}  width="100%" height="100%"className="d-inline-block align-top"></img></Navbar.Brand>

    



    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#perros">Perros</Nav.Link>
        <Nav.Link href="#gatos">Gatos</Nav.Link>
        <NavDropdown title="Tienda" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#alimento/3.1">Alimento</NavDropdown.Item>
          <NavDropdown.Item href="#veterinaria/3.2">Veterinaria</NavDropdown.Item>
          <NavDropdown.Item href="#juegos/3.3">Juegos</NavDropdown.Item>
          <NavDropdown.Divider />

        </NavDropdown>
      </Nav>
      <Nav>

        <Nav.Link eventKey={2} href="#memes">
           memes de gatitos!
        </Nav.Link>
      </Nav>
    
    </Navbar.Collapse>
    <CartWidget />
    </Container>
  </Navbar>

)





}

