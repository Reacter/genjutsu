import React from 'react'
import {useForm} from 'react-hook-form'
import {MyForm} from '../Form/Form'
import {useDispatch,useSelector} from 'react-redux'
import {signIn} from '../../redux/actions'
import {Redirect} from 'react-router-dom'


const SignIn = () => {
    const { register, handleSubmit,errors } = useForm()
    const dispatch = useDispatch()
    const uid = useSelector(state => state.firebase.auth.uid)

    const onSubmit = (data,e) =>{
        e.preventDefault()
        dispatch(signIn(data))
    }
    if (uid) 
        return <Redirect to='/'/>
    return (
        <MyForm onSubmit={handleSubmit(onSubmit)}>
            <label className='labelClass'>Enter your email</label>
            <input 
                className='inputClass' 
                name='email' 
                type='email'
                ref={register({required:'Required'})}
            />
            <label className='labelClass'>Enter your password</label>
            <input 
                className='inputClass' 
                name='password' 
                type='password'
                ref={register({required:'Required'})}
            />
            <button className="submitClass" type="submit">Submit</button>

        </MyForm>
    )
}
export default SignIn
