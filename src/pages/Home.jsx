import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Target, Eye, Lightbulb, Users, Award, CheckCircle, Code2, Smartphone, Zap, Shield, BarChart3 } from 'lucide-react';

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
                  style={{ 
                    display: 'inline-block'
                  }}
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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const [flippedCards, setFlippedCards] = useState({});
  
  const stats = [
    { label: 'Target SME Clients', value: 50, suffix: '+' },
    { label: 'Large Organizations Goal', value: 10, suffix: '+' },
    { label: 'Service Excellence', value: 100, suffix: '%' },
    { label: 'Local Expertise', value: '🇱🇰', isEmoji: true },
  ];

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Building responsive, scalable web applications with cutting-edge technologies and best practices.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Creating powerful native and cross-platform mobile solutions for iOS and Android.',
    },
    {
      icon: Zap,
      title: 'Software Solutions',
      description: 'Custom software development tailored to your specific business requirements and challenges.',
    },
    {
      icon: Shield,
      title: 'IT Consulting',
      description: 'Strategic technology guidance to optimize your infrastructure and drive digital transformation.',
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Data-driven insights and analytics solutions to empower informed decision-making.',
    },
    {
      icon: Users,
      title: 'Team Augmentation',
      description: 'Skilled developers and consultants to extend your team capabilities on demand.',
    },
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
      details: 'Leveraging our parent company\'s media expertise, we create digital solutions that are not only technically sound but also visually engaging and user-centric, ensuring maximum impact.',
    },
    {
      title: 'Proven Track Record',
      description: 'Delivering successful projects with measurable results and long-term client satisfaction.',
      details: 'With numerous successful deployments across various industries, we have consistently delivered projects on time and within budget, earning the trust and loyalty of our clients.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: 'calc(100vh - 5rem)', marginTop: '5rem' }}>
        {/* Static Background */}
        <div
          className="absolute bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')",
            top: '-5rem',
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        
        {/* Static Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg animate-gradient-text">
                Transform Your Business with Innovative IT Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg">
                Leading IT solutions provider delivering comprehensive <motion.span 
                  className="font-semibold inline-block whitespace-nowrap"
                  animate={{ color: ["#3b82f6", "#8b5cf6", "#ec4899", "#3b82f6"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >digital transformation services</motion.span>. 
                Expert <motion.span 
                  className="font-semibold inline-block whitespace-nowrap"
                  animate={{ color: ["#3b82f6", "#10b981", "#f59e0b", "#3b82f6"] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >web development</motion.span>, <motion.span 
                  className="font-semibold inline-block whitespace-nowrap"
                  animate={{ color: ["#3b82f6", "#ec4899", "#8b5cf6", "#3b82f6"] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >mobile apps</motion.span>, <motion.span 
                  className="font-semibold inline-block whitespace-nowrap"
                  animate={{ color: ["#3b82f6", "#f59e0b", "#10b981", "#3b82f6"] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                >custom software</motion.span>, and <motion.span 
                  className="font-semibold inline-block whitespace-nowrap"
                  animate={{ color: ["#3b82f6", "#8b5cf6", "#10b981", "#3b82f6"] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >IT consulting</motion.span> for businesses 
                seeking innovative and sustainable technology solutions worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services" className="bg-blue-900 hover:bg-blue-950 text-white px-8 py-4 rounded-lg font-semibold transition inline-flex items-center justify-center shadow-xl">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/contact" className="bg-white text-secondary-900 px-6 py-3 rounded-lg font-medium hover:bg-secondary-50 transition inline-flex items-center justify-center shadow-xl">
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/blckblue.jpg')",
          }}
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
          
          {/* Additional Text */}
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
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat bg-fixed relative"
        style={{
          backgroundImage: "linear-gradient(rgba(37, 99, 235, 0.1), rgba(37, 99, 235, 0.1)), url('/images/bckhome-compressed.jpg')",
        }}
      >
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-b from-white via-blue-100 to-primary-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Our Services</h2>
            <p className="text-lg font-semibold max-w-2xl mx-auto bg-gradient-to-b from-white via-blue-50 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const [isHovered, setIsHovered] = useState(false);
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className="relative p-6 rounded-lg border border-secondary-200 bg-white hover:shadow-2xl transition-all duration-300 hover:border-blue-500 group cursor-pointer overflow-hidden"
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-gradient-text bg-[length:200%_200%] pointer-events-none z-10" />
                  
                  <div className="relative z-20">
                    <motion.div 
                      className="mb-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center"
                      animate={isHovered ? { 
                        scale: [1, 1.1, 1],
                        background: [
                          "linear-gradient(to bottom right, #3b82f6, #1d4ed8)",
                          "linear-gradient(to bottom right, #8b5cf6, #ec4899)",
                          "linear-gradient(to bottom right, #3b82f6, #1d4ed8)"
                        ]
                      } : {
                        scale: 1,
                        background: "linear-gradient(to bottom right, #3b82f6, #1d4ed8)"
                      }}
                      transition={{ duration: 0.6 }}
                      style={{ perspective: 1000 }}
                    >
                      <motion.div
                        animate={isHovered ? { rotateY: 360 } : { rotateY: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-900 transition-colors duration-300">{service.title}</h3>
                    <p className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 bg-white border-y border-secondary-200 relative overflow-hidden">
        {/* Background Text */}
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mr-4"
                  initial={{ scale: 1, background: "linear-gradient(to bottom right, #3b82f6, #1d4ed8)" }}
                  whileInView={{ 
                    scale: [1, 1.1, 1],
                    background: [
                      "linear-gradient(to bottom right, #3b82f6, #1d4ed8)",
                      "linear-gradient(to bottom right, #8b5cf6, #ec4899)",
                      "linear-gradient(to bottom right, #3b82f6, #1d4ed8)"
                    ]
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    initial={{ rotateY: 0 }}
                    whileInView={{ rotateY: 360 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Eye className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
                <h3 className="text-2xl font-bold text-blue-600">
                  Our Vision
                </h3>
              </div>
              <p className="text-black leading-relaxed font-bold">
                To become one of Sri Lanka's most trusted and innovative IT solution providers, delivering 
                technology that empowers businesses and strengthens digital ecosystems nationally and 
                internationally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mr-4"
                  initial={{ scale: 1, background: "linear-gradient(to bottom right, #3b82f6, #1d4ed8)" }}
                  whileInView={{ 
                    scale: [1, 1.1, 1],
                    background: [
                      "linear-gradient(to bottom right, #3b82f6, #1d4ed8)",
                      "linear-gradient(to bottom right, #8b5cf6, #ec4899)",
                      "linear-gradient(to bottom right, #3b82f6, #1d4ed8)"
                    ]
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    initial={{ rotateY: 0 }}
                    whileInView={{ rotateY: 360 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Target className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
                <h3 className="text-2xl font-bold text-blue-600">
                  Our Mission
                </h3>
              </div>
              <p className="text-black leading-relaxed font-bold">
                To design, develop, and maintain intelligent digital systems and solutions through a skilled 
                team committed to technical excellence, reliability, and client satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: "url('/images/yurt9-compressed.jpg')" }} />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left Side - Heading */}
            <div className="w-full md:w-1/3 flex flex-col items-start">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 flex gap-4 items-center">
                <span className="flex flex-col leading-none items-center font-bold">
                  <motion.span
                    initial={{ color: '#ffffff' }}
                    whileInView={{ color: '#06b6d4' }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0 }}
                    className="font-bold"
                  >W</motion.span>
                  <motion.span
                    initial={{ color: '#ffffff' }}
                    whileInView={{ color: '#06b6d4' }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 1 }}
                    className="font-bold"
                  >H</motion.span>
                  <motion.span
                    initial={{ color: '#ffffff' }}
                    whileInView={{ color: '#06b6d4' }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 2 }}
                    className="font-bold"
                  >Y</motion.span>
                </span>
                <span className="flex flex-col gap-2 font-bold">
                  <AnimatedText text="CHOOSE" blueWords={['choose']} slow={true} />
                  <AnimatedText text="US" blueWords={['us']} slow={true} />
                </span>
              </div>
              <div className="text-lg text-white/90 font-bold">
                <AnimatedText 
                  text="WHAT SETS US APART IN THE COMPETITIVE IT SOLUTIONS LANDSCAPE"
                  blueWords={['why', 'choose', 'us']}
                  slow={false}
                />
              </div>
            </div>

            {/* Right Side - Cards */}
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
                      style={{
                        transformStyle: 'preserve-3d',
                        transition: 'transform 0.4s',
                      }}
                      className="relative w-full h-full"
                    >
                      {/* Front Side */}
                      <div
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                        }}
                        className="absolute inset-0 p-8 rounded-lg border border-secondary-200 bg-white shadow-lg"
                      >
                        <CheckCircle className="w-10 h-10 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-blue-600 mb-3">{reason.title}</h3>
                        <p className="text-black">{reason.description}</p>
                      </div>

                      {/* Back Side */}
                      <div
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                        className="absolute inset-0 p-8 rounded-lg border border-blue-600 bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl"
                      >
                        <h3 className="text-xl font-bold text-black mb-4">{reason.title}</h3>
                        <p className="text-white leading-relaxed">{reason.details}</p>
                      </div>
                    </motion.div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" 
             style={{ backgroundImage: "url('/images/backgroungGreen-compressed.jpg')" }} />
        <div className="absolute inset-0 bg-blue-600/60" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-800 font-bold">
              Don't just take our word for it - hear from businesses we've helped transform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mr. Maleesha Udantha",
                role: "Tuition Project",
                comment: "The educational platform HumanLens developed for our tuition center has completely transformed how we interact with students. It's user-friendly, reliable, and exactly what we needed to scale our classes.",
                rating: 5,
                image: "https://ui-avatars.com/api/?name=Maleesha+Udantha&background=0D8ABC&color=fff"
              },
              {
                name: "Mrs. Saraswathi",
                role: "Meiyal Foundation",
                comment: "Working with HumanLens on the Meiyal Foundation project was a wonderful experience. They perfectly understood our vision for a non-profit website and delivered a beautiful, responsive platform that helps us reach more people.",
                rating: 5,
                image: "https://ui-avatars.com/api/?name=Saraswathi&background=0D8ABC&color=fff"
              },
              {
                name: "Kamal Perera",
                role: "Garage Project",
                comment: "The custom website and system they built for my garage has streamlined our daily operations. Everything is now so much more professional and efficient. Highly recommended!",
                rating: 5,
                image: "https://ui-avatars.com/api/?name=Kamal+Perera&background=0D8ABC&color=fff"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-gray-200 mr-4 object-cover"
                  />
                  <div>
                    <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
