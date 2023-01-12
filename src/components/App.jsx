import Box from "box/Box";
import { useState } from "react";
import Counter from "./Counter/Counter";
import Game from "./Game/Game";
import GameResult from './Game/GameResult'
import Modal from "./Modal/Modal";
import questions from "info/infoQuiz";

export const App = () => {
  const [isActive, setIsActive] = useState(false)

  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  
  
  const question = questions[step];
  // console.log(question.correct);
  
  const handleClickQuiz = (index) => {
    setStep(pS => pS + 1)

    if(index === question.correct){
      setCorrect(pS => pS + 1)
    }
  }
  


  

  const handleToggle = () => {
    setIsActive(pS => !pS)
  }


  return(
    <>
    <Box  width={300} p={20}>
      {step !== questions.length ? <Game question={question} handleClickQuiz={handleClickQuiz} total={questions} step={step}/>
      : <GameResult total={questions} correct={correct}/>}
    </Box>

    <Box display="flex" justifyContent="center" alignItems="center" p={20}>
      {isActive && <Modal onClose={handleToggle}>
        <p>bbbbbb</p>
        <button type="button" onClick={handleToggle}></button>
        </Modal>}
      <button type="button" onClick={handleToggle}></button>
    </Box>
    <Box display="flex" justifyContent="center" alignItems="center" p={20}>
      <Counter />
    </Box>
    </>
  )
};

