import styled from "styled-components";
import DayContainer from "./DayContainer";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Habit({habit}) {
    const { weekdays } = useContext(UserContext);
    console.log(weekdays);
    return (
        <HabitStyle>
            <h1>{habit.name}</h1>
            <DaysContainerStyle>          
            {weekdays.map((d, index) => {
                return <DayContainer key={index} index={index+1} day={d} selectedDaysIndex={habit.days} />
            })}
        </DaysContainerStyle>
            <ion-icon name="trash-outline"></ion-icon>
        </HabitStyle>
    )
}

const HabitStyle = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 10px auto 0 auto;
    padding:15px;
    position: relative;

    h1 {
        font-size: 18px;
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        line-height: 22px;
        padding: 0 18px;
        max-width: 375px;
        text-align: start;
    }
    ion-icon {
        position: absolute;
        right: 8px;
        top: 8px;
        font-size: 20px;
        color: #666666;

        :hover {
            cursor: pointer;
        }
    }
`
const DaysContainerStyle = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10px;
`
