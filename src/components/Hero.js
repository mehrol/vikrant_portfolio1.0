import React, { useEffect, useState } from "react";
import sun from '../assets/sun.gif';
import moon from "../assets/moon.png";
import vikrant from "../assets/vikrant.jpg";

const Hero = () => {
    const [theme, setTheme] = useState("light");

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        const words = ["DevOps Engineer", "IT Specialist", "Linux Administrator"];
        let i = 0;
        let timer;

        function typeWriter() {
            const heading = document.getElementById("typewriter");
            const word = words[i];
            const speed = 250;

            if (heading.textContent.length < word.length) {
                heading.textContent += word.charAt(heading.textContent.length);
                timer = setTimeout(typeWriter, speed);
            } else {
                clearTimeout(timer);
                setTimeout(deleteText, speed * 2);
            }
        }

        function deleteText() {
            const heading = document.getElementById("typewriter");
            const word = words[i];
            const speed = 75;

            if (heading.textContent.length > 0) {
                heading.textContent = word.substring(0, heading.textContent.length - 1);
                timer = setTimeout(deleteText, speed);
            } else {
                i = (i + 1) % words.length;
                setTimeout(typeWriter, speed * 2);
            }
        }

        typeWriter();
    }, []);


    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return <div className="col-start-2 col-end-8" id="home">
        <div className="min-h-screen flex flex-col">
            <nav className="flex justify-between py-5">
                <div className="text-3xl md:text-5xl font-extrabold text-slate-600 font-serif dark:text-slate-200">VIKRANT <b>.</b></div>
                <ul className="flex space-x-5 text-2xl">
                    <li className="hidden lg:block font-semibold text-slate-500 font-serif transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:inline-block hover:text-transparent hover:bg-clip-text duration-200"><a href="#home">Home</a></li>
                    <li className="hidden lg:block font-semibold text-slate-500 font-serif transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:inline-block hover:text-transparent hover:bg-clip-text duration-200"><a href="#bio">Bio</a></li>
                    <li className="hidden lg:block font-semibold text-slate-500 font-serif transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:inline-block hover:text-transparent hover:bg-clip-text duration-200"><a href="#about">About</a></li>
                    <li className="hidden lg:block font-semibold text-slate-500 font-serif transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:inline-block hover:text-transparent hover:bg-clip-text duration-200"><a href="#project">Project</a></li>
                    <li>
                        <button
                            onClick={() => handleThemeSwitch()}
                        >
                            {theme === "dark" ?
                                <img className="animate-spin w-8" src={moon} />
                                : <img className="animate-spin mix-blend-multiply w-8" src={sun} />}
                        </button>
                    </li>
                </ul>
            </nav>

            <div className="m-auto">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 ">
                        <img className="animate-slide" src={vikrant} />
                    </div>
                    <div className="w-full md:w-1/2 space-y-3">
                        <span className="text-4xl font-semibold text-slate-600 dark:text-slate-100">Hello<span className="font-extrabold text-purple-600">_</span></span>
                        <h1 className="text-slate-700 font-extrabold text-5xl dark:text-slate-100">I'm </h1><span className="bg-gradient-to-r from-purple-600 to-blue-600 inline-block font-extrabold h-32 text-3xl md:text-5xl text-transparent bg-clip-text min-h-20 h-30" id="typewriter">Software Engineer</span>
                        <p className="text-2xl text-slate-600 dark:text-slate-100">IT Engineer Redhat system administrator Certified and a Technologies Enthusiast with strong technical skills anchored
                            on
                            extensive engineering coursework and a special focus on DevOps Automation. Let's
                            create something
                            extraordinary together!</p>
                        <div className="">
                            <button className="w-52 h-16 bg-slate-600 shadow-xl shadow-slate-600 dark:shadow-slate-950 text-slate-50 text-2xl font-semibold font-serif transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 duration-200"><a
                                href="https://drive.google.com/file/d/1aAPwEGWZDqYy0s2yezbO6Ectf2o_aYQS/view?usp=sharing"
                                target="_blank"
                                download>Download CV</a></button>
                        </div>
                        <section className="space-x-5 text-5xl bg-gradient-to-r from-purple-600 to-blue-600 inline-block text-transparent bg-clip-text py-10">
                            <a href="https://www.linkedin.com/in/vikrant-mehrol-1a92b4111/"><i className="fab fa-linkedin transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:inline-block hover:text-transparent hover:bg-clip-text duration-200"></i></a>
                            <a href="https://github.com/mehrol"><i className="fab fa-github-square transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:inline-block hover:text-transparent hover:bg-clip-text duration-200"></i></a>
                            <a href="mailto:vikasmehra759@gmail.com"><i className="fa fa-envelope transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:inline-block hover:text-transparent hover:bg-clip-text duration-200"></i></a>
                            <a href="tel:9953282406"><i className="fa fa-phone transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:inline-block hover:text-transparent hover:bg-clip-text duration-200"></i></a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Hero;
