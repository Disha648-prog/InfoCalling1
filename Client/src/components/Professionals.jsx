import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const professionals = [
  {
    title: "Doctors",
    img: "https://cdn-icons-png.flaticon.com/512/387/387561.png",
  },
  {
    title: "Lawyers",
    img: "https://cdn-icons-png.flaticon.com/512/2503/2503508.png",
  },
  {
    title: "Consultants",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Emergency Help",
    img: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  },
];

const Professionals = () => {
  return (
    <Container className="my-5">
      <Row>
        {professionals.map((pro, index) => (
          <Col key={index} xs={6} md={3} className="mb-4">
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Img
                variant="top"
                src={pro.img}
                style={{ width: "70px", height: "70px", margin: "20px auto 0" }}
              />
              <Card.Body>
                <Card.Title>{pro.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Professionals;
