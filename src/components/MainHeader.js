import logo2 from '../assets/logo2.svg'
import styled from 'styled-components'

export default function MainHeader() { 
    return (
        <Header>
            <img src={logo2} alt="logo2" />
            <img src={logo2} alt="logo2" />
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
`