import { UserContext } from "../contexts/UserContext"
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constants/urls";


export default function HabitDay({ habit, habitsLength }) {
const [habitIsDone, setHabitIsDone] = useState(habit.done);
const { setPercentege, habitsDay, percentege, user } = useContext(UserContext);

const config = {
    headers: {
        Authorization: `Bearer ${user.token}`
}
}

function checkHabit(id, habit) {
    setHabitIsDone(!habitIsDone);
    let addPercentege = percentege + 100 / habitsLength;
    let removePercentege = percentege - 100 / habitsLength;
    console.log(habit)
    if (!habit) {
        setPercentege(addPercentege)
        axios.post(`${BASE_URL}habits/${id}/check`, {}, config)
            .then((res) => console.log(res.data))
            .catch((err) => {
                return alert(err.response.data)})
     } else {
        setPercentege(removePercentege)
        axios.post(`${BASE_URL}habits/${id}/uncheck`, {}, config)
        .then((res) => console.log(res.data))
        .catch((err) => {return alert(err.response.data)})
    }
}

    return (
        <HabitDayContainer habitIsDone={habitIsDone}>
            <TextHabitDay>
                <h1>{habit.name}</h1>
                <p>Sequencia atual: {habit.currentSequence}dias</p>
                <p>Seu recorde: {habit.highestSequence} dias</p>
            </TextHabitDay>
            <ion-icon onClick={()=>checkHabit(habit.id, habitIsDone)} name="checkmark-outline"></ion-icon>

        </HabitDayContainer>
    )
}

const HabitDayContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
border-radius: 5px;
padding: 10px 15px;
width: 83%;
margin: 0 auto 10px auto;
h1 {
    font-size: 20px;
    color: #666666;
    font-family: 'Lexend Deca', sans-serif;
    line-height: 25px;
}
p{
    font-size: 13px;
    color: #666666;
    font-family: 'Lexend Deca', sans-serif;
    line-height: 15px;
}
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