import Hero from '../components/sections/Hero'; // Top-of-page intro section with animated background and CTA
import About from '../components/sections/About'; // About Me section with MDX and timeline
import Experience from '../components/sections/Experience';

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

      {/* 
        SECTION PLACEHOLDERS 
        - These represent the high-level structure of the site
        - Each will be built as a separate feature branch (e.g., feat/about, feat/projects)
        - Using min-height ensures we can design full-screen scrollable panels later
      */}


      {/* Projects Section: Will contain dynamic cards with hover interactions and modals */}
      <section id="projects" className="min-h-[80vh]" />

      {/* Contact Section: Final CTA for reaching out, includes form + reCAPTCHA + email API */}
      <section id="contact" className="min-h-[80vh]" />
    </>
  );
}
