import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '@/components/sections/Projects'; 
import Skills from '@/components/sections/Skills';
import Testimonials from '@/components/sections/Testimonials';
import BlogPreview from '@/components/sections/BlogPreviewServer';
import Contact from '@/components/sections/Contact';

import Reveal from '@/components/ui/Reveal'; // ✅ Make sure this import is present

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal delay={0.1}>
        <About />
      </Reveal>

      <Reveal delay={0.2}>
        <Experience />
      </Reveal>

      <Reveal delay={0.3}>
        <Projects />
      </Reveal>

      <Reveal delay={0.4}>
        <Skills />
      </Reveal>

      <Reveal delay={0.5}>
        <BlogPreview />
      </Reveal>

      <Reveal delay={0.6}>
        <Testimonials />
      </Reveal>

      <Reveal delay={0.7}>
        <Contact />
      </Reveal>
    </>
  );
}
