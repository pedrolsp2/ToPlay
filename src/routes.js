import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import PreReserva from './Pages/PreReserva';
import Quadra from './Pages/Quadra';
import LoginUser from './Pages/LoginUser';
import Header from './Components/Header';

function RoutesApp(){
    return(
    <BrowserRouter> 
    <Header/>
        <Routes>
            <Route path="/" element={ <Home/> }/> 
            <Route path="/prereserva" element={ <PreReserva/> }/> 
            <Route path="/quadra" element={ <Quadra/> }/> 
            <Route path="/login" element={ <LoginUser/> }/> 
        </Routes>
    </BrowserRouter>
);
}

export default RoutesApp;