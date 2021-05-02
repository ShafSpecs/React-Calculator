import React, { useState } from 'react'
import Display from './components/Display'
import Keys from './components/Keys'
import Casio from './components/Casio'
import './App.css'

const App = () => {
    const [originalText, changeText] = useState('');
    const [originalSolution, changeSolution] = useState('');
    const [currentState, changeState] = useState(false)

    const onUpdateProblem = (text) => {
        changeText(`${originalText}${text}`)
    }

    const solveProcess = (e = {text: 'AC'}) => {
        if (e.text == '='){
            changeSolution(eval(originalText))
        } else if (e.text == 'DEL'){
            changeText(originalText.slice(0, -1))
        } else if (e.text == 'AC'){
            changeText('')
            changeSolution('')
        } else if (e.text == 'EXP'){
            changeText(`${originalText}**`)
        }
    }

    const checkLength = (e) => {
        if(originalText.length < 24){
            onUpdateProblem(e.text)
        } else {
            throw new Error('Cannot take more than 24 values')
        }
    }

    const toggleOn = () => {
        changeState(!currentState);
    }

    const writeProblem = (e) => {
        if (e.text == '=' || e.text == 'EXP' || e.text == 'DEL' || e.text == 'AC') {
            solveProcess(e)
        } else if (e.text == 'ON/OFF') {
            toggleOn();
            solveProcess()
        } else {
            checkLength(e)
        }
    }

    return (
        <div className='calculator'>
            <Display text={originalText} solution={originalSolution} stat={currentState}/>
            <Casio />
            <Keys onClick={writeProblem}/>
        </div>
    )
}

export default App