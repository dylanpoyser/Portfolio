import React from 'react'
import { motion } from 'framer-motion'

type Props =     {
    logo: string,
    title: string,
    company: string,
    start: string,
    end: string,
    description: Array<string>
        }

export default function ExperienceCard({logo, title, company, start, end, description }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
     <motion.img 
     initial={{ 
        y:-100, 
        opacity: 0, 
    }}
    transition={{ duration: 1.2 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} 
     className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
     src={logo} alt="logo" 
     />

     <div className="px-0 md:px-10"> 
        <h4 className="text-4xl font-light">
            {title}
        </h4>
        <p className="font-bold text-2xl mt-1">
            {company}
        </p>
        {/* <div className="flex space-x-2 my-2">
            <img className="h-10 w-10 rounded-full" 
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            />
            <img className="h-10 w-10 rounded-full" 
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            />
            <img className="h-10 w-10 rounded-full" 
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            />
        </div> */}
        <p className="uppercase py-5 text-gray-300">
            {start} - {end}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-md h-80 overflow-y-scroll pr-4
        scrollbar-thin scrollbar-track-black/40 scrollbar-thumb-[#0a98f7]/80">
            {description.map((desc, desci) => <li key={desci}>{desc}</li>)}
            </ul>
     </div>  
    </article>
  )
}