import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import Categories from '../Categories';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {optionsSave} from '../../redux/options/optionsActions'

const opentDB = require('opentdb-api')

const MyForm = styled.form`
    background-color:#3e2d52;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

.labelClass{
    color:#edd3dc;
    font-style:normal;
    margin-bottom:20px;
    margin-top:10px;
    font-size:18px;

}
.fieldClass{
    width:50%;
    border:2px;
    padding:0;
    text-align-last:center;
    font-size:16px;
    border-radius:6px;
}
.submitClass{
    background-color:#998585;
    width:8%;
    height:30px;
    margin-top:50px;
    border-radius:6px;
    font-size:16px;
    
    &:hover{
        background-color: #695555;
    }
}
`

const FormStyled = (props) => {
    const [options,setOptions] = useState({})
    const { register, handleSubmit,errors } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        console.log(data)
        data.amount = parseInt(data.amount)
        setOptions(data)
        props.history.push('/quiz')
    }
    useEffect(() =>{
        dispatch(optionsSave(options))
        // localStorage.setItem('options',JSON.stringify(options))
    },[options])

    return (
        <>
            <MyForm onSubmit={handleSubmit(onSubmit)}>
                <label className={"labelClass"}> Number of Quetions: </label>
                <input 
                    className="fieldClass"
                    type="number" 
                    defaultValue={10}
                    name="amount" 
                    min={1}
                    max={50}
                    ref={register({ required: "Required", min: {value:1,message:"Questions must be greater then 0" },max:{value:50,message:"Questions must be less then 51"}})}/>
                    {errors.amount && <p>{errors.amount.message}</p>}
                <label className={"labelClass"}> Select Categorie: </label>
                <select className="fieldClass" name="category" ref={register}>
                    <Categories />
                </select>
                <label className={"labelClass"}> Select Difficulty: </label>
                <select  className="fieldClass" name="difficulty" ref={register}>
                    <option value="any">Any Dificulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <label className={"labelClass"}>Select Type:</label>
                <select className="fieldClass" name="type" ref={register}>
                    <option value="any">Any Type</option>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True/False</option>
                </select>
                <input className="submitClass" type="submit" />
            </MyForm>
        </>
    )
}

export default withRouter(FormStyled)
