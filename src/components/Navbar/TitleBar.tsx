import { Navbar, Container, Nav, Form } from "react-bootstrap";
const TitleBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Streak</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TitleBar;
