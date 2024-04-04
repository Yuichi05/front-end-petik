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

const Movies = () => {
  const movies = [
    {
      title: "Movie 1",
      year: "2020",
    },
    {
      title: "Movie 2",
      year: "2021",
    },
    {
      title: "Movie 3",
      year: "2023",
    },
    {
      title: "Movie 4",
      year: "2013",
    },
    {
      title: "Movie 5",
      year: "2026",
      },
      {
        title: "Movie 6",
        year: "2028",
    },
    {
      title: "Movie 7",
      year: "1923",
    },
    {
      title: "Movie 8",
      year: "2005",
    },
  ];

  return (
    <div>
      <Container className="my-5">
        <Row>
          {movies.map((movie) => {
            return (
              <Col>
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
                    <CardTitle tag="h5">{movie.title}</CardTitle>
                    <CardText>{movie.year}</CardText>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
