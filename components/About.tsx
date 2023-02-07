import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }} 
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>

        <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.5
        }}
        whileInView={{ 
            x:0,
            opacity: 1
        }}
        src="https://firebasestorage.googleapis.com/v0/b/dylan-poyser.appspot.com/o/31252984_10156531056388901_2104018888202125312_n.jpg?alt=media&token=58cf5f91-060c-4f0e-a872-17b434589c0c"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                A <span className="underline decoration-[#0a98f7]/50">little</span> about me:
            </h4>
            <p className="text-base justify-evenly">
            Hi, I'm Dylan! A software engineer driven by the goal of creating positive change in the world through technology. With my diverse background in photography, art, and writing, as well as years of customer service, 
            I bring a unique perspective to my work in software engineering.  I believe it's truly a field where every bit of knowledge can improve your work. 
            I'm always eager to learn and grow, and am seeking opportunities to work alongside experienced developers and make meaningful contributions to innovative projects.
            </p>
        </div>

    </motion.div>
  )
}