import React from "react";
import Hero from "./Hero";
import Bio from "./Bio";
import Projects from "./Projects";
import Footer from "./Footer";
import Experience from "./Experience";

const App = () => {
    return <div className="bg-slate-100  dark:bg-gray-800 min-h-screen grid grid-cols-8">
        <Hero />
        <Bio />
        <Experience />
        <Projects /> 
        <Footer/>
    </div>;
};

export default App;
