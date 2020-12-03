import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

const ResultDiv = styled.div`
    background-color: lightblue;
    font-size:30px;
    text-align:center;
    margin: 200px 200px 200px 
`

const Result = () => {
    const uid = useSelector(state => state.firebase.auth.uid) 
    const username = useSelector(state => state.firebase.auth.displayName)   
    console.log(uid)
    console.log(username)
    useFirestoreConnect([{
        collection: 'quizResult',
        where:['userId','==',uid],
        /* orderBy: ['date','desc'], */
    }
    ])
    /* const result = useSelector(state => state.userPoints) */
    const userResults = useSelector(state => state.firestore.data && state.firestore.data.quizResult)

    return (
        userResults  ? (Object.entries(userResults).map(([key, value]) => {
            return (<h2 key={key}>{username} got {value.points} from {value.questions} questions</h2>)
        })) : null
    )
}
export default Result