import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

export default function Habit(habit) {
    const {habits} = useContext(UserContext);
    console.log(habits);
    return (
        <HabitStyle>
            <h1>Ler um livro</h1>
        </HabitStyle>
    )
}

const HabitStyle = styled.div`
    h1 {
        font-size: 18px;
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        line-height: 22px;
        margin-top: 30px;
        padding: 0 18px;
        max-width: 375px;
        text-align: start;
    }
`