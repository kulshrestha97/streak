import { useContext } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import ThemeContext from "../../context/context";
const TitleBar = () => {
  const { currentValue } = useContext(ThemeContext);

  return (
    <Navbar bg={currentValue} variant={currentValue}>
      <Container>
        <Navbar.Brand href="#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-lightning-fill"
            viewBox="0 0 16 16"
          >
            <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
          </svg>
          Streak
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TitleBar;
