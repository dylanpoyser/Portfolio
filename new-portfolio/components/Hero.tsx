import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}
// TO DO: Card behind name.

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
        "Hi!  I'm Dylan!",
        "Photographer",
        "Actor",
        "Explorer",
        "Artist",
        "Lifelong Learner"
    ],
    loop: false,
    delaySpeed: 2000,
  });
    return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
    <BackgroundCircles />
    <img 
    className="relative rounded-full h-32 w-32 mx-auto object-cover"
    src="https://firebasestorage.googleapis.com/v0/b/dylan-poyser.appspot.com/o/pictures%2FIMG_8700.jpg?alt=media&token=e2379cab-e2b4-41ce-9cd8-ec18dedf81ad"
    alt="Me"
    />
    <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#0a98f7" />
        </h1>

        <div className="pt-5">
            <Link href="#about">
            <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
            <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
            <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
            <button className="heroButton">Projects</button>
            </Link>
        </div>
    </div>
    
    </div>
  )
}