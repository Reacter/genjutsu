import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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

const Nav = ({children}) =>{
    return (
        
        <Navigation>
            <MyLink to="">Home</MyLink>
            <MyLink to="/result">See Result</MyLink>
            <MyLink to="/startquiz">Start quiz</MyLink>
        </Navigation>
        
    )
}



export default Nav





