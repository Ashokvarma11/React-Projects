import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Globalcontext } from './Globalcontext'
import { useContext } from 'react'

function Examslist(props) {
    console.log(props)
    const [err, setErr] = useState("")
    const { setExamid } = useContext(Globalcontext)
    const [users, setPapers] = useState([])
    const navigate = useNavigate()
    const [civils, setCivils] = useState([])
    const [upsc, setUpsc] = useState([])
    const [ncert, setNcert] = useState([])
    function handleSubmit(value) {
        setExamid(value)
        navigate('/startexam')
    }
    let Examslist = async () => {
        try {
            let exams = await fetch('https://e-prathibha.com/apis/test_free_exam', {
                method: "POST", headers: {
                    'Content-Type': 'application/json',
                    server_key: "3w99V63pW7tJ7vavGXtCKo8cp", id: props.data.id, tokenu: props.data.token
                }
            })

            let allexams = await exams.json()
            console.log(allexams)
            if (allexams.status === 200) {
                setPapers([allexams.data.exams])
                setCivils(allexams.data.exams[0]["Old question papers UPSC Civils (Pre)"])
                setUpsc(allexams.data.exams[1]["Limited UPSC other than Civils"])
                setNcert(allexams.data.exams[2]["Limited NCERT"])

            }
            else {
                console.log('issue occured')
            }    
        }
        catch (err) {
           console.log("fetch failed")
        }
    }
    useEffect(() => {
        Examslist()
    }, [])

    return (

        <div style={{ backgroundColor: "#E7E3E0" }}>
            <h1 style={{ padding: "10px" }}>Limited UPSC other than Civils :</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", padding: "10px" }}>
                {upsc.map((ele) => {
                    return (
                        <>
                            <div style={{ border: "1px solid black", padding: "30px", borderRadius: "10px", backgroundColor: "#FFD580" }}>
                                <h1>{ele.Exam.type}</h1>
                                <p>{`Exam id:${ele.Exam.id}`}</p>
                                <p style={{ color: "red" }}>{`Exam duration:${ele.Exam.duration}min`}</p>
                                <p>{`package_id:${ele.Package.id}`}</p>
                                <p style={{ color: "green" }}>{ele.Package.name}</p>
                                <p>{`year:${ele.years.exam_year}`}</p>
                                <button className="btn btn-primary" onClick={() => handleSubmit(ele.Exam.id)}>start now</button>

                            </div>
                        </>
                    )
                })}
            </div>
            <h1 style={{ padding: "10px" }}>Old question papers UPSC Civils (Pre):</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "50px", padding: "10px", width: "1300px" }}>
                {civils.map((ele) => {
                    return (
                        <>
                            <div style={{ border: "1px solid black", padding: "30px", borderRadius: "10px", backgroundColor: "#FFD580" }}>
                                <h1>{ele.Exam.type}</h1>
                                <p>{`Exam id:${ele.Exam.id}`}</p>
                                <p style={{ color: "red" }}>{`Exam duration:${ele.Exam.duration}`}</p>
                                <p>{`package_id:${ele.Package.id}`}</p>
                                <p style={{ color: "green" }}>{ele.Package.name}</p>

                                <p>{`year:${ele.years.exam_year}`}</p>
                                <button className="btn btn-primary" onClick={() => handleSubmit(ele.Exam.id)}>start now</button>
                            </div>
                        </>
                    )
                })}
            </div>
            <h1 style={{ padding: "10px" }}>Limited NCERT:</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", padding: "10px" }}>
                {ncert.map((ele) => {
                    return (
                        <>
                            <div style={{ border: "1px solid black", padding: "30px", borderRadius: "10px", backgroundColor: "#FFD580" }}>
                                <h1>{ele.Exam.type}</h1>
                                <p>{`Exam id:${ele.Exam.id}`}</p>
                                <p style={{ color: "red" }}>{`Exam duration:${ele.Exam.duration}`}</p>
                                <p>{`package_id:${ele.Package.id}`}</p>
                                <p style={{ color: "green" }}>{ele.Package.name}</p>
                                <p>{`year:${ele.years.exam_year}`}</p>
                                <button className="btn btn-primary" onClick={() => handleSubmit(ele.Exam.id)}>start now</button>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Examslist