import { UserContext } from "../contexts/UserContext"
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constants/urls";


export default function HabitDay({ habit, habitsLength }) {
    const [habitIsDone, setHabitIsDone] = useState(habit.done);
    const [currentSequence, setCurrentSequence] = useState(habit.currentSequence);
    const [highestSequence, setHighestSequence] = useState(habit.highestSequence);
    const [isHighestSequence, setIsHighestSequence] = useState(habit.currentSequence === habit.highestSequence && highestSequence > 0);
    const { setPercentege, setHabitsDay, percentege, user } = useContext(UserContext);

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    function checkHabit(id, habit) {
        setHabitIsDone(!habitIsDone);
        console.log(habit)
        let addPercentege = percentege + 100 / habitsLength;
        let removePercentege = percentege - 100 / habitsLength;
        let localCurrentSequence = currentSequence;

        if (!habit) {
            setPercentege(addPercentege)
            setCurrentSequence(localCurrentSequence + 1)
            if (localCurrentSequence === highestSequence) {
                setHighestSequence(highestSequence + 1)
                setIsHighestSequence(true)
            }
            axios.post(`${BASE_URL}habits/${id}/check`, {}, config)
                .then((res) => axios.get(`${BASE_URL}habits/today`, config)
                    .then((res) => {
                        setHabitsDay(res.data)
                    })
                    .catch((err) => {
                        alert(err.response.data)
                    }))
                .catch((err) => {
                    return alert(err.response.data)
                })
        } else {
            setPercentege(removePercentege)
            setCurrentSequence(currentSequence - 1)
            if (currentSequence === highestSequence) {
                setHighestSequence(highestSequence - 1)
                setIsHighestSequence(false)
            }
            axios.post(`${BASE_URL}habits/${id}/uncheck`, {}, config)
                .then((res) => console.log(res.data))
                .catch((err) => { return alert(err.response.data) })
        }
    }

    return (
        <HabitDayContainer data-test="today-habit-container" habitIsDone={habitIsDone} isHighestSequence={isHighestSequence} >
            <TextHabitDay>
                <h1 data-test="today-habit-name">{habit.name}</h1>
                <p data-test="today-habit-sequence">Sequencia atual: <span>{currentSequence} dias</span></p>
                <p data-test="today-habit-record">Seu recorde: <span>{highestSequence} dias</span></p>
            </TextHabitDay>
            <div data-test="today-habit-check-btn"><ion-icon onClick={() => checkHabit(habit.id, habitIsDone)} name="checkmark-outline"></ion-icon></div>

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
span:nth-child(0){
    color: ${props => props.habitIsDone ? "#8FC549" : "#666666"}
}
span:nth-child(1){
    color: ${props => props.isHighestSequence ? "#8FC549" : "#666666"}
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