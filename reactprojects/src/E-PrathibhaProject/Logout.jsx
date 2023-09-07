import React from 'react'
import { useContext } from 'react'
import { Globalcontext } from './Globalcontext'

function Logout() {
  const { toggle, setToggle } = useContext(Globalcontext)
  setToggle(!toggle)
  return (
    <>
    </>
  )
}

export default Logout