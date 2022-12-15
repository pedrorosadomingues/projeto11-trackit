import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignUpPage() {
    return (
        <SignPage>
             <img src={logo} alt="logo" />
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="foto" />
                <button type="submit">Entrar</button>
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
    }
    form p {
        font-size: 14px;
        color: #52B6FF;
    }
`