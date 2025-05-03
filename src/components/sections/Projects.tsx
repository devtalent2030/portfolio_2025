'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  tech: string[];
  image: string;
  repo: string;
};

const projects: ProjectMeta[] = [
  {
    slug: 'securiscan',
    title: 'SecuriScan – Vulnerability Scanner',
    shortDescription: 'Modular cybersecurity scanner showing live OWASP‑10 results.',
    description:
      'Built a full-stack cybersecurity scanner with live OWASP‑10 results, real-time visuals, and modular scanner plugins.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: '/images/projects/securiscan.jpg',
    repo: 'https://github.com/your-username/securiscan',
  },
  {
    slug: 'unity-ai',
    title: 'Unity Local LLM Voice Agent',
    shortDescription: 'Voice-to-AI agent in Unity using Meta XR SDK and LLaMA backend.',
    description:
      'Built a fully immersive AI-powered NPC interaction in Unity. Voice input is captured using Meta Dictation, sent to a locally hosted LLaMA model via FastAPI, and spoken aloud via Meta Text‑to‑Speech. Compatible with modern VR headsets.',
    tech: ['Unity', 'C#', 'FastAPI', 'LLaMA (local)', 'Meta XR Voice SDK'],
    image: '/images/projects/unity-ai.jpg',
    repo: 'https://github.com/your-username/unity-gpt4-npc',
  },
  {
    slug: 'wellness-app',
    title: 'Mental Wellness Companion',
    shortDescription: 'A daily wellness app for mood tracking & mindfulness.',
    description:
      'Flutter app for daily mental health tracking, mindfulness exercises, and personalized recommendations.',
    tech: ['Flutter', 'Dart', 'Material Design'],
    image: '/images/projects/wellness.jpg',
    repo: 'https://github.com/your-username/mental-wellness-companion',
  },
  {
    slug: 'mainframe-suite',
    title: 'Mainframe Management Suite',
    shortDescription: 'Legacy COBOL tools for HR and student records.',
    description:
      'COBOL-based suite for salary reporting, call-center analytics, and student info maintenance.',
    tech: ['COBOL', 'JCL', 'CICS'],
    image: '/images/projects/mainframe.jpg',
    repo: 'https://github.com/your-username/mainframe-suite',
  },
  {
    slug: 'ai-recruiter',
    title: 'AI-Powered Resume Screener',
    shortDescription: 'LLM-powered tool to match resumes with jobs.',
    description:
      'Built with LLMs to auto-screen applicant resumes and match roles based on embeddings and semantic search.',
    tech: ['LangChain', 'OpenAI', 'Pinecone', 'Next.js'],
    image: '/images/projects/resume-ai.jpg',
    repo: 'https://github.com/your-username/ai-resume-screener',
  },
  {
    slug: 'devops-dashboard',
    title: 'Realtime DevOps Dashboard',
    shortDescription: 'DevOps visualizer with Prometheus metrics and live logs.',
    description:
      'Full-stack dashboard with WebSocket monitoring, Prometheus metrics, and Grafana-like custom themes.',
    tech: ['React', 'WebSockets', 'Docker', 'Grafana'],
    image: '/images/projects/devops.jpg',
    repo: 'https://github.com/your-username/devops-dashboard',
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState<ProjectMeta | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-32">
      <h2 className="mb-12 text-3xl font-bold text-surge">Featured Projects</h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <motion.div
            key={p.slug}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <ProjectCard
              title={p.title}
              description={p.shortDescription}
              tech={p.tech}
              image={p.image}
              repo={p.repo}
              onClick={() => setOpenProject(p)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Optional Modal */}
      {openProject && (
        <div className="fixed inset-0 z-50 bg-black/80 p-8 text-white">
          <button
            onClick={() => setOpenProject(null)}
            className="mb-4 text-sm text-surge hover:underline"
          >
            Close
          </button>
          <h3 className="text-2xl font-bold">{openProject.title}</h3>
          <p className="mt-2">{openProject.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {openProject.tech.map((tech) => (
              <li
                key={tech}
                className="rounded bg-indigo/20 px-2 py-1 text-xs text-indigo"
              >
                {tech}
              </li>
            ))}
          </ul>
          <a
            href={openProject.repo}
            target="_blank"
            className="mt-6 inline-block text-surge hover:underline"
          >
            View GitHub Repo ↗
          </a>
        </div>
      )}
    </section>
  );
}
