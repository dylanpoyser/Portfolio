import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

// TO DO: Projects should display tech used.

export default function Projects({}: Props) {
    const projects=[
      {
        image: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/Screenshot%202023-02-06%20163504.png?alt=media&token=571db3e6-1deb-4872-9984-5a0eacd42d11",
        name: "Portfolio",
        description: `
        My most recent project is...this page!  This portfolio was made with Next.js, React, and Tailwind CSS as well as framer motion.  
        Next.js was chosen to enable static generation to increase the speed of the site render.  Tailwind and Framer Motion were chosen for the ability to quickly test and create smooth and performant UI components! 
        `
      },
      {
        image: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/Screenshot%202023-02-04%20172808.png?alt=media&token=3719d69e-dc6f-45fa-9f3c-9e32adee4d21",
        name: "Foodscape",
        description: `An attempt by four developers to solve the eternal "what should we eat?" question.  The project aims to increase the speed at which one can compare multiple 
        restaurant options by extending the functionality of a map, rendering extra information on the map itself, without the need to open individual cards.  
        Made with Mapbox, React, Yelp API and Material UI.`,
      },
      {
        image: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/Untitled.png?alt=media&token=0a26f014-63f5-4f23-b873-cbb0ea555974",
        name: "Snowflakes",
        description: `A photography portfolio for two!  This project began as a way for us to increase our skill and understanding of the technologies used, namely:
         Firebase, Material UI, and ReactJS!`,
      },]

      
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
        z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0a98f7]/80">
            {projects.map((project,i) =>(
                <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                justify-center p-20 md:p-44 h-screen">
                    <motion.img className="h-3/6"
                        initial={{
                            y:-300,
                            opacity:0
                        }}
                        transition={{ duration: 1.5 }}
                        whileInView={{ opacity: 1, y:0}}
                        viewport={{ once: true }} 
                    src={project.image} 
                    alt="" />
                    <div className="space-y-10 px-0 md:px-10 max-d-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#0a98f7]/50">Case Study {i + 1} of {projects.length}:</span> {project.name}
                        </h4>

                        <p className="text-lg text-center md:text-left w-50%">
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#0a98f7]/10 left-0 h-[500px] -skew-y-12"/>

    </motion.div>
  )
}