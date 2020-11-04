import React, { useState, useEffect } from 'react'
import Question from './Question/Question'
import { withRouter } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {savePoints,savePointsToFirebase} from '../../redux/actions'

const opentDB = require('opentdb-api')

const Quiz = (props) => {
    const options = useSelector(state => state.options.options)
    // const storageOptions = localStorage.getItem("options")
    const [questions, setQuestions] = useState([])
    const [id, setId] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const amount = parseInt(options.amount)
    const dispatch = useDispatch()


    const updateId = () => {
            if (id < amount - 1) {
                setId(prevId => prevId + 1)
            }else {
                const pointsData = {
                    points: correctAnswers,
                    questions: parseInt(options.amount)
                }
                console.log('before dispatch')
                dispatch(savePointsToFirebase(pointsData))
                // localStorage.setItem('points',JSON.stringify(pointsData))
                props.history.push('/result')
            } 
    }
    const updateCorrectId = () => {    
        setCorrectAnswers(correctAnswers + 1)
        if (id < amount - 1) {
            // console.log('id increment   ' + id)
            setId(prevId => prevId + 1)
        } else {
            const pointsData = {
                points: correctAnswers+1,
                questions: parseInt(options.amount)
            }
                dispatch(savePointsToFirebase(pointsData))
                // localStorage.setItem('points',JSON.stringify(pointsData))
                props.history.push('/result')
        }
    }

    useEffect(() => {
        const myOptions = {
            amount: parseInt(options.amount),
            category: options.category,
            difficulty: options.difficulty,
            type: options.type
        }
        opentDB.getTrivia(myOptions).then(res => {
            setQuestions(res)
        })
    }, [])
    

    const question = null

    if (questions.length > 0) {
        return <Question question={questions[id]} id={id} updateId={updateId} updateCorrectId={updateCorrectId} />
    }




    return (

        <div>
            {question}
        </div>
    )

}

export default withRouter(Quiz)