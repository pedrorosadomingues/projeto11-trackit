import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { ThreeDots } from 'react-loader-spinner'

export default function SignUpPage() {
    const [form, setForm] = useState({ name: "", email: "", image: "", password: "" });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        console.log(form);
    }

    function signUp(e) {
        e.preventDefault();
        setLoading(true);
        axios.post(`${BASE_URL}sign-up`, form)
            .then(res => navigate("/"))
            .catch(err => {
                setLoading(false);
                alert(err.response.data.message)
            })
            ;
    }

    function loadingSignUp(loading) {
        return (
            loading ?
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="white"
                    loading={loading}
                /> : "Cadastrar"
        )
    }


    return (
        <SignPage>
            <img src={logo} alt="logo" />
            <form onSubmit={signUp}>
                <input name="email" type="email" placeholder="email" onChange={e => handleForm(e)} />
                <input name="password" type="password" placeholder="senha" onChange={e => handleForm(e)} />
                <input name="name" type="text" placeholder="nome" onChange={e => handleForm(e)} />
                <input name="image" type="text" placeholder="foto" onChange={e => handleForm(e)} />
                <button type="submit">{loadingSignUp(loading)}</button>
                <Link to="/">
                    <p>Já tem uma conta? Faça login!</p>
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
        margin-top: 70px;
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