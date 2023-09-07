import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
  return (
    <>
      <img src="https://plus.unsplash.com/premium_photo-1664372145439-db03f276dbd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" style={{ height: "500px", width: "100vw" }} />
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "10px" }}>
        <h1>Key Features</h1>
        <img src='https://e-prathibha.com/img/Key%20features_updated1.webp' style={{ width: "70vw", height: "350px" }} />
      </div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Terms&Conditions</Nav.Link>
            <Nav.Link>Help</Nav.Link>
            <Nav.Link>Contact us</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Home