import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import MyWorks from "./MyWorks/MyWorks";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <About />
            <MyWorks />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
