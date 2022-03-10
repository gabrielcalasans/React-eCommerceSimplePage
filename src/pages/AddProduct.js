import * as React from 'react';
import { Navbar, Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AddProduct() {
  const [selProduct, setSelected] = React.useState('DVD');

  function handleSelectChange(event) {
    setSelected(event.target.value);
  }

  return (
    <div>
      <Navbar bg="light" expand={'lg'}>
        <Container>
          <Navbar.Brand className="text-primary">Product Add</Navbar.Brand>
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

      <Container>
        <Row align={'center'}>
          <h3>Add Product</h3>
        </Row>
        <form>
          <Row>
            <Col sm={12} md={6}>
              <Row>
                <Col md={6} sm={12}>
                  <label className="form-label" htmlFor="sku">
                    SKU
                  </label>
                  <input
                    type="text"
                    name="sku"
                    id="sku"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} sm={12}>
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} sm={12}>
                  <label className="form-label" htmlFor="price">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} sm={12}>
                  <label className="form-label" htmlFor="type">
                    Type Switcher
                  </label>
                  <select
                    value={selProduct}
                    onChange={handleSelectChange}
                    id="type"
                    className="form-select"
                  >
                    <option value="DVD">DVD</option>
                    <option value="Book">Book</option>
                    <option value="Furniture">Furniture</option>
                  </select>
                </Col>
              </Row>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
}

export default AddProduct;
