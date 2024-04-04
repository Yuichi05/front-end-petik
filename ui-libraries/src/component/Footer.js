import React from "react";
import { Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <Container>
      <Row className="text-center">
        <div>
          <footer>
            <h3>Copyright &copy; 2024 Developed by Yuichi</h3>
            <span>Make with &#10084;</span>
          </footer>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
