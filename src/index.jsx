import './assets/Main.css';
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from './views/Home/Home';
import { Skill } from './views/Skills/Skill';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/skills' element={<Skill/>}/>
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
)