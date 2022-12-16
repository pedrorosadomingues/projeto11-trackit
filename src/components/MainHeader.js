import logo2 from '../assets/logo2.svg'
import styled from 'styled-components'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Link } from 'react-router-dom'

export default function MainHeader() { 
    const {user} = useContext(UserContext);
    console.log(user);
    return (
        <Header image={user.image}>
           <Link to="/"><img src={logo2} alt="logo2" /> </Link>
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
    div {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        background-image: url(${props => props.image});
        background-size: cover;
    }
`