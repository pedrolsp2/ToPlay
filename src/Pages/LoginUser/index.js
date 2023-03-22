import './style-login.css';

import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';

import avatar from './img/avatar.jpg'
import back from './img/back.svg'


function alert(){
    let txtUser = document.getElementById('user').value;
    let txtPswd = document.getElementById('password').value;

    if(!txtUser || !txtPswd){
        toast.error('Preencha todos os campos.');  
    }
    else if(txtUser !== "admin" && txtPswd !== "admin"){
        toast.error('Usuário ou senha incorretos!');
    }
    else{
        toast.success('Bem vindo! Bora por sistema.');
    }
}

function LoginUser() {
    return (
        <div>

            <section id="login">

                <article className='login'>
                        <div className='logo-login'>
                            <Link to='/' id='back-to-home'>
                                <img src={back} alt='Voltar' />
                            </Link>
                            <img src={avatar} alt='Toplay' />
                            <h2>Entrar</h2>
                            <h1>Sistema ToPlay</h1>
                            <hr />
                        </div>

                    <article id='form'>
                        <div id='input'>
                            <label for="user">E-mail ou usuário</label>
                            <input type="text" name="user" id="user" placeholder="Digite seu usuário" />

                            <label for="password">Senha</label>
                            <input type="password" name="password" id="password" placeholder="Digite sua senha" /> 

                        <span id='segurity'>
                            <label for="conected" id="con">
                                <input type="checkbox" name="conected" id="conected" />&nbsp;&nbsp;Continuar conectado
                            </label>
                            <a href="#" id="esqueci-senha">Esqueci minha senha</a>
                        </span>
                        </div>
                            <input type="submit" value="Entrar" id="sub" onClick={()=>alert()}></input>

                    </article>
                
                </article>
            </section>



                <span id="first"></span>
                <span id="second"></span>
        </div>

    )
}

export default LoginUser;