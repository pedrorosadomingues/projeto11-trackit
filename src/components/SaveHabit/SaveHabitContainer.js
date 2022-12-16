import styled from "styled-components";
import DayButton from "./DayButton";
import { DAYS } from "../../constants/weekdays";
import { useState } from "react";
import axios from "axios";


export default function SaveHabitContainer() {
    const [form, setForm] = useState({ name: "", days: [] });

    function handleForm(value) {
        setForm({ ...form, name: value });
        console.log(form);
    }
    function saveHabit() {
        const config = {
            headers: {
                authorization: `Bearer `
            }
        }}
    return (
        <SaveHabit onSubmit={saveHabit()}>
                <input type="text" placeholder="nome do hábito" onChange={(e)=>handleForm(e.target.value)} />
                <DaysContainer>
                    {DAYS.map((d, index) => <DayButton setForm={setForm} form={form} day={d} key={index} index={index + 1} />)}
                </DaysContainer>
                <FinalButtons>
                    <button>Cancelar</button>
                    <button type="submit">Salvar</button>
                </FinalButtons>
            </SaveHabit>
    )
}

const SaveHabit = styled.form`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 20px;
    input {
        width: 300px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin: 18px 0 0 10px;
        padding-left: 10px;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
       
        ::placeholder {
            color: #DBDBDB;
        }
    }
`
const DaysContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 4px;
    padding-left: 10px;
    margin-top: 10px;
`
const FinalButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;
    button:first-child {
        background-color: #FFFFFF;
        width: 84px;
        height: 35px;
        margin-right: 20px;
        border-radius: 5px;
        border: none;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        color: #52B6FF;
        :hover {
            cursor: pointer;
        }
    }
    button:last-child {
        background-color: #52B6FF;
        width: 84px;
        height: 35px;
        margin-right: 10px;
        border-radius: 5px;
        border: none;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        color: #FFFFFF;
        :hover {
            cursor: pointer;
        }
    }
`