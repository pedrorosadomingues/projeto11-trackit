import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components";
import SaveHabitContainer from "./SaveHabit/SaveHabitContainer";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';


export default function Subtitle() {
    const [openSaveHabit, setOpenSaveHabit] = useState(false);
    const { page, percentege } = useContext(UserContext);

    const weekdayname = dayjs().locale('pt-br').format('dddd')[0].toUpperCase() + dayjs().locale('pt-br').format('dddd').slice(1) + ", " + dayjs().locale('pt-br').format('DD/MM');

    return (
        <>
            <Subtitlestyle percentege={percentege}>
                {page === "habits" && <>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setOpenSaveHabit(!openSaveHabit)}>+</button>
                </>}
                {page === "today" && <TextSubtitle>
                    <h1>{weekdayname}</h1>
                    <h2>{percentege===0 ? "Nenhum hábito concluído ainda" : `${percentege.toFixed()}% hábitos concluídos`}</h2>
                </TextSubtitle>}
            </Subtitlestyle>
            {<SaveHabitContainer openSaveHabit={openSaveHabit} setOpenSaveHabit={setOpenSaveHabit} />
            }
        </>
    )
}

const Subtitlestyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    width: 375px;
    margin-top: 80px;
    h1 {
        font-size: 23px;
        color: #126BA5;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }
    h2 {
        font-size: 18px;
        color: ${ props => props.percentege===0 ? "#BABABA" :  "#8FC549"};
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }
    button {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        color: #FFFFFF;
        font-size: 27px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        :hover {
            cursor: pointer;
    }
}`
const TextSubtitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`


