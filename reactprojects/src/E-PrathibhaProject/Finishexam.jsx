import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Globalcontext } from './Globalcontext'

function Finishexam(props) {
    const { setScore } = useContext(Globalcontext)
    let navigate = useNavigate()
    const [data, setData] = useState("")
    const finishExams = async () => {
        let examData = {
            examId: props.data.examid,
            qno: props.data.quesno
        }
        let exam = await fetch('https://e-prathibha.com/apis/finishExam', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
                id: props.data.id, server_key: "3w99V63pW7tJ7vavGXtCKo8cp", tokenu: props.data.token
            }, body: JSON.stringify(examData)
        })
        let finalexams = await exam.json()

        if (finalexams.status === 200) {
            setData(finalexams.data)
        }

    }
    const handleExams = () => {
        navigate('/Examslits')

    }

    useEffect(() => {
        finishExams();
    }, [])
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <h1>{data}</h1>
                <p>your score is:{props.data.score}</p>

                <button className="btn btn-primary" onClick={handleExams}>Go to exams</button>
            </div>
        </>
    )
}

export default Finishexam