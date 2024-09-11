import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Movies </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
            <Link to="/" className='text-decoration-none text-dark'> Home </Link>
              
            </Nav.Link>
         

            <Nav.Link>
            <Link to="/Popular-movies"  className='text-decoration-none text-dark'> Popular movies  </Link>
            </Nav.Link>

            <Nav.Link>

            <Link to="/Tv-shows" className='text-decoration-none text-dark'>TV shows </Link>
            </Nav.Link>
            <Nav.Link>

            <Link to="/Login" className='text-decoration-none text-dark'>Login </Link>
            </Nav.Link>
        
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;