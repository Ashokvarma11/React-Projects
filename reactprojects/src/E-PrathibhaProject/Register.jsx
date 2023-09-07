import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Globalcontext } from './Globalcontext'
function Register() {
  const navigate = useNavigate()
  const { message, setMessage } = useContext(Globalcontext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPswd] = useState("")
  const [confirmPassword, setConfpswd] = useState("")
  const [phone, setPhone] = useState("")
  const [namerr, setNamerr] = useState("")
  const [emailerr, setEmailerr] = useState('')
  const [pswderr, setPswderr] = useState('')
  const [cpswderr, setCpswderr] = useState('')
  const [phnerr, setPhnerr] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    name == '' ? setNamerr("name is required") : setNamerr('')
    email == '' ? setEmailerr("email is required") : setEmailerr('')
    password == '' ? setPswderr("password is required") : setPswderr('')
    confirmPassword == '' ? setCpswderr("confirmpassword is required") : setCpswderr('')
    phone == '' ? setPhnerr("phone is required") : setPhnerr('')
    let userData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      phone: phone
    }

    try {
      let response = await fetch('https://e-prathibha.com/apis/register', {
        method: 'POST', headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      let res = await response.json();
      if (res.status === 200) {
        name !== '' && email !== '' && password !== '' && confirmPassword !== '' && phone !== '' ? setMessage(res.data) : setMessage('')
        navigate('/verify')

      }
      else {
        name !== '' && email !== '' && password !== '' && confirmPassword !== '' && phone !== '' ? setError(res.data) : setError('')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div style={{ backgroundImage: "url(https://img.freepik.com/free-photo/desk-school-supplies-light-background_23-2148169494.jpg?w=1060&t=st=1693750786~exp=1693751386~hmac=55debb88141fd4e8b4924c2be3619665e3c563a229878dabf0be972ed2dfc187)", padding: "30px", height: "100vh" }}>
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "black", width: "350px", position: "relative", left: "600px", padding: "30px", borderRadius: "10px" }}>
          <form >
            <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
            <p style={{ color: "white" }}>{namerr}</p>
            <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <p style={{ color: "white" }}>{emailerr}</p>
            <input type="password" placeholder='Password' onChange={(e) => setPswd(e.target.value)} />
            <p style={{ color: "white" }}>{pswderr}</p>
            <input type="password" placeholder='Confirm Password' onChange={(e) => setConfpswd(e.target.value)} />
            <p style={{ color: "white" }}>{cpswderr}</p>
            <input type="text" placeholder='Mobile Number' onChange={(e) => setPhone(e.target.value)} />
            <p style={{ color: "white" }}>{phnerr}</p>
            <button className='btn btn-primary' onClick={handleSubmit}>submit</button>
            <p style={{ color: "white" }}>{error}</p>
          </form>
        </div>
      </div>

    </>
  )
}


export default Register