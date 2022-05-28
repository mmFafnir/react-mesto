import React, { useState } from 'react';
import authApi from '../utils/AuthApi';
import { useNavigate } from 'react-router-dom'; 


const Login = ({
    setAuth
}) => {

    const navigate = useNavigate()
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    
    



    const handleSubmit = (e) => {
        e.preventDefault();
        authApi.login(email, password).then(data => {
            if(!data.status){
                setAuth(data.token)
                navigate('/')
            }
            console.log(data)
        }).catch((e) => console.log(e))

    }


    return (
        <div className='auth'>
            <h2 className='auth__title'>Войти</h2>
            <form onSubmit={(e) => handleSubmit(e)} className="auth__form form">
                <div>
                    <input className='form__input' placeholder='Email' type="text" name='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input className='form__input' placeholder='Пароль' type="password" name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button 
                    className='auth__submit'
                    
                >Зарегистрироваться</button>
            </form>        
        </div>
    );
};

export default Login;