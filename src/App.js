import './App.css';
import { useState } from 'react'
import {DisplayCategories} from './DisplayCategories'
import {TakeQuiz} from './TakeQuiz'

function App() {
  const [catID, setCatID] = useState(null)

  return (
    <>
      <h1>Jeff's Trivia Game</h1>
      {
        (!catID) 
        ? <DisplayCategories setCatID={setCatID} /> 
        : <TakeQuiz catID={catID} setCatID={setCatID} /> 
      }
    </>
  );
}

export default App;