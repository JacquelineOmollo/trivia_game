import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function Questions() {
    const [quiz, setQuiz]  = useState([])

    useEffect(() => {
        const fetchQuestion = async () => {
            const {data} = await axios.get("/api/quiz/:id")
            setQuiz(data)
        }
        fetchQuestion()
    }, [])

    return (
        <>
         <h1>
            
         </h1>
         <div>
             {quiz.map((question) => {
            < div key={quiz.id}>

             </ div>
             }

             
             )}
         </div>
        </>
    )
}

