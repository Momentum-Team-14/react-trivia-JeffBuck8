import './App.css';
import { useState } from 'react'
import {DisplayCategories} from './DisplayCategories'
import {TakeQuiz} from './TakeQuiz'

function App() {
  // tracks the category ID # that the user selects
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