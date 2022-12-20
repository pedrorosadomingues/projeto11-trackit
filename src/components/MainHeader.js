import logo2 from '../assets/logo2.svg'
import styled from 'styled-components'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Link } from 'react-router-dom'

export default function MainHeader() { 
    const {user} = useContext(UserContext);
    
    return (
        <Header data-test="header" image={user.image}>
           <Link to="/"><img src={logo2} alt="logo2" /></Link>
           <p>Olá, {user.name[0].toUpperCase() + user.name.slice(1).toLowerCase()
           }</p>
            <div/>
        </Header>
    )
}

const Header = styled.header`
    height: 70px;
    width: 375px;
    background: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    z-index: 1;
    p{
        color: #BABABA;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        line-height: 25px;
        margin-left: 80px;
    }
    div {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        background-image: url(${props => props.image});
        background-size: cover;
    }
`