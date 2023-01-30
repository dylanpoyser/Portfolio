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
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Frog_on_palm_frond.jpg/1200px-Frog_on_palm_frond.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                A <span className="underline decoration-[#0a98f7]/50">little</span> about me:
            </h4>
            <p className="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ea sapiente veniam id beatae, provident asperiores laboriosam a iure laudantium, delectus aliquid modi enim excepturi numquam? Optio officiis aut quidem!
            </p>
        </div>

    </motion.div>
  )
}