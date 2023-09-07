import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Globalcontext } from './Globalcontext'
import { useNavigate } from 'react-router-dom'

function Startexam(props) {
  const [selectedOption, setSelectedOption] = useState('');
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const { score, setScore } = useContext(Globalcontext)
  const [next, setNext] = useState(0)
  const [err, setErr] = useState("")
  const [ques, setQuestions] = useState([])
  let navigate = useNavigate()
  const { setQuesno } = useContext(Globalcontext)
  if (next == 0) {
    setScore(0)
  }
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    setValue(e.target.value)
    setName(e.target.name)

  }
  const handleNext = () => {
    setNext(next + 1)
    setSelectedOption('')

    if (value && name !== '') {
      if (value === name) {
        setScore(score + 2)
        console.log(score)
      }
      else {
        setScore(score - 0.66)
      }
    }

  }
  const handleFinish = () => {
    navigate('/finishexam')

  }
  useEffect(() => {
    let startexam = async () => {
      try {
        let exam = await fetch(`https://e-prathibha.com/apis/start_exam?examId=${props.data.value.examid}`, {
          method: "GET", headers:
            { server_key: "3w99V63pW7tJ7vavGXtCKo8cp", id: props.data.value.id, tokenu: props.data.value.token }, Params: {
              examId: props.data.value.examid
            }
        })
        let questionresponse = await exam.json()
        setQuestions([questionresponse.data.exam[next]])
        console.log([questionresponse.data.exam[next]])
        console.log(ques)

        setQuesno(ques[0]["ExamStat"]["ques_no"])
        setErr("")
      }
      catch (err) {
        setErr("failed to fetch")
      }
    }
    startexam();
  }, [next])
  return (
    <>
      {
        ques.length != 0 ?
          ques.map((ele) => {
            return (
              <>
                <div className='p-5'>
                  <h2>{ele.Question.question.above}</h2>
                  <p><input type="radio" checked={selectedOption === '1'} value={'1'} name={ele.Question.answer} onChange={handleChange} />{ele.Question.option1}</p>
                  <p><input type="radio" checked={selectedOption === '2'} value={'2'} name={ele.Question.answer} onChange={handleChange} />{ele.Question.option2}</p>
                  <p><input type="radio" checked={selectedOption === '3'} value={'3'} name={ele.Question.answer} onChange={handleChange} />{ele.Question.option3}</p>
                  <p><input type="radio" checked={selectedOption === '4'} value={'4'} name={ele.Question.answer} onChange={handleChange} />{ele.Question.option4}</p>
                  <button className="btn btn-primary me-3" onClick={handleNext}>next</button>
                  <button className="btn btn-primary" onClick={handleFinish}>Finish</button>
                </div>
              </>
            )
          }) : "loading"
      }
    </>

  )
}

export default Startexam