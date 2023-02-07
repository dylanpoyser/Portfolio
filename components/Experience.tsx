import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

// TO DO: Experiences should display the tech used

export default function Experience({}: Props) {
  const experiences = [
    {
logo: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/yerht43w.jpg?alt=media&token=66bf4b63-9d03-40e3-9b45-6492f6557bf6",
title: "Full-Stack Developer",
company: "OneOrigin",
start: "January 2022",
end: "March 2022",
description:[
  "Developed and launched the front-end for Arizona State University's Dreamscape Learn platform, serving over 74,000+ students.",
  "Built responsive and user-friendly interfaces using Bootstrap and VueJS, adhering to strict design specifications from the client.",
  "Ensured accessibility compliance through the integration of WAI-ARIA HTML attributes in the code.",
  "Conducted UX/UI evaluations to streamline project timelines and improve overall user experience.",
  "Successfully integrated the front-end components with back-end SQL databases using RESTful APIs.",
]
    },
    {
    logo: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/download.png?alt=media&token=794d22b6-37a2-4a5a-ad07-2f85e7091e28",
    title: "Engineer-in-Training",
    company: "Fullstack Academy",
    start: "February 2021",
    end: "June 2021",
    description:[
    "Completed a selective, full-time software development program with a rigorous curriculum, where only ~10% of applicants were accepted.",
    "Acquired hands-on experience with Agile methodologies, pair programming, and project management.",
    "Immersed in a high-pressure, collaborative environment for 4 months, logging 600+ hours of programming in technologies including Javascript, React, SQL, and others.",
    "Demonstrated a strong understanding of software development concepts and methodologies, including AGILE development, pair programming, and project management.",
    ]
    },
    {
logo: "https://firebasestorage.googleapis.com/v0/b/new-portfolio-47b2d.appspot.com/o/app-icon.webp?alt=media&token=be74ca43-1e35-482e-a77f-0787efe12ec6",
title: "Front End Operations",
company: "Costco Wholesale",
start: "May 2012",
end: "January 2021",
description:[
  "Consistently received recognition for exceptional customer service through Employee of the Month awards or positive customer feedback.",
  "Actively contributed to the onboarding and training of new hires, demonstrating a strong understanding of operational procedures and an ability to effectively communicate these to others.",
  "Demonstrated versatility by working across multiple departments, including food preparation, point-of-sale operation, lot security, and inventory verification.",
  "Exceeded customer expectations by consistently providing friendly, efficient service and effectively resolving customer inquiries and complaints.",
]
    },
  ]
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Experience
        </h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0a98f7]/80">
            {experiences.map((experience, i) => (<ExperienceCard key={i} logo={experience.logo} title={experience.title}
            company={experience.company} start={experience.start} end={experience.end} description={experience.description} />))}

        </div>
    </motion.div>
  )
}