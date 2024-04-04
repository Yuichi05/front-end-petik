import React from "react";
import { Col, Container, Row, Button } from "reactstrap";

const Hero = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col className="text-md-left">
          <h2 className="text-primary">Title</h2>
          <h3 className="text-primary">Genre :</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            mollitia, hic nobis quo laboriosam dicta eligendi illum esse numquam
            adipisci consequatur optio corrupti voluptatibus tenetur!
          </p>
          <Button className="bg-primary">Primary</Button>
        </Col>
        <Col>
          <img src="https://nbcpalmsprings.com/wp-content/uploads/sites/8/2021/12/BEST-MOVIES-OF-2021.jpeg" alt="hero-img" className="w-75"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
