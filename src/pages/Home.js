import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container fluid className="bg-primary text-light py-5">
      <Row className="justify-content-center align-items-center">
        <Col md={8} lg={6} xl={4}>
          <h3 className="display-2 text-center mb-4 font-weight-bold" style={{fontSize: "3rem"}}>
            Welcome to Suraksha-360
          </h3>
          <p className="lead text-center mb-5" style={{fontSize: "1.5rem"}}>
            Select your Login/Registration type from the menu at the top of the page.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
