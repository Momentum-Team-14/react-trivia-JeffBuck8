export const DisplayResults = ({setCatID, score, category}) => {
    return(
        <>
            <div className='title'> 
                {category} Quiz 
            </div>
            <div className='score'>
                Final Score: {score}
            </div>
            <div>
                <button onClick={() => {setCatID(null)}}> Return to Categories </button>
            </div>
        </>
    )
}