import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe, Smartphone, Code, MessageSquare, Server, GraduationCap,
  Database, Shield, Cloud, ChevronDown, ArrowRight, DollarSign,
  CheckCircle2, Zap, Target, Users
} from 'lucide-react';

const Orb = ({ className }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`} />
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

const coreServices = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Designing responsive websites for companies, NGOs, and institutions.',
    revenueModel: 'Project-based fees and annual maintenance',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Custom website design and branding',
      'Responsive and mobile-friendly designs',
      'E-commerce platforms and shopping carts',
      'Content Management Systems (CMS)',
      'Progressive Web Applications (PWA)',
      'Website maintenance and updates',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Applications',
    description: 'Developing Android/iOS apps, web portals, and management systems.',
    revenueModel: 'Fixed contracts or subscription models',
    gradient: 'from-purple-500 to-violet-500',
    features: [
      'iOS and Android native apps',
      'Cross-platform development (React Native, Flutter)',
      'Web-based business applications',
      'Client management systems',
      'Productivity enhancement tools',
      'App maintenance and updates',
    ],
  },
  {
    icon: Code,
    title: 'Software Solutions',
    description: 'Custom software for data management, inventory, or sales systems.',
    revenueModel: 'Development + annual licensing',
    gradient: 'from-emerald-500 to-teal-500',
    features: [
      'Custom business software development',
      'Enterprise Resource Planning (ERP) systems',
      'Customer Relationship Management (CRM)',
      'Inventory and order management systems',
      'Business process automation',
      'Legacy system modernization',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Digital Consultation',
    description: 'Strategic IT consultation for businesses and startups.',
    revenueModel: 'Hourly or package-based fees',
    gradient: 'from-amber-500 to-orange-500',
    features: [
      'Digital transformation strategy',
      'Technology roadmap planning',
      'System architecture design',
      'Digital branding consultation',
      'IT infrastructure assessment',
      'Business-technology alignment',
    ],
  },
  {
    icon: Server,
    title: 'Maintenance & Hosting',
    description: 'Web hosting, updates, and system monitoring.',
    revenueModel: 'Monthly or annual subscription',
    gradient: 'from-rose-500 to-pink-500',
    features: [
      'Shared and dedicated hosting',
      'Cloud hosting solutions',
      'Domain registration and management',
      'SSL certificate installation',
      'Email hosting services',
      '24/7 server monitoring and support',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Training & Workshops',
    description: 'Short-term courses for clients on digital tools and cyber safety.',
    revenueModel: 'Course fees',
    gradient: 'from-cyan-500 to-blue-500',
    features: [
      'Web development bootcamps',
      'Mobile app development courses',
      'Database management training',
      'Corporate technology workshops',
      'IT best practices seminars',
      'Customized training programs',
    ],
  },
];

const additionalServices = [
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Design and manage reliable data systems for your business',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Database Security',
    description: 'Protect your data with access controls and secure storage',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Move and scale your infrastructure to modern cloud platforms',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Database,
    title: 'Database Migration',
    description: 'Move and modernize databases with minimal downtime',
    gradient: 'from-amber-500 to-orange-500',
  },
];

const processSteps = [
  { step: '01', title: 'Discovery', description: 'Understanding your business needs and objectives', icon: Target, color: 'from-blue-500 to-cyan-500' },
  { step: '02', title: 'Planning', description: 'Creating a detailed roadmap and project plan', icon: Zap, color: 'from-purple-500 to-violet-500' },
  { step: '03', title: 'Development', description: 'Building your solution with agile methodology', icon: Code, color: 'from-emerald-500 to-teal-500' },
  { step: '04', title: 'Delivery', description: 'Launching and providing ongoing support', icon: CheckCircle2, color: 'from-amber-500 to-orange-500' },
];

const ServiceCard = ({ service, index }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300 overflow-hidden"
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="p-6">
        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
          </div>
        </div>

        {/* Revenue model badge */}
        <div className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 w-fit">
          <DollarSign className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span className="text-xs text-slate-400">{service.revenueModel}</span>
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
            expanded
              ? `bg-gradient-to-r ${service.gradient} text-white border-transparent`
              : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
          }`}
        >
          <span>{expanded ? 'Hide Features' : 'View Features'}</span>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>

        {/* Features list */}
        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="mt-4 space-y-2 overflow-hidden"
            >
              {service.features.map((feature, fi) => (
                <motion.li
                  key={fi}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: fi * 0.06 }}
                  className="flex items-start gap-2.5 text-slate-300 text-sm"
                >
                  <ArrowRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 bg-gradient-to-r ${service.gradient} bg-clip-text text-blue-400`} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom shimmer line on hover */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-30 origin-left`}
      />
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="bg-[#080e1a] text-white overflow-hidden min-h-screen pt-20">

      {/* ═══ HERO ═══ */}
      <section
        className="relative py-28 md:py-36 overflow-hidden flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(8,14,26,0.7), rgba(8,14,26,0.85)), url('/images/services.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Orb className="w-[500px] h-[500px] bg-blue-600 -top-32 -left-32" />
        <Orb className="w-[400px] h-[400px] bg-purple-600 -bottom-24 -right-24" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm"
          >
            <Zap className="w-4 h-4" />
            What We Offer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            Our{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Services
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
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Comprehensive IT solutions designed to drive your business forward, improve efficiency, and support long-term growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {[
              { val: '6', label: 'Core Services' },
              { val: '4', label: 'Specialized Solutions' },
              { val: '4', label: 'Process Steps' },
            ].map((s, i) => (
              <motion.div key={i} whileHover={{ y: -4 }} className="text-center px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">{s.val}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ CORE SERVICES ═══ */}
      <section className="relative py-24">
        <Orb className="w-[400px] h-[400px] bg-blue-700 top-0 left-1/4" />
        <Orb className="w-[350px] h-[350px] bg-purple-700 bottom-0 right-0" />
        <div className="container-custom relative z-10">
          <SectionTitle
            tag="Core Offerings"
            title="Core Services & Products"
            subtitle="Comprehensive digital transformation services for individuals, businesses, and organizations"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ADDITIONAL SERVICES ═══ */}
      <section className="relative py-24">
        <Orb className="w-[400px] h-[400px] bg-cyan-700 top-0 left-0" />
        <div className="container-custom relative z-10">
          <SectionTitle
            tag="Specialized"
            title="Additional Services"
            subtitle="Specialized solutions to complement our core offerings"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{service.description}</p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-40 origin-left`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SERVICE PROCESS ═══ */}
      <section className="relative py-24 pb-32">
        <Orb className="w-[500px] h-[500px] bg-emerald-700 bottom-0 left-1/2 -translate-x-1/2" />
        <div className="container-custom relative z-10">
          <SectionTitle
            tag="How We Work"
            title="Our Service Process"
            subtitle="A structured, transparent approach to delivering exceptional results"
          />
          <div className="relative">
            <div className="hidden md:block absolute top-[52px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-emerald-500 to-amber-500 opacity-40" />
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((process, index) => {
                const StepIcon = process.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ y: -8 }}
                    className="relative group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center mx-auto mb-6 shadow-2xl relative z-10`}
                    >
                      <span className="text-white font-black text-lg">{process.step}</span>
                      <motion.span
                        animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.4 }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${process.color}`}
                      />
                    </motion.div>

                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-white/20 group-hover:bg-white/8 transition-all duration-300 group-hover:shadow-xl text-center">
                      <div className={`flex justify-center mb-3`}>
                        <StepIcon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-extrabold text-white mb-2">{process.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{process.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
