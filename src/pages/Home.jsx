import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Target, Eye, CheckCircle, Code2, Smartphone, Zap, Shield, BarChart3, Users, MapPin, ExternalLink, Phone, Mail, Award, Sparkles, Building2 } from 'lucide-react';

/* ── Shared primitives ─────────────────────────────────── */
const Orb = ({ className }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`} />
);

const GridOverlay = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
      backgroundSize: '60px 60px',
    }}
  />
);

const SectionTitle = ({ tag, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center mb-16"
  >
    {tag && (
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
        {tag}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">{title}</h2>
    {subtitle && <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

const AnimatedText = ({ text, blueWords = [], slow = false }) => {
  const words = text.split(' ');
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false });
  
  return (
    <span ref={textRef}>
      {words.map((word, wordIndex) => {
        const isBlue = blueWords.includes(word.toLowerCase().replace(/[.,!?]/g, ''));
        return (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, charIndex) => {
              const totalIndex = words.slice(0, wordIndex).join('').length + wordIndex + charIndex;
              return (
                <motion.span
                  key={charIndex}
                  initial={{ color: '#666666' }}
                  animate={{ color: isInView ? (isBlue ? '#06b6d4' : 'white') : '#666666' }}
                  transition={{ 
                    duration: slow ? 1 : 0.4, 
                    delay: isInView ? totalIndex * (slow ? 1 : 0.1) : 0 
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              );
            })}
            {wordIndex < words.length - 1 && <span style={{ display: 'inline-block' }}>&nbsp;</span>}
          </span>
        );
      })}
    </span>
  );
};

const CountUp = ({ end, duration = 1.5, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const Home = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const stats = [
    { label: 'Target SME Clients', value: 50, suffix: '+' },
    { label: 'Large Organizations Goal', value: 10, suffix: '+' },
    { label: 'Service Excellence', value: 100, suffix: '%' },
    { label: 'International Standards', value: 'Global' },
  ];

  const services = [
    { icon: Code2,      title: 'Web Development',      description: 'Building responsive, scalable web applications with cutting-edge technologies and best practices.' },
    { icon: Smartphone, title: 'Mobile Apps',           description: 'Creating powerful native and cross-platform mobile solutions for iOS and Android.' },
    { icon: Zap,        title: 'Software Solutions',    description: 'Custom software development tailored to your specific business requirements and challenges.' },
    { icon: Shield,     title: 'IT Consulting',         description: 'Strategic technology guidance to optimize your infrastructure and drive digital transformation.' },
    { icon: BarChart3,  title: 'Business Intelligence', description: 'Data-driven insights and analytics solutions to empower informed decision-making.' },
    { icon: Users,      title: 'Team Augmentation',     description: 'Skilled developers and consultants to extend your team capabilities on demand.' },
  ];

  const whyChooseUs = [
    {
      title: 'Strategic Partnership',
      description: 'Positioning as a strategic partner that bridges the gap between technology and organizational growth.',
      details: 'We work closely with your team to understand your business goals and challenges, providing tailored IT solutions that drive growth, improve efficiency, and create lasting competitive advantages.',
    },
    {
      title: 'Innovation & Excellence',
      description: 'Skilled team committed to technical excellence, reliability, and delivering intelligent digital systems.',
      details: 'Our expert developers and engineers stay ahead of technology trends, implementing cutting-edge solutions with best practices to ensure your systems are robust, scalable, and future-proof.',
    },
    {
      title: 'Media & IT Integration',
      description: 'Unique blend of media creativity and IT technical expertise under HumanLens Media credibility.',
      details: "Leveraging our parent company's media expertise, we create digital solutions that are not only technically sound but also visually engaging and user-centric, ensuring maximum impact.",
    },
    {
      title: 'Proven Track Record',
      description: 'Delivering successful projects with measurable results and long-term client satisfaction.',
      details: 'With numerous successful deployments across various industries, we have consistently delivered projects on time and within budget, earning the trust and loyalty of our clients.',
    },
  ];

  return (
    <div>

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative min-h-[calc(100vh-80px)] lg:min-h-screen flex items-center overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-16">
        <Orb className="w-[700px] h-[700px] bg-blue-600/30 -top-60 -left-40" />
        <Orb className="w-[500px] h-[500px] bg-purple-600/25 -bottom-32 -right-32" />
        <Orb className="w-[400px] h-[400px] bg-cyan-500/20 top-24 right-1/4" />
        <GridOverlay />

        <div className="container-custom relative z-10 w-full py-4 sm:py-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column: Headline, Description & CTA */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 sm:mb-6 backdrop-blur-sm self-start"
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                HumanLens IT Solutions
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.12] mb-5 tracking-tight text-white"
              >
                Transform Your Business{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                    with Innovative
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full origin-left"
                  />
                </span>{' '}
                IT Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed"
              >
                Leading IT solutions provider delivering comprehensive digital transformation —
                from web development and mobile apps to custom software and IT consulting.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 cursor-pointer text-base"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-base"
                >
                  Get Started
                </a>
              </motion.div>
            </div>

            {/* Right Column: 4 Stat Cards in 2x2 grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-5"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-blue-500/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-center items-center text-center shadow-xl group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 flex items-center justify-center min-h-[44px]">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                      {typeof stat.value === 'number' ? (
                        <CountUp end={stat.value} suffix={stat.suffix} />
                      ) : (
                        <span>{stat.value}{stat.suffix || ''}</span>
                      )}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-300 leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/blckblue.jpg')" }}
        />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 bg-white/90 backdrop-blur-sm py-8 px-4 rounded-lg"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2 min-h-[40px] flex items-center justify-center">
                  {typeof stat.value === 'number' ? (
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>{stat.value}{stat.suffix || ''}</span>
                  )}
                </p>
                <p className="text-sm text-secondary-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          <div
            className="text-center text-white max-w-5xl mx-auto uppercase leading-tight"
            style={{
              position: 'relative',
              fontFamily: '"Instrument Sans", sans-serif',
              fontWeight: 700,
              marginBottom: 0,
              lineHeight: '1.1em',
              zIndex: 2,
              fontSize: 'clamp(32px, 6vw, 56px)',
            }}
          >
            <AnimatedText text="Experience how we combine innovation, expertise, and reliability to support your digital success." blueWords={['innovation', 'expertise', 'reliability', 'digital', 'success']} />
          </div>
        </div>
      </section>

      {/* ═══ ABOUT SECTION (HYBRID PREVIEW) ═══ */}
      <section id="about" className="relative py-24 bg-[#080e1a] overflow-hidden">
        <Orb className="w-[500px] h-[500px] bg-blue-600/30 -top-20 -left-20" />
        <Orb className="w-[400px] h-[400px] bg-purple-600/20 bottom-0 right-0" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
                About HumanLens IT
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Where Media Credibility Meets{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  Enterprise Technology
                </span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                A dedicated technology division operating under <strong className="text-white">HumanLens (Pvt) Ltd</strong> (Company Reg No: PV 00368572). We deliver responsive, context-aware, and scalable software solutions designed specifically for Sri Lankan organizations and international clients.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                By combining creative media storytelling with rigorous software engineering, we help businesses transition from fragmented tools to unified digital platforms that drive real commercial growth.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-blue-400 font-bold mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>Registered Entity</span>
                  </div>
                  <p className="text-xs text-slate-400">HumanLens (Pvt) Ltd (PV 00368572), legally compliant with professional governance.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1">
                    <Award className="w-4 h-4" />
                    <span>International Standards</span>
                  </div>
                  <p className="text-xs text-slate-400">Enterprise engineering aligned with international technical standards and best practices.</p>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5"
              >
                Read Full Company Story & Structure
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 space-y-4"
            >
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Engineering Excellence</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Modern reactive architectures (React, Node.js, Cloud Services, PostgreSQL) engineered for high speed, reliability, and security.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Media & Brand Integration</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Unique synergy with HumanLens Media ensuring your digital product is visually engaging, on-brand, and compelling to end users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Ethical & Social Commitment</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Dedicated CSR initiatives, digital literacy workshops, and discounted software services for non-profits and educational organizations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 bg-[#080e1a] overflow-hidden border-t border-white/5">
        <Orb className="w-[400px] h-[400px] bg-blue-700 top-0 left-1/4" />
        <Orb className="w-[350px] h-[350px] bg-purple-700 bottom-0 right-0" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">Our Services</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Comprehensive IT solutions designed to accelerate your business growth and digital transformation</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const gradients = ['from-blue-500 to-cyan-500','from-purple-500 to-violet-500','from-amber-500 to-orange-500','from-emerald-500 to-teal-500','from-rose-500 to-pink-500','from-cyan-500 to-blue-500'];
              const grad = gradients[idx % gradients.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:shadow-2xl transition-all duration-300 cursor-default overflow-hidden"
                >
                  <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${grad} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${grad} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              View Complete Service Details, Stack & Pricing Models
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PROJECTS SECTION (HYBRID PREVIEW) ═══ */}
      <section id="projects" className="relative py-24 bg-[#060b14] overflow-hidden border-t border-white/5">
        <Orb className="w-[500px] h-[500px] bg-cyan-700/20 top-0 right-1/4" />
        <Orb className="w-[400px] h-[400px] bg-purple-700/20 bottom-0 left-0" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
                Case Studies & Work
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                Featured Projects
              </h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Explore live solutions we have architected and deployed for active organizations.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900 border-b border-white/10">
                <img
                  src="/images/meiyalfoundation_project.png"
                  alt="Meiyal Foundation Website"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/80 text-white backdrop-blur-md">
                    NGO Platform
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  Meiyal Foundation Website
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  A modern, responsive non-profit web platform built for Meiyal Foundation, empowering plantation communities in Sri Lanka with accessible design and transparent initiative pages.
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href="https://www.meiyalfoundation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/Gihan-Lahiru/meiyalFoundation.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900 border-b border-white/10">
                <img
                  src="/images/tuition_project.png"
                  alt="Tuition Platform"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/80 text-white backdrop-blur-md">
                    EdTech Platform
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  Tuition Management System
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  Full-stack educational platform for teachers, students, and administration featuring student dashboards, online lesson resources, assignment grading, and fee payment management.
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href="https://www.learnwithmaleesha.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/Gihan-Lahiru/tutionproject.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Vision & Mission Section */}
      <section className="py-12 bg-white border-y border-secondary-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center pointer-events-none" style={{ top: '25%' }}>
          <div className="animate-slide-text flex gap-16">
            <p className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-secondary-900 opacity-20 whitespace-nowrap">VISION & MISSION</p>
            <p className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-secondary-900 opacity-20 whitespace-nowrap">VISION & MISSION</p>
            <p className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-secondary-900 opacity-20 whitespace-nowrap">VISION & MISSION</p>
          </div>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-text bg-[length:200%_200%] mb-2">Our Vision & Mission</h2>
            <p className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-text bg-[length:200%_200%]">Guiding principles that drive our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center mb-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mr-4"
                  initial={{ scale: 1, background: "linear-gradient(to bottom right, #3b82f6, #1d4ed8)" }}
                  whileInView={{ scale: [1, 1.1, 1], background: ["linear-gradient(to bottom right, #3b82f6, #1d4ed8)","linear-gradient(to bottom right, #8b5cf6, #ec4899)","linear-gradient(to bottom right, #3b82f6, #1d4ed8)"] }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                  style={{ perspective: 1000 }}
                >
                  <motion.div initial={{ rotateY: 0 }} whileInView={{ rotateY: 360 }} viewport={{ once: false }} transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }} style={{ transformStyle: "preserve-3d" }}>
                    <Eye className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
                <h3 className="text-2xl font-bold text-blue-600">Our Vision</h3>
              </div>
              <p className="text-black leading-relaxed font-bold">
                To become one of Sri Lanka's most trusted and innovative IT solution providers, delivering technology that empowers businesses and strengthens digital ecosystems nationally and internationally.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center mb-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mr-4"
                  initial={{ scale: 1, background: "linear-gradient(to bottom right, #3b82f6, #1d4ed8)" }}
                  whileInView={{ scale: [1, 1.1, 1], background: ["linear-gradient(to bottom right, #3b82f6, #1d4ed8)","linear-gradient(to bottom right, #8b5cf6, #ec4899)","linear-gradient(to bottom right, #3b82f6, #1d4ed8)"] }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                  style={{ perspective: 1000 }}
                >
                  <motion.div initial={{ rotateY: 0 }} whileInView={{ rotateY: 360 }} viewport={{ once: false }} transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }} style={{ transformStyle: "preserve-3d" }}>
                    <Target className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
                <h3 className="text-2xl font-bold text-blue-600">Our Mission</h3>
              </div>
              <p className="text-black leading-relaxed font-bold">
                To design, develop, and maintain intelligent digital systems and solutions through a skilled team committed to technical excellence, reliability, and client satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="relative py-20 overflow-hidden bg-[#080e1a]">
        <Orb className="w-[500px] h-[500px] bg-purple-700 -top-20 right-0" />
        <Orb className="w-[400px] h-[400px] bg-emerald-700 bottom-0 left-0" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 flex flex-col items-start">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 flex gap-4 items-center">
                <span className="flex flex-col leading-none items-center font-bold">
                  <motion.span initial={{ color: '#ffffff' }} whileInView={{ color: '#06b6d4' }} viewport={{ once: false }} transition={{ duration: 1, delay: 0 }} className="font-bold">W</motion.span>
                  <motion.span initial={{ color: '#ffffff' }} whileInView={{ color: '#06b6d4' }} viewport={{ once: false }} transition={{ duration: 1, delay: 1 }} className="font-bold">H</motion.span>
                  <motion.span initial={{ color: '#ffffff' }} whileInView={{ color: '#06b6d4' }} viewport={{ once: false }} transition={{ duration: 1, delay: 2 }} className="font-bold">Y</motion.span>
                </span>
                <span className="flex flex-col gap-2 font-bold">
                  <AnimatedText text="CHOOSE" blueWords={['choose']} slow={true} />
                  <AnimatedText text="US" blueWords={['us']} slow={true} />
                </span>
              </div>
              <div className="text-lg text-white/90 font-bold">
                <AnimatedText text="WHAT SETS US APART IN THE COMPETITIVE IT SOLUTIONS LANDSCAPE" blueWords={['why', 'choose', 'us']} slow={false} />
              </div>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, idx) => (
                <div
                  key={idx}
                  className="relative h-72 md:h-64 cursor-pointer"
                  style={{ perspective: '1000px' }}
                  onMouseEnter={() => setFlippedCards(prev => ({ ...prev, [idx]: true }))}
                  onMouseLeave={() => setFlippedCards(prev => ({ ...prev, [idx]: false }))}
                  onClick={() => setFlippedCards(prev => ({ ...prev, [idx]: !prev[idx] }))}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    animate={{ rotateY: flippedCards[idx] ? 180 : 0 }}
                    style={{ transformStyle: 'preserve-3d', transition: 'transform 0.5s' }}
                    className="relative w-full h-full"
                  >
                    {/* Front */}
                    <div
                      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                      className="absolute inset-0 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col"
                    >
                      <CheckCircle className="w-10 h-10 text-blue-400 mb-4" />
                      <h3 className="text-sm font-bold text-white mb-2">{reason.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">{reason.description}</p>
                      <p className="text-blue-400 text-xs mt-auto pt-4">Hover to learn more →</p>
                    </div>
                    {/* Back */}
                    <div
                      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                      className="absolute inset-0 p-6 rounded-2xl border border-blue-500/40 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm flex flex-col justify-center"
                    >
                      <h3 className="text-sm font-bold text-white mb-3">{reason.title}</h3>
                      <p className="text-slate-300 text-xs leading-relaxed">{reason.details}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-24 overflow-hidden bg-black">
        {/* Square grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <Orb className="w-[500px] h-[500px] bg-blue-800 top-0 left-1/2 -translate-x-1/2" />
        <Orb className="w-[300px] h-[300px] bg-purple-900 bottom-0 left-0" />
        <Orb className="w-[300px] h-[300px] bg-cyan-900 bottom-0 right-0" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">What Our Clients Say</h2>
            <p className="text-slate-400 text-lg">Don't just take our word for it — hear from businesses we've helped transform</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Mr. Maleesha Udantha", role: "Tuition Project", comment: "The educational platform HumanLens developed for our tuition center has completely transformed how we interact with students. It's user-friendly, reliable, and exactly what we needed to scale our classes.", rating: 5, image: "https://ui-avatars.com/api/?name=Maleesha+Udantha&background=0D8ABC&color=fff" },
              { name: "Mrs. Saraswathi", role: "Meiyal Foundation", comment: "Working with HumanLens on the Meiyal Foundation project was a wonderful experience. They perfectly understood our vision for a non-profit website and delivered a beautiful, responsive platform that helps us reach more people.", rating: 5, image: "https://ui-avatars.com/api/?name=Saraswathi&background=0D8ABC&color=fff" }
            ].map((testimonial, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} whileHover={{ y: -6 }} className="group relative p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-white/10 mr-4 object-cover" />
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-slate-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed italic group-hover:text-slate-300 transition-colors">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT SECTION (HYBRID PREVIEW) ═══ */}
      <section id="contact" className="relative py-24 bg-[#080e1a] overflow-hidden border-t border-white/5">
        <Orb className="w-[500px] h-[500px] bg-blue-600/20 top-0 left-1/4" />
        <Orb className="w-[400px] h-[400px] bg-purple-600/20 bottom-0 right-1/4" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Ready to Transform Your Digital Infrastructure?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Consult directly with our engineering team for customized software, web apps, or digital advisory.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {/* Card 1: Phone & WhatsApp */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Phone & WhatsApp</h3>
              <p className="text-slate-400 text-sm mb-4">Direct consultation line</p>
              <p className="text-white font-semibold text-sm">077 651 7595</p>
              <p className="text-slate-400 text-xs mb-4">071 442 8393</p>
              <a
                href="https://api.whatsapp.com/send?phone=94776517595&text=Hello%20HumanLens%20IT%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                Chat on WhatsApp →
              </a>
            </div>

            {/* Card 2: Email */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email Address</h3>
              <p className="text-slate-400 text-sm mb-4">General inquiries & proposals</p>
              <p className="text-white font-semibold text-sm break-all mb-4">humanlens.contact@gmail.com</p>
              <a
                href="mailto:humanlens.contact@gmail.com"
                className="mt-auto px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
              >
                Send Email →
              </a>
            </div>

            {/* Card 3: Office */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Office Location</h3>
              <p className="text-slate-400 text-sm mb-4">Southern Province, Sri Lanka</p>
              <p className="text-white font-semibold text-sm mb-1">3637+W8P, Eliot Rd</p>
              <p className="text-slate-400 text-xs mb-4">Galle 80000, Sri Lanka</p>
              <a
                href="https://maps.app.goo.gl/iqRbmY7BiWYnPZuHA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
              >
                View on Google Maps →
              </a>
            </div>
          </div>

          {/* Banner to Full Contact Page */}
          <div className="text-center p-8 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 backdrop-blur-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-xl font-bold text-white mb-1">Need a custom quote or project scope?</h4>
              <p className="text-slate-400 text-sm">Fill out our structured project consultation form with your exact requirements.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Open Full Project Consultation Form
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
