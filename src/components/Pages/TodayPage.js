import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";
import styled from "styled-components";
import Subtitle from "../Subtitle";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import HabitDay from "../HabitDay";

export default function TodayPage() {
    const {setPage, habitsDay, setHabitsDay, user, setPercentege} = useContext(UserContext);
    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    }  
    console.log(habitsDay)
    useEffect(() => {
        setPage("today");
        axios.get(`${BASE_URL}habits/today`, config)
        .then((res) => {
            setHabitsDay(res.data)
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

    }, []);
    return (
        <Today>
            <MainHeader/>
            <Subtitle/>
            {habitsDay.map((h) => <HabitDay key={h.id} habit={h} habitsLength={habitsDay.length} />)}
            <MainFooter/>
        </Today>
    )
}

const Today = styled.div`
    margin-bottom: 70px;
    background-color: #F2F2F2;
    min-height: calc(100vh - 70px);
`