import React from "react";
import vikrant from "../assets/vikrant.jpg";

const Footer = () => {
  return <div className="col-start-1 col-end-9">
    <section className="w-full bg-gray-800 dark:bg-black flex flex-col items-center">
      <div className='w-20 md:w-32 m-5'>
        <img src={vikrant} alt="logo" />
      </div>
      <div className='w-full h-fit p-2 bg-gray-950 text-slate-300 flex flex-col md:flex-row justify-center align-middle items-center space-y-2 md:space-x-5 md:space-y-0'>
        <a href="mailto:vikasmehra759@gmail.com">vikasmehra759@gmail.com</a>
        <a href="tel:9953282406">+919953282406</a>
      </div>
      <div className='text-slate-300'>
        <div>©️ Copyright 2022, All Rights Reserved</div>
      </div>
    </section>
  </div>;
};

export default Footer;
