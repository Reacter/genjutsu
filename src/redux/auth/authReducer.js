import {toast} from 'react-toastify'
import { SIGN_IN, SIGN_OUT, SIGN_UP,SIGN_IN_ERR,SIGN_OUT_ERR,SIGN_UP_ERR } from './authTypes'

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGN_IN:
            toast('sign in successfully')
            return state
        case SIGN_IN_ERR:
            toast(action.payload.message)
            console.log(action.payload.message)
            alert(action.payload.message)

            return state
        case SIGN_OUT:
            toast('sign out successfully')
            return state;
        case SIGN_OUT_ERR:
            toast(action.payload.message)
        case SIGN_UP:
            toast('sign out successfully')
            return state;
        case SIGN_UP_ERR:
            toast(action.payload.message)
        default:
            return state
    }
}
export default authReducer