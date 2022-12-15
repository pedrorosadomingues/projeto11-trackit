import styled from "styled-components";

export default function DayButton({ day }) {
    function selectDay(e) {
        e.preventDefault();
    }
    return (
        <Button onClick={(e) => selectDay(e)}>
            {day}
        </Button>
    )
}


const Button = styled.button`
    width: 30px;
    height: 30px;
border-radius: 5px;
border: 1px solid #D4D4D4;
color: #DBDBDB;
background: #FFFFFF;
        :hover {
    cursor: pointer;
}
`