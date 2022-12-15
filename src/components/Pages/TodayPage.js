import MainHeader from "../MainHeader";
import MainFooter from "../MainFooter";
import styled from "styled-components";

export default function TodayPage() {
    return (
        <Today>
            <MainHeader/>
            <h1>Today</h1>
            <MainFooter/>
        </Today>
    )
}

const Today = styled.div`

`