import React from 'react'
import {Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Index } from '../Components/Index';
import { Portfolio } from '../Components/Portfolio';
import { Resume } from '../Components/Resume';
import { Contact } from '../Components/Contact';
import { HeaderNav } from '../Components/layout/HeaderNav';
import { Footer } from '../Components/layout/Footer';

export const Myroutes = () => {
  return (
    <BrowserRouter>

        {/* HEADER AND NAV */}
        <HeaderNav />
        {/* CENTRAL CONTENT */}
        <Routes>
            <Route path='/' element={<Index />}></Route>
            <Route path='/index' element={<Index />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/services' element={<Index />}></Route>
            <Route path='/resume' element={<Resume />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <hr/>
        <Footer />
    </BrowserRouter>
  )
}
