import styled from "styled-components";

export default function DayButton({ day , setForm, form, index}) {
    
    function selectDay(e) {
        e.preventDefault();
        console.log(form.days);
        let localArray = [...form.days];
        if (localArray.includes(index)) {
            localArray = localArray.filter((d) => d !== index);
            setForm({ ...form, days: localArray });
            return;
        }
        setForm({ ...form, days: [...form.days, index] });
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