import {FETCH_USERS_FAIL,FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST} from './userTypes'
import axios from 'axios'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFAIL = (error) => {
    return {
        type: FETCH_USERS_FAIL,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            const users = res.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(err =>{
            const errMsg = err.message
            dispatch(fetchUsersFAIL(errMsg))
        })
    }
}
