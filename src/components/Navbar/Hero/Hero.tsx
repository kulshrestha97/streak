import { Button, Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Container className="shadow container-fluid p-5 mt-5">
      <h1 className="display-5 fw-bold">Show up. Daily.</h1>
      <p className="col-md-8 fs-4">
        Streak is a web app that is designed keeping in mind that you and your
        partner are busy, but do care about each other.
      </p>
      <Button variant="outline-primary" size="lg">
        Go to Checklist
      </Button>
    </Container>
  );
};

export default Hero;
