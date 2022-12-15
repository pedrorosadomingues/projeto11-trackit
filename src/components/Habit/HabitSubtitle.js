import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import styled from "styled-components";

export default function HabitSubtitle() {
    const { page } = useContext(UserContext);
    return (
        <Subtitle>
            {page === "habits" && <>
                <h1>Meus hábitos</h1>
                <button>+</button>
            </>}
            {page === "today" && <>
                <h1>Hoje</h1>
                <h2>0% habitos concluidos</h2>
            </>}
        </Subtitle>
    )
}

const Subtitle = styled.div`
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
    }
`