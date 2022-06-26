import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Sidebar from './Sidebar';
import Image from "next/image";
import profile from "../../styles/assets/profile.png";
import brandLogo from "../../styles/assets/brandLogo.png";
import porfileImage from "../../styles/assets/profileImage.png";
import styles from "../../styles/Nav.module.css";

const NavbarGG = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        
        <Navbar.Brand href="#home" >
        <Image
                src={brandLogo}
                alt="profile"
                className={styles.brandImage}
                width="120px"
                height="40px"
              />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='ms-4 fw-bolder text-dark'>Home</Nav.Link>
            <Nav.Link href="#link" className='ms-4 fw-bolder text-dark'>Profile</Nav.Link>
            <Nav.Link href="#home" className='ms-4 fw-bolder text-dark'>Genuis Card</Nav.Link>
            <Nav.Link href="#link" className='ms-4 fw-bolder text-dark'>Security</Nav.Link>
          

          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Image
            src={porfileImage}
            alt="profile"
            className={styles.profileImages}
            width="50px"
            height="50px"
          />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarGG