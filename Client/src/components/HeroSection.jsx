import React from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="fw-bold display-5 mb-3">
              Find Trusted Professionals <br /> Near You
            </h1>
            <p className="text-muted mb-4">
              Your all-in-one platform to book appointments, get expert help, and connect instantly with professionals — anytime, anywhere.
            </p>

            <InputGroup className="mb-3">
              <Form.Control placeholder="Enter your location" />
              <Form.Control placeholder="Search doctors, lawyers or specializations" />
              <Button variant="primary">Search</Button>
            </InputGroup>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src="/icons/professionals.svg"
              alt="professionals"
              className="img-fluid"
              style={{ maxHeight: "300px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
