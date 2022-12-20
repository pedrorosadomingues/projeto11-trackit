import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function MainFooter() {
    const {percentege} = useContext(UserContext);
    return (
        <Footer data-test="menu">
            <div data-test="habit-link"><Link to="/habitos">Hábitos</Link></div>
            <div data-test="today-link"><Link to="/hoje"><CircularProgressbar value={percentege} text="Hoje" /></Link></div>
            <div data-test="history-link"><Link to="/historico">Histórico</Link></div>
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

    a{
        text-decoration: none;
        color: #52B6FF;
        font-size: 18px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        line-height: 22px;
    }

    .CircularProgressbar {
        background: #52B6FF;
        border-radius: 50%;
        width: 91px;
        height: 91px;
        border: none;
        margin-bottom: 40px;
        border-color: #FFFFFF;  
        padding: 5px;
    }
   .CircularProgressbar-path {
        stroke: #FFFFFF;
    }
    .CircularProgressbar-text {
        fill: #FFFFFF;
        font-family: 'Lexend Deca', sans-serif;
    }
    .CircularProgressbar-trail {
        stroke: #52B6FF;
    }
`