import {hot} from 'react-hot-loader';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import './App.scss'

function App(){

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact
               path='/'
               component={AboutMe} />
        <Route path='/projects' 
               component={Projects} />
        <Route path='/contact' 
               component={Contact} />
      </Switch>
      <Footer />
    </>
  )
}

export default hot(module)(App);