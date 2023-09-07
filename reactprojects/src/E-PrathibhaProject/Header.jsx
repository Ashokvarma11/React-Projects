import React from 'react'
import { Link } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Verify from './Verify'
import Examslist from './Examslist'
import Finishexam from './Finishexam'
import Home from './Home'
import Startexam from './Startexam'
import Afterlogin from './Afterlogin'

function Header(props) {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{display:"flex",alignItems:"center"}}>
          <Navbar.Brand  style={{display:"flex",gap:"10px"}} >
            <img src="data:image/png;base64,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" height={"40px"}/>
            <div style={{display:"flex",flexDirection:"column"}}>
            <span>PREPSTAR</span>
            <span style={{fontSize:"10px"}}>Best for Preparing yourself</span>
            </div>
           
            </Navbar.Brand>
          <Nav style={{display:"flex",}}>
            <Nav.Link><Link style={{ textDecoration: 'none' ,color:"white"}}to='/home'>Home</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none',color:"white" }}to='/Register'>Register</Link></Nav.Link> 
            <Nav.Link><Link style={{ textDecoration: 'none',color:"white" }}to='/login'>Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/Register' element={<Register />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/verify' element={<Verify data={props.value.message}/>}/>
    <Route path='/Examslits' element={<Examslist data={props.value}/>}/>
    <Route path='/startexam' element={<Startexam data={props}/>}/>
    <Route path='/finishexam' element={<Finishexam data={props.value}/>}/>
    <Route path='/Afterlogin' element={<Afterlogin data={props.value}/>}/>
    <Route path='/logout' element={<Home/>}/>
</Routes>

  </>
  )
}

export default Header