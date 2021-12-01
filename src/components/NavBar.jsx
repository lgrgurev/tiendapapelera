//import React from 'react'
import { Nav, Navbar, Container, NavDropdown} from "react-bootstrap"
import CartWidget from '../components/CartWidget';


const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">LWDLP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#secos">Secos</Nav.Link>
                        <Nav.Link href="#chacinados">Chacinados</Nav.Link>
                        <NavDropdown title="Nuestros Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#Jamones">Jamones</NavDropdown.Item>
                        <NavDropdown.Item href="#Salames">Salames</NavDropdown.Item>
                        <NavDropdown.Item href="#Embutidos">Embutidos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#Otros">Otros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </div>
    )
}

export default NavBar