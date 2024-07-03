import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import netflixLogo from "./imgs/netflix_logo.png";
import avatarImg from "./imgs/avatar.png";
import kidsIcon from "./imgs/kids_icon.png";
import { NavLink, useLocation } from "react-router-dom";
//import "bootstrap-icons/font/bootstrap-icons.css";
import { Search } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";

const MyNav = () => {
  const location = useLocation();

  console.log(location);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={netflixLogo} alt="netflix-logo" width="140" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <NavLink className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
              Home
            </NavLink>
            <NavLink className={`nav-link ${location.pathname === "/gallerie" ? "active" : ""}`} to="/gallerie">
              Serie TV
            </NavLink>
            <NavLink className="nav-link text-dark" to="#">
              Movies
            </NavLink>
            <NavLink className="nav-link text-dark" to="#">
              Recently Added
            </NavLink>
            <NavLink className="nav-link text-dark" to="#">
              My List
            </NavLink>
          </Nav>
          <Nav className="d-flex align-items-center gap-3">
            <Nav.Link href="#">
              <Search className="text-white" />
            </Nav.Link>
            <Nav.Link href="#">
              <img src={kidsIcon} alt="kids" width="35" height="35" />
            </Nav.Link>
            <Nav.Link href="#">
              <BellFill className="text-white" />
            </Nav.Link>
            <NavDropdown
              bg="dark"
              title={<img src={avatarImg} alt="userphoto" width="35" height="35" />}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="./profile-netflix.html">Account</NavDropdown.Item>
              <NavDropdown.Item href="./setting-netflix.html">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
