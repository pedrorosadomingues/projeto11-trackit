import { UserContext } from "../contexts/UserContext"
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";


export default function HabitDay({ habit, habitsLength }) {
const [habitIsDone, setHabitIsDone] = useState(habit.done);
const { setPercentege, habitsDay, percentege } = useContext(UserContext);

function checkHabit(done) {
    setHabitIsDone(!habitIsDone);
    console.log(habitsLength)
    if (!done) {
        setPercentege(percentege+100/habitsLength)
     } else {
        setPercentege(percentege-100/habitsLength)
    }
}

    return (
        <HabitDayContainer habitIsDone={habitIsDone}>
            <TextHabitDay>
                <h1>{habit.name}</h1>
                <p>Sequencia atual: {habit.currentSequence}dias</p>
                <p>Seu recorde: {habit.highestSequence} dias</p>
            </TextHabitDay>
            <ion-icon onClick={(habit)=>checkHabit(habit.done)} name="checkmark-outline"></ion-icon>

        </HabitDayContainer>
    )
}

const HabitDayContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
ion-icon {
    color: white;
    font-size: 15px;
    font-weight: 700;
    width: 49px;
    height: 49px;
    background-color: ${props => props.habitIsDone ? "#8FC549" : "#EBEBEB"};
    border-radius: 5px;
    padding: 10px;
    :hover {
        cursor: pointer;
    }
}
`
const TextHabitDay = styled.div`

`