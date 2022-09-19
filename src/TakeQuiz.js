import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { DisplayQuestion } from './DisplayQuestion'
import { DisplayResults } from './DisplayResults'

export const TakeQuiz = ({catID, setCatID}) => {
    const [score, setScore] = useState(0)

    const [questIndex, setQuestIndex] = useState(0)

    const [questions, setQuestions] = useState([])

    useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=10&type=multiple&category=${catID}`).then((res) => setQuestions(res.data.results))
    }, [catID])

    if (questions.length > 0) {
        let len = questions.length
        let category = questions[0].category
        
        if (questIndex < len) {
            return(
                <DisplayQuestion 
                    setCatID={setCatID}
                    questIndex={questIndex}
                    setQuestIndex={setQuestIndex}
                    score={score}
                    setScore={setScore}
                    questions={questions}
                    category={category}
                />
            )
        }
        return(
            <DisplayResults
                setCatID={setCatID}
                score={score}
                category={category}
            />
        )
    }
}