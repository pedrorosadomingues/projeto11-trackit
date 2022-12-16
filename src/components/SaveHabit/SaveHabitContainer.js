import styled from "styled-components";
import DayButton from "./DayButton";
import { DAYS } from "../../constants/weekdays";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";   
import { BASE_URL } from "../../constants/urls";
import { ThreeDots } from 'react-loader-spinner';


export default function SaveHabitContainer({openSaveHabit, setOpenSaveHabit}) {
    const [form, setForm] = useState({ name: "", days: [] });
    const [loading, setLoading] = useState(false);
    const { user, setHabits, habits, } = useContext(UserContext);

    function handleForm(value) {
        setForm({ ...form, name: value });
        console.log(form);
    }
    function saveHabit(e) {
        e.preventDefault();
        const config = {
            headers: {
                authorization: `Bearer ${user.token}` 
            }
        }
        setLoading(true);
        axios.post(`${BASE_URL}habits`, form, config)
            .then(res => {
                axios.get(`${BASE_URL}habits`, config)
            .then((res) => {
                setOpenSaveHabit(false)          
                setHabits(res.data)
                setLoading(false);
                console.log(habits)
            })
            .catch((err) => console.log(err.response.data))})
            .catch(err => console.log(err))
    }

    function loadingSaveHabit(loading) {
        return (
            loading ?
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="white"
                    loading={loading}
                /> : "Salvar"
        )
    }
    return (
        <SaveHabit onSubmit={saveHabit} openSaveHabit={openSaveHabit}>
            <input type="text" placeholder="nome do hábito" onChange={(e) => handleForm(e.target.value)} />
            <DaysContainer openSaveHabit={openSaveHabit} >
                {DAYS.map((d, index) => <DayButton setForm={setForm} form={form} day={d} key={index} index={index + 1} />)}
            </DaysContainer>
            <FinalButtons openSaveHabit={openSaveHabit} >
                <button>Cancelar</button>
                <button type="submit">{loadingSaveHabit(loading)}</button>
            </FinalButtons>
        </SaveHabit>
    )
}

const SaveHabit = styled.form`
    display: flex;
    flex-direction: column;
    width: 340px;
    min-height: ${props => props.openSaveHabit ? "180px" : "30px"};
    background: ${props => props.openSaveHabit ? "#FFFFFF" : "transparent"};
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    input {
        width: 300px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin: 18px 0 0 10px;
        padding-left: 10px;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        visibility: ${props => props.openSaveHabit ? "visible" : "hidden"};       
        ::placeholder {
            color: #DBDBDB;
        }
    }
    transition: 1s;
`
const DaysContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 4px;
    padding-left: 10px;
    margin-top: 10px;
    visibility: ${props => props.openSaveHabit ? "visible" : "hidden"};
    opacity: ${props => props.openSaveHabit ? "1" : "0"};
    transition: 1s;
    button{
        display: ${props => props.openSaveHabit ? "block" : "none"};
    } 
`
const FinalButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;
    position: absolute;
    bottom: 4px;
    right: 0;
    button{
        visibility: ${props => props.openSaveHabit ? "visible" : "hidden"};
        height: ${props => props.openSaveHabit ? "35px" : "0px"}; 
        opacity: ${props => props.openSaveHabit ? "1" : "0"};
        transition: 1s;
    }
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
        display: flex;
        justify-content: center;
        align-items: center;
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