import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Target, Eye, CheckCircle, Code2, Smartphone, Zap, Shield, BarChart3, Users, MapPin } from 'lucide-react';

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
    { label: 'Local Expertise', value: '🇱🇰', isEmoji: true },
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
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
        <Orb className="w-[700px] h-[700px] bg-blue-600 -top-60 -left-40" />
        <Orb className="w-[500px] h-[500px] bg-purple-600 -bottom-32 -right-32" />
        <Orb className="w-[350px] h-[350px] bg-cyan-500 top-24 right-1/3" />
        <GridOverlay />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4" />
            HumanLens IT Solutions
          </motion.div>

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
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
              className="text-xl text-slate-400 max-w-2xl mb-10"
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
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap gap-6 mt-14"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="text-center px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {stat.isEmoji ? stat.emoji : <CountUp end={stat.value} suffix={stat.suffix} />}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
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
                <p className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                  {stat.isEmoji ? stat.value : <CountUp end={stat.value} suffix={stat.suffix} />}
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

      {/* Services Section */}
      <section className="relative py-24 bg-[#080e1a] overflow-hidden">
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
      <section className="relative py-20 overflow-hidden bg-[#080e1a]">
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
      <section className="relative py-24 overflow-hidden bg-black">
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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mr. Maleesha Udantha", role: "Tuition Project", comment: "The educational platform HumanLens developed for our tuition center has completely transformed how we interact with students. It's user-friendly, reliable, and exactly what we needed to scale our classes.", rating: 5, image: "https://ui-avatars.com/api/?name=Maleesha+Udantha&background=0D8ABC&color=fff" },
              { name: "Mrs. Saraswathi", role: "Meiyal Foundation", comment: "Working with HumanLens on the Meiyal Foundation project was a wonderful experience. They perfectly understood our vision for a non-profit website and delivered a beautiful, responsive platform that helps us reach more people.", rating: 5, image: "https://ui-avatars.com/api/?name=Saraswathi&background=0D8ABC&color=fff" },
              { name: "Kamal Perera", role: "Garage Project", comment: "The custom website and system they built for my garage has streamlined our daily operations. Everything is now so much more professional and efficient. Highly recommended!", rating: 5, image: "https://ui-avatars.com/api/?name=Kamal+Perera&background=0D8ABC&color=fff" }
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
    </div>
  );
};

export default Home;
