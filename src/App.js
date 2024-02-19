import React from 'react';
// import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Portofolio from './components/portofolio/Portofolio';
import Qualification from './components/qualification/Qualification';
// import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
// import WebDesign from './components/webDesign/WebDesign';


// New Import 

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import ReactDOM from "react-dom/client";  

function App() {
  return (
    
      <div className="App">
        <Header />

        <main className="main">        
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Portofolio />
          {/* <Testimonial />  */}
          <Contact />
          {/* <Switch>
            <Route path="/webDesign">
              
            </Route>
          </Switch> */}
        </main>
        <Footer />
        <ScrollUp />
      </div>
      
    
  );
}

export default App;



