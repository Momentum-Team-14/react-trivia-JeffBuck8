import _ from 'lodash'
import { useState } from 'react'
import { DisplayFeedback } from './DisplayFeeback'

export const DisplayQuestion = ({setCatID, questIndex, setQuestIndex, score, setScore, questions, category}) => {

    const [feedback, setFeedback] = useState(false)

    const htmlDecode = input => new DOMParser()
        .parseFromString(input, "text/html")
        .documentElement.textContent

    let question = htmlDecode(questions[questIndex].question)
    let correctAnswer = questions[questIndex].correct_answer

    let options=[]
    options=[...questions[questIndex].incorrect_answers,questions[questIndex].correct_answer]
    let shuffleOptions = _.shuffle(options)


    let status = ''


    const handleClick = (answer) => {
        if (answer === 'correct') {
            setScore(score+1)
        }
    }

    return(
        <>
            <div className='title'> 
                {category} Quiz 
            </div>
            <div className='score'>
                Score: {score}
            </div>
            <div className='question'> 
                Question {questIndex+1}: {question}
            </div>
            {shuffleOptions.map((option) => (
                <button onClick={() => {
                    (option === correctAnswer) ? setScore(score + 1) : setScore(score);
                    (option === correctAnswer) ? status='C' : status='I';
                    setFeedback(true)
                }}>
                    {htmlDecode(option)}
                </button>
            ))}
            {(feedback === true) && <DisplayFeedback status={status} correctAnswer={correctAnswer} questIndex={questIndex} setQuestIndex={setQuestIndex} setFeedback={setFeedback} />}
            <div>
                <button onClick={() => {setCatID(null)}}> Return to Categories </button>
            </div>
        </>
    )
}