import React from "react";

const Projects = () => {

  const projects = [
    {
      title: 'Automation Deopoyement',
      subtitle: 'Ticketing Portal Deopoyement Scripts',
      img_url: 'Portfolio-Image.png',
      source_code: 'https://github.com/mehrol/GITPULL_Docker_YML_File',
      live: 'https://github.com/mehrol/GITPULL_Docker_YML_File/#project'
    },
    {
      title: 'Wittyems Test evn Deployement',
      subtitle: 'wittyems App',
      img_url: 'wittyems.png',
      live: 'https://www.wittyems.in/#project'
    },
    {
      title: 'Witty-Ticketing Deployement',
      subtitle: 'Witty-Ticketing project Deployement',
      img_url: 'Algo-Visualizer.png',
      source_code: 'https://github.com/Mukulninjas/sorting-algo',
      live: 'https://mukulninjas.github.io/sorting-algo/'
    }
  ];

  return <div className="col-start-2 col-end-8">
    <div className="min-h-screen flex flex-col justify-evenly" id="project">
      <div className="flex justify-center my-5">
        <div className="text-4xl md:text-6xl font-bold text-slate-600 font-serif dark:text-slate-100">Projects</div>
      </div>
      <div className="">
        {/* <i id="left" className="fa-solid fa-angle-left"></i> */}
        <div className="flex flex-wrap w-full justify-evenly">
          {projects.map((index, key) => {
            return (
              <div className="h-96 flex flex-col justify-between w-[300px] my-5 bg-slate-300 rounded-lg py-5 px-2">
                <div>
                <img className="w-full h-36" src={require('../assets/'+index.img_url)} alt="project_image" />
                <div className="text-2xl">{index.title}</div>
                  <div className="text-xl">{index.subtitle}</div>
                  </div>
                <div className="flex justify-between">
                  <div className="w-32 text-center rounded-lg bg-slate-800 p-2 text-lg text-slate-200 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 duration-200"><a href={index.source_code} target="_blank">Source Code</a></div>
                  <div className="w-32 text-center rounded-lg bg-slate-800 p-2 text-lg text-slate-200 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 duration-200"><a href={index.live} target="_blank">Live</a></div>
                </div>
              </div>)
          })}
        </div>
        {/* <i id="right" className="fa-solid fa-angle-right"></i> */}
      </div>
    </div>
  </div>;
};

export default Projects;
