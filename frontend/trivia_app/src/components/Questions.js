import React, {useState, useEffect} from 'react'

import axios from "axios"

export default function Questions() {
    const [quiz, setQuiz]  = useState([])

    useEffect(() => {
        const fetchQuestion = async () => {
            const {data} = await axios.get("/api/quiz/")
            setQuiz(data)
        }
        fetchQuestion()
    }, [])

    return (
        <>
         <h1>
            Questions
         </h1>
         <div>
             {quiz.map((questions) => {
            < div key={quiz.id}>
                <h3>
                    {questions.data}
                </h3>
             </ div>
             }

             
             )}
         </div>
        </>
    )
}

