import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0a98f7]/80">
      <Head>
        <title>Dylan Poyser</title>
        <meta name="description" content="Dylan Poyser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />

    <section id="hero" className="snap-start">
      <Hero />
    </section>

    <section id="about" className="snap-center">
      <About />
    </section>

    <section id="experience" className="snap-center">
      <Experience />
    </section>

    <section id="skills" className="snap-start">
      <Skills />
    </section>

    <section id="projects" className="snap-center">
      <Projects />
    </section>
    
    <section id="contact" className="snap-start">
      <ContactMe />
    </section>

    <Link href="#hero">
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center justify-center">
        <img
        className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0
        cursor-pointer"
         src="https://firebasestorage.googleapis.com/v0/b/dylan-poyser.appspot.com/o/pictures%2FIMG_8700.jpg?alt=media&token=e2379cab-e2b4-41ce-9cd8-ec18dedf81ad" alt="" />
      </div>
    </footer>
    </Link>
    
    </div>
  )
}
