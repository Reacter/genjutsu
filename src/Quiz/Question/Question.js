import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Answer from './Answer'

const MyDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-around;
    margin:50px 100px 300px;
    pointer-events:${({ activeStatus }) => activeStatus ? '' : 'none'};
.question{
    color:#c6e3af;
    font-size:30px;
    margin-bottom:50px;
    width:100%;
}   
/* .mouseUp{
    background-color:${({ correct }) => correct ? 'green' : 'red'} ;
    border-color:${({ correct }) => correct ? 'green' : 'red'} ;
} */
`


const Question = ({ question, updateId, updateCorrectId }) => {
    const [activeStatus, setActiveStatus] = useState(true)
    const [answers,setAnswers] = useState([])
    const setActiveStatusHandler = (value) => {
        setActiveStatus(value)
    }




    const extractShuffledAnswers = (question) => {
        const list = [{ correct: question.correct_answer }]
        question.incorrect_answers.map(item => {
            const itemToAppend = { incorrect: item }
            return (list.push(itemToAppend))
        })
        const shuffledAnswers = list.sort(() => Math.random() - 0.5)
        console.log(question.correct_answer)
        setAnswers(shuffledAnswers)
    }

    const allAnswers = answers.map((value) => (
        Object.entries(value).map(([name, realValue]) => {
            if (name === 'correct') {
                return (
                    <Answer keyValue={realValue} correct updateCorrectId={updateCorrectId} activeStatus={activeStatus} setActiveStatus={setActiveStatusHandler}>{realValue}</Answer>
                )
            }
            return (
                <Answer keyValue={realValue} updateId={updateId} activeStatus={activeStatus} setActiveStatus={setActiveStatusHandler}>{realValue} </Answer>
            )
        })
    ))
    useEffect(()=>{
        extractShuffledAnswers(question)
    },[question])

    return (
        <MyDiv activeStatus={activeStatus}>
            <div className="question">{question.question}</div>
            {allAnswers}
        </MyDiv>
    )
}

export default Question