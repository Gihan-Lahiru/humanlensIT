import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Meiyal Foundation Website',
    category: 'NGO Website',
    description: 'A modern, responsive NGO website built for Meiyal Foundation, empowering women and children in plantation communities of Sri Lanka.',
    results: [
      'Clean, elegant, community-focused UI',
      'Mobile-first responsive design',
      'Built with React and Tailwind CSS',
      'Material UI components',
      'Fast performance with smooth animations',
      'Web accessibility best practices',
      'Pages: Home, About, Programs, Membership, Leadership',
    ],
    color: 'from-emerald-500 to-teal-500',
    image: '/images/meiyalfoundation_project.png',
    liveUrl: 'https://www.meiyalfoundation.org/',
    repoUrl: 'https://github.com/Gihan-Lahiru/meiyalFoundation.git',
  },
  {
    title: 'Tuition Platform',
    category: 'Education Platform',
    description: 'A full-featured tuition management platform for teachers, students and admins with class management, assignments, video lessons and payments.',
    results: [
      'Create and manage classes with announcements and assignments',
      'Grade submissions and upload notes, past papers and video lessons',
      'Track student payments and view analytics dashboard',
      'Students can enroll, submit assignments and download study materials',
      'Online payment system with payment history for students',
      'Student dashboard with upcoming deadlines at a glance',
      'Admin panel to manage all users, classes and payment reports',
      'Frontend: React, Context API, React Router, Tailwind, Axios',
      'Backend: Node.js, Express (MVC), PostgreSQL, JWT, Multer',
      'Security: Helmet, CORS, Rate Limiting and Bcrypt',
    ],
    color: 'from-purple-500 to-violet-500',
    image: '/images/tuition_project.png',
    liveUrl: 'https://www.learnwithmaleesha.com/',
    repoUrl: 'https://github.com/Gihan-Lahiru/tutionproject.git',
  },
  {
    title: 'RoutePro Tourism Platform',
    category: 'Tourism Website',
    description: 'A full-stack tourism platform providing listings, bookings, and itinerary planning for travel operators and tourists.',
    results: [
      'Responsive, attractive UI for travelers',
      'Booking system with availability calendar',
      'Backend admin dashboard to manage bookings and listings',
      'Google Maps integration for locations and routes',
      'Payment gateway integration (Stripe/PayPal)',
      'User accounts, booking history, and notifications',
      'REST API backend (Node.js/Express) with PostgreSQL',
      'SEO friendly pages and analytics tracking',
    ],
    color: 'from-amber-500 to-rose-500',
    image: '/images/routepro_project.png',
  },
  {
    title: 'Garage Service Management System',
    category: 'Business Management',
    description: 'A comprehensive garage management platform for handling service bookings, inventory, invoicing and customer management.',
    results: [
      'Backend: Django, Django REST Framework, MySQL, JWT Authentication',
      'Frontend: React, Node.js/npm, responsive UI',
      'Service booking and scheduling system',
      'Customer management and profiles',
      'Inventory tracking for parts and supplies',
      'Invoice generation and payment tracking',
      'Staff management and role-based access',
      'Service history and analytics dashboard',
    ],
    color: 'from-slate-500 to-gray-600',
    image: '/images/garadge_project.png',
    repoUrl: 'https://github.com/Jeyamathura/Garage_Service_Management_System.git',
  },
];

const Orb = ({ className }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`} />
);

const Projects = () => {
  const liveCount = projects.filter((p) => p.liveUrl).length;
  const repoCount = projects.filter((p) => p.repoUrl).length;

  return (
    <div className="bg-[#080e1a] text-white overflow-hidden min-h-screen">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden pt-28 pb-16">
        <Orb className="w-[600px] h-[600px] bg-blue-600 -top-40 -left-40" />
        <Orb className="w-[400px] h-[400px] bg-purple-600 -bottom-20 -right-20" />
        <Orb className="w-[300px] h-[300px] bg-cyan-500 top-20 right-1/3" />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4" />
            Selected Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            Projects{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                We Have Done
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-xl text-slate-400 max-w-2xl"
          >
            A curated showcase of websites, portals, and business tools we have delivered for real clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-6 mt-10"
          >
            {[
              { val: String(projects.length), label: 'Projects' },
              { val: String(liveCount), label: 'Live' },
              { val: String(repoCount), label: 'Open Source' },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="text-center px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {s.val}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ PROJECT CARDS ═══ */}
      <section className="relative py-16 pb-32">
        <Orb className="w-[400px] h-[400px] bg-cyan-700 top-0 right-0" />
        <Orb className="w-[400px] h-[400px] bg-emerald-700 bottom-0 left-0" />

        <div className="container-custom relative z-10">
          <div className="grid gap-6 grid-cols-1">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-white/20 flex flex-row"
              >
                <div className="w-2/3 h-96 overflow-hidden flex-shrink-0 bg-gray-900 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className={`h-full w-full bg-gradient-to-br ${project.color}`} />
                  )}
                </div>

                <div className="w-1/3 p-6 h-96 flex flex-col overflow-y-auto">
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-2">{project.category}</p>
                  <h2 className="text-2xl font-bold mb-4 text-white">{project.title}</h2>
                  <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>

                  <div className="space-y-3 mb-6">
                    {project.results.map((result) => (
                      <div key={result} className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-emerald-400 font-semibold transition-colors duration-300 hover:text-emerald-300"
                      >
                        Live Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 font-semibold transition-colors duration-300 hover:text-blue-300"
                      >
                        GitHub Repo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;