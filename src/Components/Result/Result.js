import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import axios from 'axios'

const ResultDiv = styled.div`
    background-color: lightblue;
    font-size:30px;
    text-align:center;
    margin: 200px 200px 200px 
`

const Result = () =>{
    const result = useSelector(state => state.userPoints)
    /* const result = JSON.parse(localStorage.getItem('points')) */

    console.log(result)
    console.log('before last result')
    return (
        <ResultDiv> Your result is : {result.points} out of {result.questions} questions </ResultDiv>
    )
}
export default Result