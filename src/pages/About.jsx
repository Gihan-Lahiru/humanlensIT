import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, Lightbulb, Shield, Target, TrendingUp, Award, Zap, Building2, CheckCircle } from 'lucide-react';

const Orb = ({ className }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`} />
);

const About = () => {
  const businessRationale = [
    {
      title: 'Market Gap & Opportunity',
      description:
        'With the increasing integration of technology in every aspect of business, the demand for locally managed, high-quality IT services is expanding rapidly in Sri Lanka. Many companies still struggle with fragmented vendor support, delayed delivery cycles, and tools that do not align with local operational realities. Our IT Solutions Division addresses this gap by delivering responsive, context-aware, and scalable digital solutions that combine international standards with local market understanding, giving organizations a dependable long-term technology partner.',
      highlights: ['locally managed', 'high-quality IT services', 'responsive, context-aware, and scalable', 'international standards', 'dependable long-term technology partner'],
      icon: Target,
    },
    {
      title: 'Strategic Positioning',
      description:
        'The establishment of this business provides digital branding, web presence solutions, and custom-built applications that improve productivity and client engagement. By positioning ourselves at the intersection of creative communication and engineering execution, we help businesses modernize faster, reduce digital friction, and strengthen their competitive edge. Our approach supports organizations from early digital adoption stages to enterprise-level transformation initiatives through structured planning and measurable implementation outcomes.',
      highlights: ['digital branding', 'custom-built applications', 'creative communication and engineering execution', 'competitive edge', 'measurable implementation'],
      icon: TrendingUp,
    },
    {
      title: 'Credibility & Expertise',
      description:
        'Backed by the credibility of HumanLens, our unit combines the creativity of media professionals with technical expertise across software engineering, UX, and digital infrastructure. This multidisciplinary strength allows us to build solutions that are functionally robust, visually effective, and aligned with strategic brand communication. Clients benefit from one coordinated team that understands both how systems perform and how they are experienced by end users, resulting in solutions that are practical, polished, and business-ready.',
      highlights: ['credibility of HumanLens', 'technical expertise', 'software engineering, UX, and digital infrastructure', 'functionally robust', 'practical, polished, and business-ready'],
      icon: Award,
    },
    {
      title: 'Client-Centric Approach',
      description:
        "We believe in building lasting relationships with our clients by aligning every project with their real business priorities, not just technical checklists. Our approach starts with discovery, moves through collaborative planning, and continues with transparent implementation and post-launch support. By understanding each client's operational model, growth goals, and user expectations, we design solutions that create measurable outcomes, stronger customer experiences, and sustainable long-term value.",
      highlights: ['lasting relationships', 'real business priorities', 'discovery', 'collaborative planning', 'transparent implementation', 'post-launch support', 'measurable outcomes', 'stronger customer experiences', 'sustainable long-term value'],
      icon: Users,
    },
  ];

  const objectives = [
    {
      title: 'End-to-end HumanLens IT solutions',
      description: 'Deliver end-to-end IT and digital solutions tailored to client needs',
      icon: Zap,
    },
    {
      title: 'Strategic Partnerships',
      description: 'Establish long-term service contracts with at least 50 SMEs and 10 large organizations',
      icon: Users,
    },
    {
      title: 'Strong Brand Identity',
      description: 'Build a strong digital brand identity under HumanLens Media Pvt Ltd',
      icon: Award,
    },
    {
      title: 'Talent Development',
      description: 'Develop local IT talent through knowledge-sharing and practical projects',
      icon: Lightbulb,
    },
    {
      title: 'Sustainable Growth',
      description: 'Generate a sustainable profit margin while maintaining service quality and ethics',
      icon: TrendingUp,
    },
    {
      title: 'Strategic Bridge',
      description: 'Position as a strategic partner bridging technology and organizational growth',
      icon: BookOpen,
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality in every project',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&h=400&fit=crop',
    },
    {
      title: 'Collaboration',
      description: 'Working together with clients to achieve shared success',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
    },
    {
      title: 'Innovation',
      description: 'Embracing new technologies and creative solutions',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop',
    },
    {
      title: 'Integrity',
      description: 'Maintaining transparency and ethical standards in all dealings',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop',
    },
    {
      title: 'Accountability',
      description: 'Taking ownership, honoring commitments, and making responsible decisions.',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
    },
  ];

  const teamStructure = [
    {
      role: 'Managing Director',
      positions: ['Mr. Gihan lahiru / Mohamed Nasreen'],
      icon: Building2,
    },
    {
      role: 'Head – HumanLens IT solutions',
      positions: ['Mr. Gihan lahiru'],
      icon: Target,
    },
    {
      role: 'Development Unit',
      positions: ['Developers', 'UI/UX Designers', 'Frontend & Backend Engineers'],
      icon: Users,
    },
    {
      role: 'Consulting Unit',
      positions: ['Business Analysts', 'Client Engagement Specialists', 'IT Consultants'],
      icon: TrendingUp,
    },
    {
      role: 'Support & Training',
      positions: ['Technical Support Specialists', 'System Administrators', 'Corporate Trainers'],
      icon: Award,
    },
  ];

  const [activeRationaleIndex, setActiveRationaleIndex] = useState(0);
  const [hoveredRationaleIndex, setHoveredRationaleIndex] = useState(null);
  const [rationaleTypingCycle, setRationaleTypingCycle] = useState(0);

  const objectivesTitleText = 'Our Objectives';
  const objectivesSubtitleText = 'Clear goals that guide our business strategy and operations';
  const [typedObjectivesTitle, setTypedObjectivesTitle] = useState('');
  const [typedObjectivesSubtitle, setTypedObjectivesSubtitle] = useState('');
  const objectivesTypingRef = useRef(null);

  useEffect(() => {
    const updateTypingFromScroll = () => {
      if (!objectivesTypingRef.current) return;

      const rect = objectivesTypingRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startPoint = viewportHeight * 0.85;
      const endPoint = viewportHeight * 0.25;
      const rawProgress = (startPoint - rect.top) / (startPoint - endPoint);
      const progress = Math.max(0, Math.min(1, rawProgress));

      const titleChars = Math.floor(progress * objectivesTitleText.length);
      const subtitleProgress = Math.max(0, Math.min(1, (progress - 0.2) / 0.8));
      const subtitleChars = Math.floor(subtitleProgress * objectivesSubtitleText.length);

      setTypedObjectivesTitle(objectivesTitleText.slice(0, titleChars));
      setTypedObjectivesSubtitle(objectivesSubtitleText.slice(0, subtitleChars));
    };

    updateTypingFromScroll();
    window.addEventListener('scroll', updateTypingFromScroll, { passive: true });
    window.addEventListener('resize', updateTypingFromScroll);

    return () => {
      window.removeEventListener('scroll', updateTypingFromScroll);
      window.removeEventListener('resize', updateTypingFromScroll);
    };
  }, []);

  const highlightText = (text, keywords = []) => {
    if (!keywords.length) return text;

    const escapedKeywords = keywords.map((keyword) =>
      keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );

    const regex = new RegExp(`(${escapedKeywords.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const isMatch = keywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase());

      return isMatch ? (
        <span
          key={`${part}-${index}`}
          className="font-semibold text-primary-700"
        >
          {part}
        </span>
      ) : (
        <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
      );
    });
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative text-white py-16 min-h-[340px] md:min-h-[380px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2, 6, 23, 0.7), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-medium mb-2 opacity-90">A Division of HumanLens (Pvt) Ltd</div>
            <motion.h1
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              whileHover={{ scale: 1.03 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-lg text-white"
            >
              About{' '}
              <motion.span
                className="text-transparent"
                animate={{
                  WebkitTextStroke: [
                    '2px rgba(59, 130, 246, 0.95)',
                    '2px rgba(37, 99, 235, 0.95)',
                    '2px rgba(6, 182, 212, 0.95)',
                    '2px rgba(59, 130, 246, 0.95)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  textShadow: 'none',
                }}
              >
                HumanLens IT
              </motion.span>{' '}
              solutions
            </motion.h1>
            <p className="text-xl md:text-2xl text-white opacity-95 drop-shadow-lg">
              Your Trusted Partner in Digital Transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      <section className="relative py-20 bg-[#080e1a] overflow-hidden">
        <Orb className="w-[400px] h-[400px] bg-blue-700 top-0 right-0" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                <img
                  src="/images/logo%20face.png"
                  alt="HumanLens IT solutions"
                  className="w-full h-auto max-h-[320px] object-contain p-6"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mr-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Our Background
                </h2>
              </div>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20 font-medium text-sm mb-2">
                  Company Reg No: P V 00368572
                </p>
                <p>
                  <strong>HumanLens  (Pvt) Ltd</strong> is an established media and creative services 
                  company in Sri Lanka with a proven track record in media production, content creation, and 
                  digital storytelling. Building on this foundation, we've launched our 
                  <strong> HumanLens IT solutions Division</strong> to deliver comprehensive technology services.
                </p>
                <p>
                  The HumanLens IT solutions Division represents our strategic expansion into the technology sector, 
                  combining our media expertise with cutting-edge IT capabilities. We deliver web development, 
                  mobile applications, custom software solutions, and IT consulting services tailored for 
                  businesses seeking digital transformation.
                </p>
                <p>
                  Backed by the credibility and established market presence of HumanLens Media, this division 
                  offers a unique blend of creative insight and technical excellence—creating a Sri Lanka–based, 
                  globally aligned digital service platform that bridges technology with organizational growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rationale Section */}
      <section
        className="pt-12 pb-20 bg-secondary-50 dark:bg-secondary-800 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/3048207.jpg')" }}
      >
        <div className="container-custom">
          <motion.div
            className="mb-10 flex flex-col items-center text-center"
            viewport={{ amount: 0.65 }}
            onViewportEnter={() => setRationaleTypingCycle((prev) => prev + 1)}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-1">
              <motion.span
                key={`rationale-title-${rationaleTypingCycle}`}
                initial={{ width: 0 }}
                animate={{ width: '18ch' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                className="inline-block whitespace-nowrap overflow-hidden"
              >
                Business Rationale
              </motion.span>
            </h2>
            <p className="text-lg font-bold text-white">
              <motion.span
                key={`rationale-subtitle-${rationaleTypingCycle}`}
                initial={{ width: 0 }}
                animate={{ width: '40ch' }}
                transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.9 }}
                className="inline-block whitespace-nowrap overflow-hidden"
              >
                Why we exist and what drives our commitment
              </motion.span>
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {businessRationale.map((item, index) => (
                <motion.button
                  key={item.title}
                  type="button"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.99 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onClick={() => setActiveRationaleIndex(index)}
                  onMouseEnter={() => setHoveredRationaleIndex(index)}
                  onMouseLeave={() => setHoveredRationaleIndex(null)}
                  className={`group relative w-full text-left card border transition-all ${
                    activeRationaleIndex === index
                      ? 'border-primary-500 bg-white dark:bg-white shadow-lg hover:border-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600'
                      : 'border-transparent bg-white dark:bg-white hover:border-blue-600 hover:bg-blue-600 dark:hover:bg-blue-600'
                  }`}
                >
                  <AnimatePresence>
                    {hoveredRationaleIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.18 }}
                        className="absolute -top-3 right-4 px-2 py-1 rounded-md text-xs font-semibold bg-primary-600 text-white shadow-lg"
                      >
                        View details
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-start gap-3">
                    <motion.div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      animate={
                        hoveredRationaleIndex === index
                          ? {
                              scale: [1, 1.1, 1],
                              background: [
                                'linear-gradient(to bottom right, #3b82f6, #1d4ed8)',
                                'linear-gradient(to bottom right, #8b5cf6, #ec4899)',
                                'linear-gradient(to bottom right, #3b82f6, #1d4ed8)',
                              ],
                            }
                          : {
                              scale: 1,
                              background: 'linear-gradient(to bottom right, #3b82f6, #1d4ed8)',
                            }
                      }
                      transition={{ duration: 0.6 }}
                      style={{ perspective: 1000 }}
                    >
                      <motion.div
                        animate={hoveredRationaleIndex === index ? { rotateY: 360 } : { rotateY: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                      </motion.div>
                    </motion.div>
                    <div>
                      <h3 className="text-base font-semibold text-secondary-900 transition-colors group-hover:text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.div
              key={businessRationale[activeRationaleIndex].title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-3 card bg-white dark:bg-secondary-900 border border-primary-100 dark:border-primary-800"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {React.createElement(businessRationale[activeRationaleIndex].icon, {
                      className: 'w-6 h-6 text-white',
                    })}
                  </motion.div>
                </motion.div>
                <h3 className="text-2xl font-bold text-primary-700">
                  {businessRationale[activeRationaleIndex].title}
                </h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mt-2">
                {highlightText(
                  businessRationale[activeRationaleIndex].description,
                  businessRationale[activeRationaleIndex].highlights
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="relative pt-12 pb-20 bg-[#080e1a] overflow-hidden">
        <Orb className="w-[400px] h-[400px] bg-cyan-700 top-0 left-0" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div ref={objectivesTypingRef} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="relative inline-block whitespace-nowrap">
                  <span className="text-blue-300/80">{objectivesTitleText}</span>
                  <span className="absolute left-0 top-0 text-white drop-shadow-sm">
                    {typedObjectivesTitle}
                  </span>
                </span>
              </h2>
              <p className="text-lg font-bold">
                <span className="relative inline-block whitespace-nowrap">
                  <span className="text-cyan-300/80">{objectivesSubtitleText}</span>
                  <span className="absolute left-0 top-0 text-white">
                    {typedObjectivesSubtitle}
                  </span>
                </span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300 font-bold">{objective.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        className="py-14 bg-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37, 99, 235, 0.34), rgba(29, 78, 216, 0.34)), url('/images/bkk.jpg')",
        }}
      >
        <div className="container-custom">
          <div className="text-center mb-8">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #0f172a, #1d4ed8, #0891b2, #0f172a)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Our Core Values
            </motion.h2>
            <p className="text-lg text-blue-900 font-semibold drop-shadow-sm">
              Principles that define our culture and guide our actions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ rotateY: 180, scale: 1.06 }}
                  style={{
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.45s',
                    perspective: '1000px',
                  }}
                  className="relative w-36 h-36 rounded-full cursor-pointer"
                >
                  <motion.div
                    className="absolute -inset-1 rounded-full blur-sm"
                    animate={{
                      background: [
                        'linear-gradient(135deg, rgba(37,99,235,0.55), rgba(6,182,212,0.45))',
                        'linear-gradient(135deg, rgba(14,165,233,0.55), rgba(59,130,246,0.45))',
                        'linear-gradient(135deg, rgba(2,132,199,0.55), rgba(37,99,235,0.45))',
                        'linear-gradient(135deg, rgba(37,99,235,0.55), rgba(6,182,212,0.45))',
                      ],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: index * 0.2 }}
                  />
                  <div
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                    className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-700 shadow-xl"
                  >
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                    className="absolute inset-0 rounded-full border-4 border-blue-700 shadow-xl bg-gradient-to-br from-blue-700 to-cyan-700 text-white flex items-center justify-center p-5"
                  >
                    <p className="text-xs leading-relaxed text-center font-semibold">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
                <motion.h3
                  className="mt-2 text-lg font-semibold text-center"
                  animate={{ color: ['#0f172a', '#1d4ed8', '#0891b2', '#0f172a'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 }}
                >
                  {value.title}
                </motion.h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="relative py-24 lg:py-28 bg-[#080e1a] overflow-hidden">
        <Orb className="w-[500px] h-[500px] bg-blue-700 top-0 left-0" />
        <Orb className="w-[400px] h-[400px] bg-purple-700 bottom-0 right-0" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm font-semibold text-blue-300 mb-4">
              Team Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Organizational Structure</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Project-based coordination using Agile methodology and cloud-based management tools
            </p>
          </div>

          {/* Hierarchy Diagram */}
          <div className="max-w-7xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Top Level */}
              <div className="mb-6">
                <div className="inline-block px-8 py-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 shadow-xl">
                  <h3 className="font-bold text-white text-lg mb-1">
                    HumanLens  (Pvt) Ltd.
                  </h3>
                  <p className="text-sm text-slate-400">Parent Organization</p>
                </div>
              </div>

              {/* Head HumanLens IT solutions */}
              <div className="mb-6 flex justify-center">
                <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-purple-500"></div>
              </div>
              <div className="mb-8">
                <div className="inline-block px-8 py-5 rounded-2xl bg-blue-500/10 backdrop-blur-sm border border-blue-500/40 shadow-xl">
                  <h3 className="font-bold text-white mb-1">
                    Head – HumanLens IT solutions
                  </h3>
                  <p className="text-sm text-blue-400 font-medium">
                    Mr. Gihan lahiru
                  </p>
                </div>
              </div>

              {/* Leadership Bio */}
              <div className="mb-6 flex justify-center">
                <div className="w-px h-8 bg-gradient-to-b from-purple-500 to-cyan-500"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto mb-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-5 shadow-lg"
              >
                <div className="grid sm:grid-cols-[110px,1fr] gap-4 items-center text-left">
                  <div className="mx-auto sm:mx-0 w-24 h-24 rounded-xl overflow-hidden border border-white/20 bg-white/5">
                    <img
                      src="/images/gihanpc.png"
                      alt="Mr. Gihan lahiru"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-blue-400 font-semibold mb-1">Leadership Profile</p>
                    <h3 className="text-lg font-bold text-white mb-1">Mr. Gihan lahiru</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Leads HumanLens IT solutions with a focus on practical digital transformation, combining media insight with software delivery to build scalable, client-centered technology solutions. A graduate of Uva Wellassa University with a BSc (Hons) in Computer Science and Technology, he is a technology enthusiast and professional known for strong work ethic and talent in adopting emerging technologies.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Three Units */}
              <div className="mb-8 flex justify-center">
                <div className="w-px h-10 bg-gradient-to-b from-cyan-500 to-emerald-500"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 relative">
                {/* Connecting lines */}
                <div className="hidden md:block absolute top-0 left-[16.66%] right-[16.66%] h-px bg-white/20" style={{ top: '-40px' }}></div>
                <div className="hidden md:block absolute w-px h-10 bg-white/20" style={{ left: '16.66%', top: '-40px' }}></div>
                <div className="hidden md:block absolute w-px h-10 bg-white/20" style={{ left: '50%', top: '-40px' }}></div>
                <div className="hidden md:block absolute w-px h-10 bg-white/20" style={{ left: '83.33%', top: '-40px' }}></div>

                {teamStructure.slice(2).map((department, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg hover:border-white/20 transition-all"
                  >
                    <div className="absolute left-0 top-0 h-1.5 w-full rounded-t-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-60"></div>
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                        <department.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 text-center">
                      {department.role}
                    </h3>
                    <ul className="space-y-2">
                      {department.positions.map((position, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-sm text-slate-400"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>{position}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Methodology Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm px-6 py-5 shadow-lg"
          >
            <p className="text-center text-slate-300">
              <span className="font-semibold text-blue-400">Project-Based Coordination:</span>{' '}
              Each team operates under Agile methodology using cloud-based project management tools for workflow monitoring, 
              ensuring efficient collaboration and transparent progress tracking.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
