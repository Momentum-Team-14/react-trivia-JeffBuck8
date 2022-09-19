export const DisplayFeedback = ({status, correctAnswer, questIndex, setQuestIndex, setFeedback}) => {
    return(
        <>
            {(status === 'C')
                ? <div className='feedback'>Correct!</div>
                : <div className='feedback'>Incorrect!</div>
            }
            <div className='correctAnswer'>Correct Answer: {correctAnswer}</div>
            <div>
                <button onClick={() => {
                    setQuestIndex(questIndex+1);
                    setFeedback(false)
                }}> Next Question </button>
            </div>
        </>
    )
}