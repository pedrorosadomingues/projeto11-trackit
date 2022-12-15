import MainHeader from "../MainHeader";
import styled from "styled-components";
import Habit from "../Habit/Habit.js";
import MainFooter from "../MainFooter";

export default function HabitsPage() {
    return (
        <Habits>
            <MainHeader/>
            <Habit/>
            <MainFooter/>
        </Habits>
    )
}

const Habits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #E5E5E5;
    height: 100vh;
    
`