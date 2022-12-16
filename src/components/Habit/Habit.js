import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


export default function Habit({habit}) {
    const {habits} = useContext(UserContext);
    console.log(habit);
    return (
        <HabitStyle>
            <h1>{habit.name}</h1>
            
        </HabitStyle>
    )
}

const HabitStyle = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 10px auto;
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