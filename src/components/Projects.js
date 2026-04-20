import React from "react";

const Projects = () => {

const projects = [
{
title: 'Automation Deployment',
subtitle: 'Portfolio Deployment on github',
img_url: 'Portfolio-Image.png',
source_code: 'https://github.com/mehrol/GITPULL_Docker_YML_File',
live: 'https://github.com/mehrol/GITPULL_Docker_YML_File/#project'
},
{
title: 'Wittyems Test env Deployment',
subtitle: 'Wittyems App',
img_url: 'wittyems.png',
live: 'https://www.wittyems.in/#project'
}
];

return ( <div className="col-start-2 col-end-8"> <div className="min-h-screen flex flex-col justify-evenly" id="project">

```
    <div className="flex justify-center my-5">
      <div className="text-4xl md:text-6xl font-bold text-slate-600 font-serif dark:text-slate-100">
        Projects
      </div>
    </div>

    <div className="flex flex-wrap w-full justify-evenly">
      {projects.map((project, index) => {
        return (
          <div key={index} className="h-96 flex flex-col justify-between w-[300px] my-5 bg-slate-300 rounded-lg py-5 px-2">

            <div>
              <img
                className="w-full h-36"
                src={require('../assets/' + project.img_url)}
                alt="project"
              />
              <div className="text-2xl">{project.title}</div>
              <div className="text-xl">{project.subtitle}</div>
            </div>

            <div className="flex justify-between">

              {/* Source Code */}
              {project.source_code && (
                <div className="w-32 text-center rounded-lg bg-slate-800 p-2 text-lg text-slate-200 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 duration-200">
                  <a href={project.source_code} target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                </div>
              )}

              {/* Live */}
              <div className="w-32 text-center rounded-lg bg-slate-800 p-2 text-lg text-slate-200 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 duration-200">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
              </div>

            </div>

          </div>
        );
      })}
    </div>

  </div>
</div>
);

};

export default Projects;
