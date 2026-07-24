import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, Database, AlertCircle, FileText, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "October 23, 2025";

  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number, company name)",
        "Technical information (IP address, browser type, device information)",
        "Project requirements and business information you provide",
        "Communication records and correspondence",
        "Payment and billing information (processed through secure payment gateways)"
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our IT services",
        "To communicate with you about projects, updates, and services",
        "To process transactions and send invoices",
        "To improve our services and develop new features",
        "To comply with legal obligations and protect our rights",
        "To send promotional materials (only with your consent)"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "SSL/TLS encryption for data transmission",
        "Secure servers with regular security updates",
        "Access controls and authentication protocols",
        "Regular security audits and vulnerability assessments",
        "Employee training on data protection best practices"
      ]
    },
    {
      icon: Eye,
      title: "Data Sharing and Disclosure",
      content: [
        "We do NOT sell your personal information to third parties",
        "We may share data with trusted service providers (hosting, payment processors)",
        "We may disclose information when required by law or legal process",
        "Business partners only with your explicit consent",
        "All third-party services are bound by strict confidentiality agreements"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access your personal data and request a copy",
        "Correct inaccurate or incomplete information",
        "Request deletion of your personal data (subject to legal obligations)",
        "Object to processing of your personal data",
        "Request restriction of processing",
        "Data portability to another service provider",
        "Withdraw consent at any time"
      ]
    },
    {
      icon: Globe,
      title: "Cookies and Tracking",
      content: [
        "We use cookies to enhance user experience and analyze website traffic",
        "Essential cookies for website functionality",
        "Analytics cookies to understand user behavior (Google Analytics)",
        "You can control cookie preferences through your browser settings",
        "Disabling cookies may affect website functionality"
      ]
    },
    {
      icon: FileText,
      title: "Data Retention",
      content: [
        "We retain personal data only as long as necessary for the purposes outlined",
        "Client project data: Duration of project + 7 years (for legal compliance)",
        "Communication records: 5 years",
        "Marketing data: Until you withdraw consent or request deletion",
        "Payment records: As required by tax and accounting regulations"
      ]
    },
    {
      icon: AlertCircle,
      title: "Children's Privacy",
      content: [
        "Our services are not directed to individuals under 18 years of age",
        "We do not knowingly collect personal information from children",
        "If we become aware of such collection, we will delete the information immediately",
        "Parents/guardians should contact us if they believe their child has provided information"
      ]
    }
  ];

  return (
    <div className="bg-[#080e1a] text-slate-300 overflow-hidden min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-transparent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="text-primary-600">Policy</span>
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Your privacy and data security are our top priorities
            </p>
            <p className="text-sm text-slate-400">
              Last Updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-transparent">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl"
          >
            <p className="text-slate-300 leading-relaxed">
              At <strong>HumanLens  (Pvt) Ltd – IT Solutions Unit</strong>, we are committed to protecting 
              your privacy and ensuring the security of your personal information. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you use our services or visit 
              our website. By using our services, you agree to the collection and use of information in accordance 
              with this policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-12 bg-transparent">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {section.title}
                    </h2>
                    <ul className="space-y-3">
                      {section.content.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-slate-400"
                        >
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-transparent">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Contact Us About Privacy
            </h2>
            <p className="text-slate-300 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our 
              data practices, please contact us:
            </p>
            <div className="space-y-2 text-slate-300">
              <p><strong>Company:</strong> HumanLens (Pvt) Ltd – IT Solutions Unit (Company Reg No: P V 00368572)</p>
              <p><strong>Email:</strong> info@humanlensmedia.com</p>
              <p><strong>Phone:</strong> 077 651 7595 / 071 442 8393</p>
              <p><strong>Address:</strong> 3637+W8P, Eliot Rd, Galle 80000, Sri Lanka</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card mt-8 bg-transparent"
          >
            <h3 className="text-lg font-bold text-white mb-3">
              Changes to This Privacy Policy
            </h3>
            <p className="text-slate-400">
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last Updated" date. You are 
              advised to review this Privacy Policy periodically for any changes. Changes to this Privacy 
              Policy are effective when they are posted on this page.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
