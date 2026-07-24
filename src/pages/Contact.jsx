import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe, CheckCircle2, ChevronDown } from 'lucide-react';

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

const inputClass = (error) =>
  `w-full px-4 py-3 rounded-xl border ${
    error
      ? 'border-red-500/60 focus:ring-red-500/40'
      : 'border-white/10 focus:ring-blue-500/40'
  } bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-blue-500/40 transition-all duration-200 backdrop-blur-sm`;

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['077 651 7595', '071 442 8393'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@humanlensmedia.com', 'support@humanlensmedia.com'],
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['3637+W8P, Eliot Rd', 'Galle 80000, Sri Lanka'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
    gradient: 'from-amber-500 to-orange-500',
  },
];

const services = [
  'Web Development',
  'Mobile App Development',
  'Custom Software Solutions',
  'IT Consultation',
  'Hosting & Domain Services',
  'Training & Workshops',
  'Other',
];

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity. A simple website may take 2–4 weeks, while a custom software solution could take 2–6 months. We provide detailed timelines during the consultation phase.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your systems run smoothly. We provide 24/7 support for critical systems and regular maintenance schedules.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with modern technologies including React, Node.js, Python, PHP, Java, and more. We select the best technology stack based on your specific requirements and goals.',
  },
  {
    question: 'How do you ensure project quality?',
    answer: 'We follow rigorous quality assurance processes including code reviews, automated testing, user acceptance testing, and continuous integration. Quality is built into every stage of development.',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'name': return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email': return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email address' : '';
      case 'phone': return value && !/^[0-9+\-\s()]+$/.test(value) ? 'Please enter a valid phone number' : '';
      case 'message': return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default: return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name]) setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      return;
    }
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const waNumber = '94776517595';
    const text = `*New Contact Request*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || 'N/A'}\n*Company:* ${formData.company || 'N/A'}\n*Service:* ${formData.service || 'N/A'}\n*Message:* ${formData.message}`;
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(text)}`;

    // Open WhatsApp link in new tab
    window.open(waUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      setErrors({});
      setTouched({});
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <div className="bg-[#080e1a] text-white overflow-hidden min-h-screen pt-20">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[380px] flex items-center overflow-hidden py-24">
        <Orb className="w-[600px] h-[600px] bg-blue-600 -top-32 -left-32" />
        <Orb className="w-[400px] h-[400px] bg-purple-600 -bottom-20 -right-20" />
        <Orb className="w-[300px] h-[300px] bg-cyan-500 top-10 right-1/3" />
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
            <Mail className="w-4 h-4" />
            Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            Let's{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Connect
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
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Let's discuss how we can help transform your business with our IT solutions.
          </motion.p>
        </div>
      </section>

      {/* ═══ FORM + INFO ═══ */}
      <section className="relative py-20">
        <Orb className="w-[400px] h-[400px] bg-emerald-700 top-0 right-0" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                <h2 className="text-2xl font-extrabold text-white mb-6">Send Us a Message</h2>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400"
                      role="status"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">Thank you! We'll get back to you within 24 hours.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} required className={inputClass(errors.name && touched.name)} placeholder="John Doe" />
                      {errors.name && touched.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} required className={inputClass(errors.email && touched.email)} placeholder="john@example.com" />
                      {errors.email && touched.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} className={inputClass(errors.phone && touched.phone)} placeholder="+94 XX XXX XXXX" />
                      {errors.phone && touched.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5">Company Name</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass(false)} placeholder="Your Company" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-1.5">Service Interested In *</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} required className={`${inputClass(false)} cursor-pointer`} style={{ colorScheme: 'dark' }}>
                      <option value="" className="bg-[#0d1526]">Select a service</option>
                      {services.map((s, i) => (
                        <option key={i} value={s} className="bg-[#0d1526]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Message * <span className="text-xs text-slate-500">(Min. 10 characters)</span>
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} required rows="5" className={`${inputClass(errors.message && touched.message)} resize-none`} placeholder="Tell us about your project requirements..." />
                    {errors.message && touched.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                    <p className="mt-1 text-xs text-slate-600">{formData.message.length} characters</p>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <div>
                <h2 className="text-2xl font-extrabold text-white mb-2">Contact Information</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Reach out to us through any of the following channels. We're here to help and answer any questions you may have.
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">{info.title}</h3>
                      {info.details.map((d, di) => (
                        <p key={di} className="text-slate-400 text-sm">{d}</p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}

              {/* Map Link */}
              <motion.a
                href="https://maps.app.goo.gl/iqRbmY7BiWYnPZuHA"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden h-48 flex items-center justify-center hover:bg-white/10 transition-all duration-300 relative cursor-pointer block"
              >
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-center relative z-10 flex flex-col items-center justify-center h-full">
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-3 group-hover:text-emerald-400 transition-colors" />
                  <p className="text-slate-200 font-medium text-sm">View on Google Maps</p>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="relative py-24 pb-32">
        <Orb className="w-[400px] h-[400px] bg-purple-700 bottom-0 left-0" />
        <div className="container-custom relative z-10 max-w-3xl mx-auto">
          <SectionTitle
            tag="FAQ"
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions"
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors duration-200"
                >
                  <span className="font-semibold text-white text-sm pr-4">{faq.question}</span>
                  <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-3">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
