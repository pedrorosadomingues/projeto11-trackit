import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";
import styled from "styled-components";
import Subtitle from "../Subtitle";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function TodayPage() {
    const {setPage} = useContext(UserContext);
    useEffect(() => {
        setPage("today");
    }, []);
    return (
        <Today>
            <MainHeader/>
            <Subtitle/>
            <h1>Today</h1>
            <MainFooter/>
        </Today>
    )
}

const Today = styled.div`

`