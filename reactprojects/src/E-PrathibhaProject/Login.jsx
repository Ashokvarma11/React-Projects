import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Globalcontext } from './Globalcontext'
import { useNavigate } from 'react-router-dom'

function Login() {
  let navigate = useNavigate()
  const { setId, setToken, toggle, setToggle } = useContext(Globalcontext)
  const [email, setEmail] = useState("")
  const [pswd, setPswd] = useState("")
  const [msg, setMsg] = useState("")
  const handleLogin = async () => {

    try {
      let userData = {
        email: email,
        password: pswd
      }
      let logindata = await fetch('https://e-prathibha.com/apis/login', {
        method: 'POST', headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      let login = await logindata.json()
      console.log(login)
      if (login.status === 200) {
        setToken(login.data.Token)
        setId(login.data.Id)
        setToggle(!toggle)
        navigate('/Examslits')
      }
      else {
        setMsg(login.data)
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", backgroundImage: "url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)", width: "100vw", height: "90vh" }}>
        <div style={{ background: "#3CB371", padding: "30px", height: "200px", position: "relative", top: "150px", borderRadius: "10px" }}>
          <input type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
          <p></p>
          <input type="text" placeholder='Password' onChange={(e) => { setPswd(e.target.value) }} />
          <p></p>
          <button type="button" className='btn btn-success' onClick={handleLogin}>Login</button>
          <p>{msg}</p>
        </div>
      </div>
    </>
  )
}

export default Login