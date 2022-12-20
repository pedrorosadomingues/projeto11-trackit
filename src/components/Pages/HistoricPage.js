import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";
import Subtitle from "../Subtitle";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function HistoricPage() {
    const {setPage} = useContext(UserContext);

    useEffect(() => {
        setPage("historic");
    }, []);
    return (<>
        <MainHeader/>
        <HistoricContainer>
        <Subtitle/>
        <Historic>      
            <h1>Em breve você poderá ver o histórico dos seus hábitos aqui!</h1>  
        </Historic>
        </HistoricContainer>
        <MainFooter/>
        </>
    )
}

const Historic = styled.div`
    margin: 70px auto 70px auto;

    h1 {
        font-size: 18px;
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        line-height: 22px;
    }
`
const HistoricContainer = styled.div`
    display: flex;
    flex-direction: column;
`