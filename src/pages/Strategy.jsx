import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Target, Zap, Users, TrendingUp, Award, Shield,
  Lightbulb, DollarSign, MessageCircle, ChevronRight, ArrowRight
} from 'lucide-react';

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

const Orb = ({ className }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`} />
);

const RevenueBar = ({ name, percentage, color, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors duration-300">{name}</span>
        <span className={`font-bold text-lg ${color}`}>{percentage}%</span>
      </div>
      <div className="w-full bg-white/5 rounded-full h-3 border border-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay: delay + 0.2, ease: 'easeOut' }}
          className={`h-3 rounded-full relative overflow-hidden bg-gradient-to-r ${percentage === 60 ? 'from-blue-500 to-cyan-400' : percentage === 25 ? 'from-purple-500 to-pink-400' : 'from-emerald-500 to-teal-400'}`}
        >
          <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Strategy = () => {
  const businessModel = [
    { icon: Target, title: 'Hybrid Revenue Model', description: 'Combining one-time project income and recurring service subscriptions to ensure sustainable and diversified revenue streams.', gradient: 'from-blue-500 to-cyan-500', glow: 'group-hover:shadow-blue-500/25' },
    { icon: DollarSign, title: 'Semi-Autonomous Branch', description: "Operating under HumanLens (Pvt) Ltd with dedicated focus, leveraging the parent company's credibility and resources.", gradient: 'from-purple-500 to-violet-500', glow: 'group-hover:shadow-purple-500/25' },
    { icon: Users, title: 'Multiple Revenue Streams', description: '60% from web & software development, 25% from consultation & digital management, 15% from training & support contracts.', gradient: 'from-emerald-500 to-teal-500', glow: 'group-hover:shadow-emerald-500/25' },
    { icon: Lightbulb, title: 'Structured Work Cycle', description: 'Systematic process: Client Requirement Study to Proposal to Development & Testing to Deployment to Maintenance & Review.', gradient: 'from-amber-500 to-orange-500', glow: 'group-hover:shadow-amber-500/25' },
  ];

  const operationalStrategy = [
    { title: 'Project Development Team', description: 'Dedicated team to handle design, coding, testing, and deployment of all client projects with technical excellence.', icon: Zap, accent: 'blue' },
    { title: 'Consulting Team', description: 'Expert consultants to lead business analysis, client engagement, and strategic IT guidance for organizations.', icon: Users, accent: 'purple' },
    { title: 'Support Team', description: 'Specialized team to maintain websites, applications, and server performance with 24/7 monitoring and support.', icon: Shield, accent: 'emerald' },
    { title: 'Training & Research', description: 'Continuous exploration of new technologies and offering professional workshops to clients and team members.', icon: Lightbulb, accent: 'amber' },
    { title: 'Work Cycle Process', description: 'Client Study to Proposal to Development to Deployment to Maintenance - ensuring quality at every stage.', icon: TrendingUp, accent: 'rose' },
    { title: 'Revenue Distribution', description: '60% Web/Software Development | 25% Consultation & Management | 15% Training & Support Contracts.', icon: DollarSign, accent: 'cyan' },
  ];

  const accentMap = {
    blue:    { bg: 'from-blue-500 to-blue-700',     border: 'hover:border-blue-500/40',    glow: 'hover:shadow-blue-500/10' },
    purple:  { bg: 'from-purple-500 to-purple-700', border: 'hover:border-purple-500/40',  glow: 'hover:shadow-purple-500/10' },
    emerald: { bg: 'from-emerald-500 to-emerald-700', border: 'hover:border-emerald-500/40', glow: 'hover:shadow-emerald-500/10' },
    amber:   { bg: 'from-amber-500 to-amber-700',   border: 'hover:border-amber-500/40',   glow: 'hover:shadow-amber-500/10' },
    rose:    { bg: 'from-rose-500 to-rose-700',     border: 'hover:border-rose-500/40',    glow: 'hover:shadow-rose-500/10' },
    cyan:    { bg: 'from-cyan-500 to-cyan-700',     border: 'hover:border-cyan-500/40',    glow: 'hover:shadow-cyan-500/10' },
  };

  const competitiveAdvantages = [
    { title: 'Local Expertise, Global Standards', description: 'Deep understanding of Sri Lankan business needs combined with internationally aligned service delivery and technical standards.', icon: Award },
    { title: 'Integrated Media-Technology Environment', description: 'Unique combination of IT technical expertise and creative media capabilities provides distinctive brand identity.', icon: Lightbulb },
    { title: 'In-House Expertise', description: 'Skilled professionals capable of end-to-end solution delivery, from design to deployment and maintenance.', icon: Users },
    { title: 'Bridging Communication Gaps', description: 'Eliminating communication, support, and customization gaps often experienced with freelancers or overseas providers.', icon: MessageCircle },
    { title: 'Ethical and Transparent Operations', description: 'Clear pricing, comprehensive contracts, and full client ownership rights ensure trust and long-term partnerships.', icon: Shield },
    { title: 'Continuous Learning', description: 'Team participation in technology workshops and professional certifications to stay ahead of industry trends.', icon: TrendingUp },
    { title: 'Flexible Packages', description: 'Customized service levels and pricing options designed for startups to large enterprises.', icon: DollarSign },
  ];

  const revenueStreams = [
    { name: 'Web & Software Development', percentage: 60 },
    { name: 'Consultation & Digital Management', percentage: 25 },
    { name: 'Training & Support Contracts', percentage: 15 },
  ];

  const growthPhases = [
    { phase: '01', years: 'Year 1-2', title: 'Market Establishment', color: 'from-blue-500 to-cyan-500', glow: 'shadow-blue-500/30', points: ['Build strong local client base', 'Establish brand reputation', 'Expand service portfolio', 'Hire key team members'] },
    { phase: '02', years: 'Year 3-4', title: 'Scale & Expansion', color: 'from-purple-500 to-violet-500', glow: 'shadow-purple-500/30', points: ['Regional market expansion', 'Strategic partnerships', 'Service specialization', 'Team growth and training'] },
    { phase: '03', years: 'Year 5+', title: 'Market Leadership', color: 'from-emerald-500 to-teal-500', glow: 'shadow-emerald-500/30', points: ['Become top-tier provider', 'International projects', 'Innovation lab launch', 'Industry thought leadership'] },
  ];

  const marketingPlan = [
    { title: 'Target Markets', icon: Target, description: 'Focus on SMEs as the primary segment while expanding to corporate, education, and non-profit sectors.', points: ['Primary focus: 50+ SMEs in 3 years', 'Corporate expansion: 10+ large organizations', 'Education and social-impact digital solutions'], gradient: 'from-blue-500/10 to-cyan-500/10', border: 'border-blue-500/20', iconGrad: 'from-blue-500 to-cyan-500' },
    { title: 'Digital Promotion', icon: TrendingUp, description: 'Build strong visibility through SEO, content publishing, social media campaigns, and paid digital outreach.', points: ['SEO-optimized website and case studies', 'LinkedIn, Facebook, and Instagram campaigns', 'Email outreach and lead nurturing workflows'], gradient: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/20', iconGrad: 'from-purple-500 to-pink-500' },
    { title: 'Relationship Marketing', icon: MessageCircle, description: 'Grow long-term pipelines through partnerships, workshops, referrals, and trust-based client engagement.', points: ['Industry networking and workshop programs', 'Client referral incentives and testimonials', 'Partnership collaborations for wider reach'], gradient: 'from-emerald-500/10 to-teal-500/10', border: 'border-emerald-500/20', iconGrad: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <div className="pt-20 bg-[#080e1a] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden">
        <Orb className="w-[600px] h-[600px] bg-blue-600 -top-40 -left-40" />
        <Orb className="w-[500px] h-[500px] bg-purple-600 -bottom-32 -right-32" />
        <Orb className="w-[300px] h-[300px] bg-cyan-500 top-20 right-1/3" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm">
            <Target className="w-4 h-4" />
            Business Blueprint
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Our{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">Strategy</span>
              <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }} className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full origin-left" />
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-xl text-slate-400 max-w-2xl mx-auto">
            A data-driven, people-first approach to delivering IT excellence and achieving sustainable, long-term growth.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="flex flex-wrap justify-center gap-8 mt-12">
            {[{ val: '3', unit: 'Revenue', label: 'Streams' }, { val: '3', unit: 'Growth', label: 'Phases' }, { val: '7', unit: 'Competitive', label: 'Advantages' }].map((s, i) => (
              <motion.div key={i} whileHover={{ y: -4 }} className="text-center px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">{s.val}</div>
                <div className="text-xs text-slate-400 leading-tight">{s.unit}<br />{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="relative py-24">
        <Orb className="w-[400px] h-[400px] bg-blue-700 top-0 left-1/4" />
        <div className="container-custom relative z-10">
          <SectionTitle tag="Foundation" title="Business Model" subtitle="Diversified revenue streams built for sustainable, resilient growth" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessModel.map((model, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.12 }} whileHover={{ y: -8, scale: 1.02 }} className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:shadow-2xl transition-all duration-300 cursor-default">
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${model.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${model.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  <model.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-base font-bold text-white mb-2">{model.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{model.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-20 max-w-3xl mx-auto p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Projected Revenue Distribution</h3>
            <p className="text-slate-400 text-sm text-center mb-8">Balanced portfolio across three core business areas</p>
            <div className="space-y-6">
              {revenueStreams.map((stream, index) => (
                <RevenueBar key={index} name={stream.name} percentage={stream.percentage} color={index === 0 ? 'text-cyan-400' : index === 1 ? 'text-purple-400' : 'text-emerald-400'} delay={index * 0.15} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OPERATIONAL STRATEGY */}
      <section className="relative py-24">
        <Orb className="w-[350px] h-[350px] bg-purple-700 bottom-0 right-0" />
        <div className="container-custom relative z-10">
          <SectionTitle tag="Operations" title="Operational Strategy" subtitle="How we deliver excellence in every project we take on" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationalStrategy.map((item, index) => {
              const a = accentMap[item.accent];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -6 }} className={`group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm ${a.border} hover:shadow-xl ${a.glow} transition-all duration-300 overflow-hidden`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/3 to-transparent transition-opacity duration-300 pointer-events-none" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.bg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{item.description}</p>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }} className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${a.bg} opacity-50`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPETITIVE ADVANTAGES */}
      <section className="relative py-24">
        <Orb className="w-[400px] h-[400px] bg-cyan-700 top-10 left-0" />
        <div className="container-custom relative z-10">
          <SectionTitle tag="Edge" title="Competitive Advantages" subtitle="What makes us the preferred choice for IT solutions in Sri Lanka" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {competitiveAdvantages.map((adv, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={{ y: -5 }} className="group relative flex gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <adv.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">{adv.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed group-hover:text-slate-300 transition-colors">{adv.description}</p>
                </div>
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH STRATEGY */}
      <section className="relative py-24">
        <Orb className="w-[500px] h-[500px] bg-emerald-700 bottom-0 left-1/2 -translate-x-1/2" />
        <div className="container-custom relative z-10">
          <SectionTitle tag="Roadmap" title="Growth Strategy" subtitle="Our phased roadmap to becoming a market leader in South Asia" />
          <div className="relative">
            <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-40" />
            <div className="grid md:grid-cols-3 gap-8">
              {growthPhases.map((phase, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.18 }} whileHover={{ y: -8 }} className="relative group">
                  <motion.div whileHover={{ scale: 1.1 }} className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center mx-auto mb-6 shadow-2xl relative z-10`}>
                    <span className="text-white font-black text-lg">{phase.phase}</span>
                    <motion.span animate={{ scale: [1, 1.6], opacity: [0.4, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.4 }} className={`absolute inset-0 rounded-full bg-gradient-to-br ${phase.color}`} />
                  </motion.div>
                  <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-white/20 group-hover:bg-white/8 transition-all duration-300 group-hover:shadow-xl">
                    <div className={`text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${phase.color} bg-clip-text text-transparent mb-1`}>{phase.years}</div>
                    <h3 className="text-xl font-extrabold text-white mb-4">{phase.title}</h3>
                    <ul className="space-y-2.5">
                      {phase.points.map((point, pi) => (
                        <motion.li key={pi} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.18 + pi * 0.08 }} className="flex items-start gap-2.5 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                          <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-blue-400" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARKETING STRATEGY */}
      <section className="relative py-24 pb-32">
        <Orb className="w-[400px] h-[400px] bg-pink-700 top-0 right-0" />
        <div className="container-custom relative z-10">
          <SectionTitle tag="Go-To-Market" title="Marketing & Promotion Strategy" subtitle="Integrated plan to attract, convert, and retain clients at every stage" />
          <div className="grid md:grid-cols-3 gap-8">
            {marketingPlan.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }} whileHover={{ y: -8 }} className={`group relative p-7 rounded-3xl border ${item.border} bg-gradient-to-br ${item.gradient} backdrop-blur-sm hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/5 transition-opacity duration-300 pointer-events-none rounded-3xl" />
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.iconGrad} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 group-hover:text-slate-300 transition-colors">{item.description}</p>
                <ul className="space-y-2.5">
                  {item.points.map((point, pi) => (
                    <motion.li key={pi} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.15 + pi * 0.1 }} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${item.iconGrad} flex-shrink-0`} />
                      {point}
                    </motion.li>
                  ))}
                </ul>
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: item ? index * 0.15 + 0.4 : 0 }} className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.iconGrad} origin-left`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Strategy;
