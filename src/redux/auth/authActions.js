import { get } from 'react-hook-form'
import { SIGN_IN, SIGN_OUT, SIGN_UP,SIGN_UP_ERR,SIGN_OUT_ERR,SIGN_IN_ERR } from './authTypes'

export const signIn = creds => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase
            .auth()
            .signInWithEmailAndPassword(creds.email, creds.password)
            .then(() => {
                dispatch({ type: SIGN_IN })
            })
            .catch((err) => {
                console.log(1)
                console.log(err.message)
                dispatch({type : SIGN_IN_ERR,payload:err})
            })
    }
}
export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase
            .auth()
            .signOut()
            .then(() => {

                dispatch({ type: SIGN_OUT })
            })
            .catch((err) => {
                console.log(err)
                dispatch({type : SIGN_OUT_ERR,payload:err})

            })
    }
}

export const signUp = (creds) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        
        firebase
            .auth()
            .createUserWithEmailAndPassword(creds.email, creds.password)
            .then((res) => {
                console.log(creds.username)
                res.user.updateProfile({
                    displayName:creds.username
                })
                dispatch({type:SIGN_UP})

            })
            .catch(err=>{
                dispatch({type : SIGN_UP_ERR,payload:err})
            })
    }
}
