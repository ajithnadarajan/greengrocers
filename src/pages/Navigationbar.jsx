import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Navweb.css";
function Navigationbar() {
  return (
   
    <Navbar expand="lg" className="navfull">
      <Container fluid>
     
        <Navbar.Brand as={Link} to='/home'><span className='green'>G </span><span className='grocers'>G</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', }}
            
          >
            <Nav.Link as={Link} to='/home' > <span className='hom'>Home</span></Nav.Link>
            <Nav.Link as={Link} to='/about'><span className='hom'>About Us</span></Nav.Link>
            <Nav.Link  as={Link} to='/contact'><span className='hom'>Contact</span> </Nav.Link>
            
            
          </Nav>
          <Nav className="d-flex">
          <Nav.Link as={Link} to='/vegetables'><span className='veg'>Vegetables</span></Nav.Link>
            <Nav.Link as={Link} to='/fruits'><span className='veg'>Fruits</span></Nav.Link>
            <Nav.Link as={Link} to='/nuts'><span className='veg'>Nuts</span> </Nav.Link>
          
      </Nav>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  
  );
}

export default Navigationbar;