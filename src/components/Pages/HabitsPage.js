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
    const { habits, setHabits, user, setPage, setPercentege, weekdays } = useContext(UserContext);

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    const reverseHabits = [...habits].reverse(); 
    console.log(reverseHabits)

    useEffect(() => {
        setPage("habits");
        axios.get(`${BASE_URL}habits`, config)
            .then((res) => setHabits(res.data))
            .catch((err) => console.log(err.response.data));
        axios.get(`${BASE_URL}/habits/today`, config)
            .then((res) => {
                let percentege = 0;
                res.data.forEach((h) => {
                    if (h.done) {
                        percentege += 100 / res.data.length;
                    }
                }
                )
                setPercentege(percentege);
            })
            .catch((err) => alert(err));
    }, [weekdays])

    return (
        <Habits>
            <MainHeader />
            <Subtitle />
            {habits.length === 0 && <TextNoHabit>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</TextNoHabit>}
            {reverseHabits.map((h, index) => <Habit key={index} habit={h} />)}
            <MainFooter />
        </Habits>
    )
}

const Habits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F2F2F2;
    min-height: 100vh;
    height: 100%;
    margin-bottom: 70px;
`
const TextNoHabit = styled.p`
        font-size: 18px;
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        line-height: 22px;
        margin-top: 30px;
        padding: 0 18px;
        max-width: 375px;
        text-align: start;
`