import React, { useEffect, useState } from 'react';
import Login from './Login';
import Header from './Header';
import Content from './Content';
import Register from './Register';

import { Routes, Route,useNavigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import authApi from '../utils/AuthApi';
import InfoTooltip from './InfoTooltip';



export const path = {
    MAIN: '/',
    LOGIN: '/sign-in',
    REGISTER: '/sign-up'
}
function App() {
    const [auth, setAuth] = useState(null);    
    const [tooltipStatus, setTooltipStatus] = useState(false);
    const [openTooltip, setOpenTooltip] = useState(false);

    const navigate = useNavigate()
    
    const logOut = () => {
        setAuth(null)
        navigate(path.LOGIN);
    }
    

    useEffect(() => {
        if(auth) {
            localStorage.setItem('jwt', auth);
            setTooltipStatus(true)
        } else {
            setTooltipStatus(false)
        }
        setOpenTooltip(true)

    }, [auth]);

    useEffect(() => {
        if(localStorage.getItem('jwt')){
            const JWT = localStorage.getItem('jwt');
            setAuth(JWT)
            navigate('/')
        }
    }, [])

    return (
        <>
            <Header logOut={logOut} auth={auth} />
            <Routes >
                <Route path={path.REGISTER} element={<Register setAuth={setAuth} />} />
                <Route path={path.LOGIN} element={<Login setAuth={setAuth}/>} />
                <Route 
                    exact 
                    path={path.MAIN} 
                    element={
                        <ProtectedRoute status={auth} components={<Content />}/>
                    }>
                    <Route exact path={path.MAIN} element={<Content />}/>
                </Route>
            </Routes>
            <InfoTooltip setOpen={setOpenTooltip} isOpen={openTooltip} status={tooltipStatus} />
        </>
    )
}

export default App;