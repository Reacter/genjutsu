import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../redux/actions'

const Navigation = styled.nav`
    display:flex;
    justify-content:flex-end;
    background-color: #22172e;
    align-items:center;
    /* align-content:center; */
    
`
const MyLink = styled(Link)`
    color:blue;
    background-color:#0e0814;
    font-size:20px;
    margin:15px;
    padding:10px;
    text-decoration:none;
    border-radius:6px;
    
    :hover{
        color:black;
        background-color:#194f69;
    }
`

const Nav = () => {
    const dispatch = useDispatch()
    const uid = useSelector(state => state.firebase.auth.uid)

    return (

        <Navigation >
            <MyLink to="">Home</MyLink>
            <MyLink to="/startquiz">Start quiz</MyLink>
            {uid ? <>
                <MyLink to="/result">My Result</MyLink>
                <MyLink to="/signin" onClick={() => dispatch(signOut())}>Sign Out</MyLink>
            </>
                : <>
                    <MyLink to="/signup">Sign Up</MyLink>
                    <MyLink to="/signin">Sign In</MyLink>
                </>
            }

        </Navigation>

    )
}



export default Nav





