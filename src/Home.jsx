import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import Navigationbar from "./pages/Navigationbar";
import WebFooter from "./pages/WebFooter";
import Carousual from "./insidepages/Carousual";
const Home = () => {
  return (
    <div>
    
    <Navigationbar/>
     

          <Carousual/>



      <div className="offerbutton">
        <div>
          <button className="bt1" style={{ color: "black" }}>
            Allium
          </button>
        </div>
        <div>
        
          <button className="bt2" style={{ color: "brown" }}>
            Roots
          </button>
        </div>
        <div>
          
          <button className="bt3" style={{ color: "white" }}>
            Leafs Green
          </button>
        </div>
        <div>
          
          <button className="bt4" style={{ color: "white" }}>
            Fleshy Fruits
          </button>
        </div>
        <div>
          
          <button className="bt5" style={{ color: "gold" }}>
            New Offers
          </button>
        </div>
      </div>
      <h4>Top Sell's</h4>
      <div className="homecart">
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/duawkne1z/image/upload/v1717825828/pomegranate_us6jeg.jpg"
                alt="mango"
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
                src="https://res.cloudinary.com/duawkne1z/image/upload/v1717825804/apple_byzjib.jpg"
                alt="apple"
                width={200}
                height={200}
              />
              <Card.Body>
                <Card.Title>
                  Apple <Button variant="outline-success">Available</Button>
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
                src="https://res.cloudinary.com/duawkne1z/image/upload/v1717825805/beetroot_nc3hie.jpg"
                alt="Beetroot"
                width={180}
                height={200}
              />
              <Card.Body>
                <Card.Title>
                  Beetroot <Button variant="outline-success">Available</Button>
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
        </Row>
      </div>

      <div>
        <h4>Best Offers</h4>
        <div className="offercard">
         
             
          <Card style={{ width: "10rem" }}>
            <Card.Body className="deals">
              <Card.Title>
                <span style={{ color: "white" }} className="topdeal">
                  DEALS
                </span>
                <span className="bestoffer1" style={{ color: "black" }}>
                  OF THE WEEK
                </span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            </Card.Body>
          </Card>
              

          <Card style={{ width: "10rem" }}>
            <Card.Body className="deals">
              <Card.Title>
                <span style={{ color: "white" }} className="topdeal">
                  COMBOS
                </span>
                <span className="bestoffer1" style={{ color: "black" }}>
                  YOU CAN'T MISS
                </span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            </Card.Body>
          </Card>

          <Card style={{ width: "10rem" }}>
            <Card.Body className="deals">
              <Card.Title>
                <span style={{ color: "white" }} className="topdeal">
                  BIG PACK
                </span>
                <span className="bestoffer1" style={{ color: "black" }}>
                  {" "}
                  BIGGER DISCOUNT
                </span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            </Card.Body>
          </Card>

          <Card style={{ width: "10rem" }}>
            <Card.Body className="deals">
              <Card.Title>
                <span style={{ color: "white" }} className="topdeal">
                  THE
                </span>
                <span className="bestoffer1" style={{ color: "black" }}>
                  
                  <i class="bi bi-currency-rupee"></i>20 CORNER
                </span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <WebFooter />
      </div> 
    </div>
  );
};

export default Home;
