import React from "react";

import { Button, Card } from "react-bootstrap";

function News(props) {
  return (
    <div>
      <h2>This is news</h2>

      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{props.article}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default News;
