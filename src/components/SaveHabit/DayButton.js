import styled from "styled-components";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function DayButton({ day, setForm, form, index, loadingAnimation, selected}) {
    const { weekdays, setWeekdays } = useContext(UserContext);

    let localWeekdays = [...weekdays];

    function selectDay(e) {
        e.preventDefault();
        localWeekdays[index-1].selected = !localWeekdays[index-1].selected;
        console.log(index)
        let localArray = [...form.days];
        
        if (localArray.includes(index)) {
            localArray = localArray.filter((d) => d !== index);
            setForm({ ...form, days: localArray });
            setWeekdays(localWeekdays);
            return;
        }
        setForm({ ...form, days: [...form.days, index] })
        setWeekdays(localWeekdays);
    }
    return (
        <Button disabled={loadingAnimation} selected={selected} onClick={(e) => selectDay(e)}>
            {day}
        </Button>
    )
}

const Button = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    color: ${props => props.selected ? "#FFFFFF" : "#DBDBDB"};
    font-size: 20px;
    font-family: 'Lexend Deca', sans-serif;
    background: ${props => props.selected ? "#CFCFCF" : "#FFFFFF"};
    opacity: ${props => props.loading ? "0.7" : "1"};
    :hover {
    cursor: pointer;
}
`