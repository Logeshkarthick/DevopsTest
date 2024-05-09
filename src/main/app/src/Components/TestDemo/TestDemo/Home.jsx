import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
//import { SlSocialYoutube } from "react-icons/sl";

const Home = () => {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img
          src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
          alt="Card image"
          id="img"
        />

        <Card.ImgOverlay>
          <Card.Text>
            <br></br>
            <br />
            <br />
            <br />
            {/* <h1 style={{ color: "WHITE" }}>RESTAURANT MANAGEMENT SYSTEM!</h1> */}
          </Card.Text>
        </Card.ImgOverlay>SlSocialYoutube
      </Card>
      <Card className="bg-dark text-white">
        <Card.Body id="footer">
          <Container>
            <Row>
              <Col>
                <h3>Contact Us on....</h3>
                <ul
                  style={{
                    listStyle: "none",
                    fontSize: "30px",
                    display: "flex",
                  }}
                >
                  <li>
                    <TiSocialInstagram />
                    <h6>hkl123</h6>
                    <br></br>
                  </li>

                  <li>
                    <TiSocialTwitter />
                    <h6>htlds.twitter.com</h6>
                  </li>
                </ul>
              </Col>
              <Col>
                {" "}
                <h2>Join with us....</h2>
                <br></br>
                <Button variant="outline-primary">sign In</Button>{" "}
                <Button variant="outline-primary">sign Up</Button>{" "}
              </Col>
              <Col>
                <img
                  src="https://plus.unsplash.com/premium_photo-1673830185894-9030c9e7eba9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={{ height: "100px", width: "350px" }}
                />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
