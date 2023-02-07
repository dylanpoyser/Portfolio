import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}






export default function Skills({}: Props) {

  const skills = [
    {
      key: 0,
      skill: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/skills%2FHTML5_logo_and_wordmark.svg.png?alt=media&token=b079a53f-447c-41f9-9a98-24b5836be1f2",
      percent: 80
    },
    {
      key: 1,
      skill: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/skills%2Fjavascript-logo-transparent-logo-javascript-images-3.png?alt=media&token=a4e5058f-791d-447c-8ca2-64fc58cd8d16",
      percent: 70
    },
    {
      key: 2,
      skill: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/skills%2F5847f40ecef1014c0b5e488a.png?alt=media&token=b5066e0f-f3c9-4804-b8f3-ee6164e79458",
      percent: 30
    },
    {
      key: 3,
      skill: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/skills%2FVue.js_Logo_2.svg.png?alt=media&token=405f3173-a780-4a33-ab69-e0ed8b65dadf",
      percent: 50
    },
    {
      key: 4,
      skill: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/skills%2Fnodejs-1-logo-png-transparent.png?alt=media&token=250c9a66-c8ee-436b-946d-62eb02a0fc9a",
      percent: 80
    },
    {
      key: 5,
      skill: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/skills%2Freact-1-logo-png-transparent.png?alt=media&token=68840e5e-8661-4377-b777-406e6b10dc53",
      percent: 70
    },
    {
      key: 6,
      skill: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/skills%2Fphp-1-logo-png-transparent.png?alt=media&token=ab07bb96-ecea-47bc-991e-cbd4800a8d91",
      percent: 40
    },
    {
      key: 7,
      skill: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/skills%2Flogo.png?alt=media&token=be5d21df-98d9-4136-bea5-d6c28047baaf",
      percent: 70
    },
    {
      key: 8,
      skill: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/skills%2Ftailwind-css-icon.webp?alt=media&token=e3b4a7d5-4809-4e18-979d-47fc8ee2c6d6",
      percent: 80
    },
    {
      key: 9,
      skill: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/skills%2FPostgresql_elephant.svg.png?alt=media&token=8aaca34e-d808-4d4a-b527-2b9464f5625f",
      percent: 70
    },
    {
      key: 10,
      skill: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/skills%2F25231.png?alt=media&token=3dbfaedf-94ac-4520-af8f-fccf18c2fcc5",
      percent: 60
    },
    {
      key: 11,
      skill: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/skills%2F919832.png?alt=media&token=26ab5c94-2ff2-4a77-8e9d-a8d87b65a80d",
      percent: 30,
    }
  ]
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="min-h-screen flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center overflow-hidden">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
        >Skills
        
        </h3>

        <h3 className="absolute top-36 uppercase tracking-[3px] text-sm"> 
        Hover over a skill for current proficiency!
        </h3>

        <div className="grid grid-cols-4 gap-5">

            
            {/* {skills.slice(0, skills.length / 2).map((skill) =>( 
                <Skill key={skill.key} skill={skill.skill} percent={skill.percent} />))}
            
            {skills.slice(skills.length / 2, skills.length).map((skill) =>( 
                <Skill key={skill.key} skill={skill.skill} percent={skill.percent} directionLeft />
            ))} */}
            {skills.map((skill, i) =>( 
                <Skill key={i} skill={skill.skill} percent={skill.percent} directionLeft={skill.key % 2} />
            ))}
            
           

        </div>
    </motion.div>
  )
}