import Hero from '../components/sections/Hero'; // Top-of-page intro section with animated background and CTA
import About from '../components/sections/About'; // About Me section with MDX and timeline
import Experience from '../components/sections/Experience';
import Projects from '@/components/sections/Projects'; 
import Skills from '@/components/sections/Skills';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  console.log('Hero default export typeof =', typeof Hero);
  return (
    <>
      {/* 
        HERO SECTION 
        - Purpose: Capture immediate attention with a strong intro
        - Includes: Your name, title, animated background, CTA scroll link
        - Status: Fully styled and animated using Tailwind + Framer Motion
      */}
      <Hero />

      {/* 
        ABOUT SECTION 
        - Renders prose from content/about.mdx
        - Includes dynamic CareerTimeline showing key milestones
      */}
      <About />

      {/* EXPERIENCE SECTION */}
      <Experience />

      {/* PROJECTS */}
      <Projects />   

      <Skills /> 

      <Testimonials /> 
      
    </>
  );
}
