import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Pages/SignInPage";
import HabitsPage from "./components/Pages/HabitsPage";
import SignUpPage from "./components/Pages/SignUpPage";
import TodayPage from "./components/Pages/TodayPage";
import HistoricPage from "./components/Pages/HistoricPage";
import styled from "styled-components"; 

export default function App() {
  return (
    <TrackIt>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
      <LoginPage
      
      />}/>
      <Route path="/habitos" element={<HabitsPage/>}/>
      <Route path="/cadastro" element={<SignUpPage/>}/>
      <Route path="/hoje" element={<TodayPage/>}/>
      <Route path="/historico" element={<HistoricPage/>}/>

    </Routes>
  </BrowserRouter>
  </TrackIt>
  );
}

const TrackIt = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`

