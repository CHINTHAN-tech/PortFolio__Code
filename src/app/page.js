import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black items-center justify-between p-24">
     <HeroSection/>
     <Navbar/>
     <AboutSection/>
     <ProjectsSection/>
     <EmailSection/>
    </main>
  )
}
