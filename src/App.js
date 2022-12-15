import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Pages/SignInPage";
import HabitsPage from "./components/Pages/HabitsPage";
import SignUpPage from "./components/Pages/SignUpPage";
import TodayPage from "./components/Pages/TodayPage";
import HistoricPage from "./components/Pages/HistoricPage";
import styled from "styled-components"; 
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

export default function App() {
  const [user, setUser] = useState({email: "", password: "", name: "", image: "", token: "", id: ""});
  const [page, setPage] = useState("login");
  const [habits, setHabits] = useState([]);

  return (
    <UserContext.Provider value={{user, setUser, page, setPage, habits, setHabits}}>
    <TrackIt>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/habitos" element={<HabitsPage/>}/>
      <Route path="/cadastro" element={<SignUpPage/>}/>
      <Route path="/hoje" element={<TodayPage/>}/>
      <Route path="/historico" element={<HistoricPage/>}/>
    </Routes>
  </BrowserRouter>
  </TrackIt>
  </UserContext.Provider>
  );
}

const TrackIt = styled.div`
display: flex;
justify-content: center;
width: 375px;
margin: auto;
`

