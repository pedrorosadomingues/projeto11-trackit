import styled from "styled-components";
import DayButton from "./DayButton";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { BASE_URL } from "../../constants/urls";
import { ThreeDots } from 'react-loader-spinner';



export default function SaveHabitContainer({ openSaveHabit, setOpenSaveHabit, }) {
    const [form, setForm] = useState({ name: "", days: [] });
    const [loading, setLoading] = useState(false);
    const { user, setHabits, habits, setWeekdays, weekdays, setDays } = useContext(UserContext);

    let localDays = [{name: "S", selected: false}, {name: "T", selected: false}, {name: "Q", selected: false}, {name: "Q", selected: false}, {name: "S", selected: false}, {name: "S", selected: false}, {name: "D", selected: false}];

    function handleForm(value) {
        setForm({ ...form, name: value });
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
                console.log(weekdays)
                axios.get(`${BASE_URL}habits`, config)
                    .then((res) => {
                        setOpenSaveHabit(false)
                        setHabits(res.data)
                        setWeekdays(localDays);
                        setLoading(false);
                        setForm({ name: "", days: [] })
                        
                    })
                    .catch((err) => {
                        alert(err.response.data)
                    })
            })
            .catch(err => {
                alert(err)
                setLoading(false);
            })
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
        <SaveHabit onSubmit={saveHabit} openSaveHabit={openSaveHabit} loadingAnimation={loading}>
            <input disabled={loading} value={form.name} type="text" placeholder="nome do hábito" onChange={(e) => handleForm(e.target.value)} />
            <DaysContainer openSaveHabit={openSaveHabit} >
                {weekdays.map((d, index) => <DayButton
                    loadingAnimation={loading}
                    setForm={setForm}
                    form={form}
                    day={d.name}
                    key={index}
                    index={index + 1}
                    selected={d.selected} />)}
            </DaysContainer>
            <FinalButtons openSaveHabit={openSaveHabit} loadingAnimation={loading} >
                <button type="button">Cancelar</button>
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
    transition: 1s;
    input {
        width: 300px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin: 18px 0 0 10px;
        padding-left: 10px;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        color: "#D4D4D4" ;
        background-color: ${props => props.loading ? "#F2F2F2" : "#fff"};
        visibility: ${props => props.openSaveHabit ? "visible" : "hidden"};       
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
        opacity: ${props => props.loadingAnimation ? 0.7 : 1};
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