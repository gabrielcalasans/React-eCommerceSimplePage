import * as React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Navbar bg="light" expand={'lg'}>
      <Container>
        <Navbar.Brand className="text-primary">Product List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="buttonsNavbar">
            <Link to="/addproduct">
              <Button variant="outline-success">ADD</Button>
            </Link>
          </Navbar.Text>
          <Navbar.Text>
            <Button variant="outline-danger">DELETE</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;
