import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Row,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Products = () => {
  const products = [
    {
      title: "Product 1",
      prize: 10000,
    },
    {
      title: "Product 2",
      prize: 20000,
    },
    {
      title: "Product 3",
      prize: 30000,
    },
    {
      title: "Product 4",
      prize: 40000,
    },
    {
      title: "Product 5",
      prize: 50000,
    },
    {
      title: "Product 6",
      prize: 60000,
    },
    {
      title: "Product 7",
      prize: 70000,
    },
    {
      title: "Product 8",
      prize: 80000,
    },
  ];

  return (
    <div>
      <Container className="my-5">
        <Row>
          {products.map((data, index) => {
            return (
              <Col sm={6} md={4} lg={3} key={index} className="mb-4">
                <NavLink to={`/detail`}>
                  <Card
                    className="my-3"
                    body
                    color="light"
                    style={{
                      width: "18rem",
                    }}
                  >
                    <img alt="Sample" src="https://picsum.photos/300/200" />
                    <CardBody className="text-center">
                      <CardTitle tag="h5" className="title is-5 text-black">{data.title}</CardTitle>
                      <CardText className="text-black">{data.prize}</CardText>
                    </CardBody>
                  </Card>
                </NavLink>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
