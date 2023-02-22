import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import ThemeContext from "../../context/context";

const Hero = () => {
  const { currentValue, setCurrentValue } = useContext(ThemeContext);
  const handleTheming = () => {
    setCurrentValue((prev: any) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <Container className="shadow container-fluid p-5 mt-5">
      <h1 className="display-5 fw-bold">Show up. Daily.</h1>
      <p className="col-md-8 fs-4">
        Streak is a web app that is designed keeping in mind that you and your
        partner are busy, but do care about each other.
      </p>
      <p>Current Theming: {currentValue}</p>
      <Button variant="outline-primary" size="lg" onClick={handleTheming}>
        Sign Up
      </Button>
    </Container>
  );
};

export default Hero;
