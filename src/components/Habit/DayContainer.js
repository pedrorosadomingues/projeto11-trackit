import styled from "styled-components";

export default function DayContainer({selectedDaysIndex, index, day, weekdays }) {
    let selected = selectedDaysIndex.includes(index)
   
    return (
        <DayStyle data-test="habit-day" selected={selected}>
            {day.name}
        </DayStyle>
    )
}

const DayStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3px;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    color: ${props => props.selected ? "#FFFFFF" : "#DBDBDB"};
    font-size: 20px;
    font-family: 'Lexend Deca', sans-serif;
    background: ${props => props.selected ? "#CFCFCF" : "#FFFFFF"};
`