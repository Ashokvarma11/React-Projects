import './App.css';
import { useState } from 'react';
import { Globalcontext } from './E-PrathibhaProject/Globalcontext';
import Header from './E-PrathibhaProject/Header';
import Afterlogin from './E-PrathibhaProject/Afterlogin';
function App() {
  const [id, setId] = useState(0)
  const [token, setToken] = useState("")
  const [message, setMessage] = useState("")
  const [examid, setExamid] = useState(0)
  const [quesno, setQuesno] = useState(0)
  const [score, setScore] = useState(0)
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <Globalcontext.Provider value={{ message, setMessage, token, setToken, id, setId, examid, setExamid, quesno, setQuesno, score, setScore, toggle, setToggle }}>
        {toggle ? <Header value={{ message: message, id: id, token: token, examid: examid, quesno: quesno, score: score }} /> : <Afterlogin value={{ message: message, id: id, token: token, examid: examid, quesno: quesno, score: score }} />}

      </Globalcontext.Provider>
    </>

  );
}

export default App;
