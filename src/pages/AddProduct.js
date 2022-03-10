import * as React from 'react';
import { Navbar, Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AddProduct() {
  const [selProduct, setSelected] = React.useState('DVD');

  function handleSelectChange(event) {
    setSelected(event.target.value);
  }

  function productDetails(product) {
    switch (product) {
      case 'Book':
        return (
          <div>
            <label className="form-label" htmlFor="weight">
              Weight (KG)
            </label>
            <input
              className="form-control"
              type="number"
              id="weight"
              name="weight"
            />
            <div className="form-text text-warning">
              Please, provide weight of this book in KG!
            </div>
          </div>
        );
      case 'Furniture':
        return (
          <div>
            <label className="form-label" htmlFor="height">
              Height (CM)
            </label>
            <input
              className="form-control"
              type="number"
              id="height"
              name="height"
            />
            <label className="form-label" htmlFor="width">
              Width (CM)
            </label>
            <input
              className="form-control"
              type="number"
              id="width"
              name="width"
            />
            <label className="form-label" htmlFor="length">
              Length (CM)
            </label>
            <input
              className="form-control"
              type="number"
              id="length"
              name="length"
            />
            <div className="form-text text-warning">
              Please, provide dimensions of this Furniture in <b>HxWxLx</b>{' '}
              format in CM!
            </div>
          </div>
        );
      default:
        return (
          <div>
            <label className="form-label" htmlFor="size">
              Size (MB)
            </label>
            <input
              className="form-control"
              type="number"
              id="size"
              name="size"
            />
            <div className="form-text text-warning">
              Please, provide size of this DVD in MB!
            </div>
          </div>
        );
    }
  }

  return (
    <div>
      <Navbar bg="light" expand={'lg'}>
        <Container>
          <Navbar.Brand className="text-primary">Product Add</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="buttonsNavbar">
              <label htmlFor="submitButton">
                <Button variant="outline-success">Save</Button>
              </label>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/">
                <Button variant="outline-danger">Cancel</Button>
              </Link>
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
              <Row>
                <Col md={6} sm={12}>
                  {productDetails(selProduct)}
                </Col>
              </Row>
            </Col>
          </Row>
          <input type="submit" className="d-none" id="submitButton" />
        </form>
      </Container>
    </div>
  );
}

export default AddProduct;
