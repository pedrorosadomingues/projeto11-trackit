import MainHeader from "../MainHeader";
import styled from "styled-components";
import Habit from "../Habit/Habit.js";
import MainFooter from "../MainFooter";
import Subtitle from "../Subtitle";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export default function HabitsPage() {
    const { habits, setHabits, user, setPage } = useContext(UserContext); 

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }
    useEffect(() => {
        setPage("habits");
        axios.get(`${BASE_URL}habits`, config)
            .then((res) => {          
                setHabits(res.data)
                console.log(habits)
            })
            .catch((err) => console.log(err.response.data))

    }, [])


    return (
        <Habits>
            <MainHeader />
            <Subtitle />
            {habits.length === 0 && <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
            {habits.map((h) => <Habit habit={h} />)}
            <MainFooter />
        </Habits>
    )
}

const Habits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #E5E5E5;
    min-height: 100vh;
    height: 100%;
    p {
        font-size: 18px;
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        line-height: 22px;
        margin-top: 30px;
        padding: 0 18px;
        max-width: 375px;
        text-align: start;
    }
`