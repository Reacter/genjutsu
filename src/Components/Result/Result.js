import React from 'react'
import styled from 'styled-components'

const ResultDiv = styled.div`
    background-color: lightblue;
    font-size:30px;
    text-align:center;
    margin: 200px 200px 200px 
`

const Result = () =>{
    const result = JSON.parse(localStorage.getItem('points'))
    console.log(result)
    return (
        <ResultDiv> Your result is : {result.pointTaken} out of {result.questions} questions </ResultDiv>
    )
}
export default Result