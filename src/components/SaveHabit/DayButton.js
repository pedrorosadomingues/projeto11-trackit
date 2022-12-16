import styled from "styled-components";
import { useState } from "react";

export default function DayButton({ day, setForm, form, index, loading }) {
    const [selected, setSelected] = useState(false);

    function selectDay(e) {
        e.preventDefault();
        console.log(form.days);
        let localArray = [...form.days];
        if (localArray.includes(index)) {
            localArray = localArray.filter((d) => d !== index);
            setForm({ ...form, days: localArray });
            setSelected(!selected);
            return;
        }
        setForm({ ...form, days: [...form.days, index] })
        setSelected(!selected);
    }
    return (
        <Button disabled={loading} selected={selected} onClick={(e) => selectDay(e)}>
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
    transition: 1s;
`