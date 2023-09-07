import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Verify(props) {
  const [input, setVerify] = useState("")
  const [regmeg, setRegmeg] = useState("")
  const [process, setProcess] = useState("")
  const navigate = useNavigate()
  const handleVerify = async (e) => {
    e.preventDefault()
    let verifyData = {
      reg_code: input
    }
    try {
      let verification = await fetch(' https://e-prathibha.com/apis/verifyEmail', {
        method: 'POST', headers: {
          'Content-Type': 'application/json',
        }, body: JSON.stringify(verifyData)
      })

      let regcodeverification = await verification.json();
      console.log(regcodeverification)
      if (regcodeverification.status === 200) {
        setRegmeg(regcodeverification.data)
        navigate('/login')

      }
      else {
        setRegmeg(regcodeverification.data)
      }

    }
    catch (err) {
      setProcess("Verification in process")
    }
  }
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "20px" }}>
        <div>
          <input type="text" onChange={(e) => setVerify(e.target.value)} />
          <button onClick={handleVerify}>Verify</button>
        </div>
        <p >{props.data}</p>
        <p>{regmeg}</p>
        <p>{process}</p>


      </div>

    </>
  )
}

export default Verify