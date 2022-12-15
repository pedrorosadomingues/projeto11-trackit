import styled from "styled-components";

export default function MainFooter() {
    return (
        <Footer>
            <button>Hábitos</button>
            <button>Hoje</button>
            <button>Histórico</button>
        </Footer>
    )
}

const Footer = styled.footer`
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 411px;
    position: fixed;
    bottom: 0;
    background: #FFFFFF;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.15);

    button:nth-child(2) {
        background: #52B6FF;
        border-radius: 50%;
        width: 91px;
        height: 91px;
        border: none;
        margin-bottom: 80px;
    }
`