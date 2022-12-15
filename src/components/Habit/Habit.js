import HabitSubtitle from "../Subtitle";
import styled from "styled-components";

export default function Habit() {
    return (
        <HabitStyle>
            <HabitSubtitle/>
            <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
        </HabitStyle>
    )
}

const HabitStyle = styled.div`
    h1:nth-child(2) {
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