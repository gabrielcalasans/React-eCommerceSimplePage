import * as React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <Navbar bg="light" expand={'lg'}>
      <Container>
        <Navbar.Brand className="text-primary">Product List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="buttonsNavbar">
            <Button variant="outline-success">ADD</Button>
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
