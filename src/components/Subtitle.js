import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { DAYS } from "../constants/weekdays";
import styled from "styled-components";
import DayButton from "./DayButton";

export default function Subtitle() {
    const [openSaveHabit, setOpenSaveHabit] = useState(false);
    const { page } = useContext(UserContext);


    return (
        <>
            <Subtitlestyle>
                {page === "habits" && <>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setOpenSaveHabit(!openSaveHabit)}>+</button>
                </>}
                {page === "today" && <>
                    <h1>Hoje</h1>
                    <h2>0% habitos concluidos</h2>
                </>}
            </Subtitlestyle>
            {openSaveHabit && <SaveHabitContainer>
                <input type="text" placeholder="nome do hábito" />
                <DaysContainer>
                    {DAYS.map((d, index) => <DayButton day={d} key={index} />)}
                </DaysContainer>
                <FinalButtons>
                    <button>Cancelar</button>
                    <button>Salvar</button>
                </FinalButtons>
            </SaveHabitContainer>
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
    margin-top: 20px;
    h1 {
        font-size: 23px;
        color: #126BA5;
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

const SaveHabitContainer = styled.form`
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
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin: 18px 0 0 10px;
        padding-left: 10px;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        color: '#DBDBDB';
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