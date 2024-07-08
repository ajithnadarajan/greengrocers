import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Carts.css";
import Navigationbar from "../pages/Navigationbar";

export default function Carts() {
  return (
    <div>
      <Navigationbar/>
      <div className="inputbg">
    
        <input className="searchbar" placeholder="search..." />
      </div>
      <div className="cartbg">
        <Container className="container">
          <Row className="padding">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="./fruitsimage/mango.jpg"
                  alt="Tomato"
                  width={200}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>
                    Tomato <Button variant="outline-success">Available</Button>
                  </Card.Title>
                  <Card.Text>
                    <i class="bi bi-currency-rupee"></i>
                    <span>30/-</span>
                  </Card.Text>
                  <Button variant="primary">Add To Cart</Button>
                  <Button className="buy" variant="success">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="./fruitsimage/apple.jpg"
                  alt="apple"
                  width={200}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>
                    Onion <Button variant="outline-success">Available</Button>
                  </Card.Title>
                  <Card.Text>
                    <i class="bi bi-currency-rupee"></i>
                    <span>50/-</span>
                  </Card.Text>
                  <Button variant="primary">Add To Cart</Button>
                  <Button className="buy" variant="success">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="./fruitsimage/banana.jpg"
                  alt="banana"
                  width={200}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>
                    Potato <Button variant="outline-success">Available</Button>
                  </Card.Title>
                  <Card.Text>
                    <i class="bi bi-currency-rupee"></i>
                    <span>20/-</span>
                  </Card.Text>
                  <Button variant="primary">Add To Cart</Button>
                  <Button className="buy" variant="success">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="padding">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  src="./fruitsimage/orange.jpg"
                  alt="orange"
                  width={200}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>
                    Carrot <Button variant="outline-success">Available</Button>
                  </Card.Title>
                  <Card.Text>
                    <i class="bi bi-currency-rupee"></i>
                    <span>10/-</span>
                  </Card.Text>
                  <Button variant="primary">Add To Cart</Button>
                  <Button className="buy" variant="success">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  src="./fruitsimage/jackfruit.jpg"
                  alt="jackfruit"
                  width={200}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>
                    Cabbage
                    <Button variant="outline-danger">Unavailable</Button>
                  </Card.Title>
                  <Card.Text>
                    <i class="bi bi-currency-rupee"></i>
                    <span>50/-</span>
                  </Card.Text>
                  <Button variant="primary">Add To Cart</Button>
                  <Button className="buy" variant="success">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  src="./fruitsimage/red grapes.jpg"
                  alt="red grapes"
                  width={200}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>
                    Drum's Stick
                    <Button variant="outline-success">Available</Button>
                  </Card.Title>
                  <Card.Text>
                    <i class="bi bi-currency-rupee"></i>
                    <span>80/-</span>
                  </Card.Text>
                  <Button variant="primary">Add To Cart</Button>
                  <Button className="buy" variant="success">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="padding">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  src="./fruitsimage/pomegranate.jpg"
                  alt="pomegranate"
                  width={200}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>
                    Pomegranate{" "}
                    <Button variant="outline-success">Available</Button>
                  </Card.Title>
                  <Card.Text>
                    <i class="bi bi-currency-rupee"></i>
                    <span>10/-</span>
                  </Card.Text>
                  <Button variant="primary">Add To Cart</Button>
                  <Button className="buy" variant="success">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  src="./fruitsimage/dragonfruit.jpg"
                  alt="dragonfruit"
                  width={200}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>
                    DragonFruit{" "}
                    <Button variant="outline-success">Available</Button>
                  </Card.Title>
                  <Card.Text>
                    <i class="bi bi-currency-rupee"></i>
                    <span>50/-</span>
                  </Card.Text>
                  <Button variant="primary">Add To Cart</Button>
                  <Button className="buy" variant="success">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  src="https://res.cloudinary.com/duawkne1z/image/upload/v1717825829/papaya_ugrw9i.jpg"
                  alt="papaya"
                  width={200}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>
                    Papaya <Button variant="outline-danger">Unavailable</Button>
                  </Card.Title>
                  <Card.Text>
                    <i class="bi bi-currency-rupee"></i>
                    <span>40/-</span>
                  </Card.Text>
                  <Button variant="primary">Add To Cart</Button>
                  <Button className="buy" variant="success">
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
