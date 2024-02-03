import React from 'react'
import {Routes, Route, BrowserRouter, NavLink, Navigate } from "react-router-dom";
import { Index } from '../Components/Index';
import { Portfolio } from '../Components/Portfolio';
import { Resume } from '../Components/Resume';
import { Contact } from '../Components/Contact';
import { HeaderNav } from '../Components/layout/HeaderNav';
import { Footer } from '../Components/layout/Footer';
import { Services } from '../Components/Services';

export const Myroutes = () => {
  return (
    <BrowserRouter>

        {/* HEADER AND NAV */}
        <HeaderNav />
        {/* CENTRAL CONTENT */}
        <section className='content'>
          <Routes>
              <Route path='/' element={<Navigate to="/index" />}></Route>
              <Route path='/index' element={<Index />}></Route>
              <Route path='/portfolio' element={<Portfolio />}></Route>
              <Route path='/services' element={<Services />}></Route>
              <Route path='/resume' element={<Resume />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </section>
        
        <Footer />
    </BrowserRouter>
  )
}
