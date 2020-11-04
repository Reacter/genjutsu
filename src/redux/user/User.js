
import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchUsers} from './userActions'

const User = () => {
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('in useeffect')
        dispatch(fetchUsers())

    },[])
    console.log(userData)

    return userData.loading ? (
        <h2> LOADING </h2>
    ) : userData.error ? (
        <h2> ERROR </h2>
    ) : (
        <div>
            <h2 > User List</h2>
            <div>
                {userData && userData.users && userData.users.map(user=>(<h2>{user.name}</h2>))}
            </div>
        </div>
    )
};

export default User;