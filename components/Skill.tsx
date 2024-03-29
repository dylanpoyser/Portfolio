import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    directionLeft?: number,
    skill: string,
    percent: number,
}

export default function Skill({ directionLeft, skill, percent }: Props) {
  return (
    <div
    
        className="group relative flex cursor-pointer">
        <motion.img
        initial={{
            y: directionLeft ? 200 : -200,
            opacity: 0
        }} 
        transition={{ duration: .7 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{once: true}}
        src={skill}
        className="rounded-full border border-gray-500 object-contain w-24 h-24 md:h-28 md:w-28 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">
                    {percent}%
                </p>
            </div>
        </div>

    </div>
  )
}