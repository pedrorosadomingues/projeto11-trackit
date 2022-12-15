import logo from "../../assets/logo.svg";
import { Link , useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { ThreeDots } from 'react-loader-spinner'

export default function SignInPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        console.log(form);
    }

    function signIn(e) {
        e.preventDefault();
        setLoading(true);
        axios.post(`${BASE_URL}login`, form)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                navigate("/habitos");
                console.log(res)})
            .catch(err => {
                setLoading(false);
                alert(err.response.data.message)
            });
    }

    function loadingSignIn(loading) {
        return (
            loading ?
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="white"
                loading={loading}
            /> : "Entrar"
        )
    }

    return (
        <SignPage>
            <img src={logo} alt="logo" />
            <form onSubmit={signIn}>
                <input name="email" type="email" placeholder="email" onChange={e => handleForm(e)} />
                <input name="password" type="password" placeholder="senha" onChange={e => handleForm(e)} />
                <button type="submit">{loadingSignIn(loading)}</button>
                <Link to="/cadastro">
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </form>

        </SignPage>
    )
}

const SignPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 180px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 6px;
        
    }
    form input {
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        padding-left: 10px;
        
    }
    form button {
        width: 303px;
        height: 45px;
        border: none;
        border-radius: 5px;
        background-color: #52B6FF;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    form a {
        font-size: 14px;
        color: #52B6FF;
        text-align: center;
    }
`