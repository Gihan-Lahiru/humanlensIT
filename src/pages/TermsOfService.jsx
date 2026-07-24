import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, CheckCircle, XCircle, DollarSign, Shield, Scale, Users } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = "October 23, 2025";

  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using our services, you agree to be bound by these Terms of Service",
        "If you do not agree with any part of these terms, you may not use our services",
        "We reserve the right to modify these terms at any time",
        "Continued use of services after modifications constitutes acceptance of new terms",
        "These terms apply to all users, clients, and visitors of our services"
      ]
    },
    {
      icon: Users,
      title: "Services Provided",
      content: [
        "Web Design & Development - Custom websites and web applications",
        "Mobile & Web Applications - iOS, Android, and cross-platform solutions",
        "Software Solutions - Custom business software and systems",
        "Digital Consultation - IT strategy and technical guidance",
        "Maintenance & Hosting - Ongoing support and hosting services",
        "Training & Workshops - Technology education and skill development",
        "Services are provided as described in project proposals and agreements"
      ]
    },
    {
      icon: FileText,
      title: "Project Agreements",
      content: [
        "All projects require a signed agreement or contract",
        "Project scope, deliverables, and timelines will be clearly defined",
        "Changes to project scope may result in additional costs and timeline adjustments",
        "Both parties must approve scope changes in writing",
        "Project milestones and payment schedules will be outlined in agreements",
        "Clients must provide necessary materials and information in a timely manner"
      ]
    },
    {
      icon: DollarSign,
      title: "Payment Terms",
      content: [
        "Payment terms will be specified in individual project agreements",
        "Typical structure: Initial deposit (30-50%), milestone payments, final payment",
        "Invoices are due within the timeframe specified (typically 7-14 days)",
        "Late payments may incur interest charges and project delays",
        "Final deliverables will be released upon receipt of final payment",
        "Subscription services are billed monthly or annually as agreed",
        "All prices are in Sri Lankan Rupees (LKR) unless otherwise stated"
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property Rights",
      content: [
        "Upon full payment, clients receive ownership of custom-developed deliverables",
        "HumanLens Media retains rights to pre-existing materials and frameworks",
        "Third-party licenses (software, images, fonts) are client's responsibility",
        "We retain the right to showcase completed projects in our portfolio",
        "Clients must not resell or redistribute our proprietary tools or code",
        "Any code or content provided by the client remains their property"
      ]
    },
    {
      icon: Shield,
      title: "Confidentiality",
      content: [
        "We maintain strict confidentiality of all client information and projects",
        "Non-disclosure agreements (NDAs) available upon request",
        "Client data will not be shared with third parties without consent",
        "Employees and contractors are bound by confidentiality agreements",
        "Project details may be disclosed if required by law",
        "Clients should also maintain confidentiality of our business processes"
      ]
    },
    {
      icon: AlertCircle,
      title: "Warranties and Disclaimers",
      content: [
        "We provide a warranty period for bug fixes (typically 30-90 days post-delivery)",
        "Services are provided 'as is' without warranties beyond those explicitly stated",
        "We do not guarantee specific business results or revenue increases",
        "Third-party integrations and services are not covered by our warranty",
        "Client-provided content and data accuracy is the client's responsibility",
        "We are not liable for issues caused by client modifications or third-party actions"
      ]
    },
    {
      icon: XCircle,
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the amount paid for the specific service",
        "We are not liable for indirect, incidental, or consequential damages",
        "Not responsible for data loss due to client's failure to maintain backups",
        "Not liable for downtime caused by third-party services or force majeure",
        "Client is responsible for their own data backups and security measures",
        "Maximum liability does not exceed the total project or annual subscription value"
      ]
    },
    {
      icon: XCircle,
      title: "Termination and Cancellation",
      content: [
        "Either party may terminate services with written notice as per agreement",
        "Clients must pay for all work completed up to termination date",
        "Refunds are provided only as specified in individual agreements",
        "We reserve the right to terminate services for breach of terms",
        "Subscription services can be cancelled with 30 days' notice",
        "Early termination fees may apply for long-term contracts",
        "All deliverables and access will be provided based on payment status"
      ]
    },
    {
      icon: Users,
      title: "Client Responsibilities",
      content: [
        "Provide accurate information and materials in a timely manner",
        "Respond to requests for feedback and approval within agreed timeframes",
        "Ensure all provided content is legal and does not infringe rights",
        "Maintain confidentiality of login credentials and access information",
        "Pay invoices on time as per agreed payment terms",
        "Communicate changes or concerns promptly",
        "Comply with all applicable laws and regulations"
      ]
    },
    {
      icon: Shield,
      title: "Data Protection and Privacy",
      content: [
        "We comply with applicable data protection laws and regulations",
        "Client data is processed in accordance with our Privacy Policy",
        "We implement appropriate security measures to protect data",
        "Clients are responsible for their own compliance with data protection laws",
        "Data processing agreements available for GDPR or similar requirements",
        "We do not sell or share client data with third parties"
      ]
    },
    {
      icon: Scale,
      title: "Dispute Resolution",
      content: [
        "Both parties agree to attempt resolution through good faith negotiations",
        "Mediation may be sought before legal proceedings",
        "Disputes will be governed by the laws of Sri Lanka",
        "Legal jurisdiction is in the courts of Sri Lanka",
        "Arbitration may be used as an alternative dispute resolution method",
        "Legal fees may be awarded to the prevailing party"
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="text-primary-600">Service</span>
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Clear terms and conditions for using our IT services
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
              Welcome to <strong>HumanLens  (Pvt) Ltd – IT Solutions Unit</strong>. These Terms of Service 
              ("Terms") govern your use of our services, including web development, software solutions, consulting, 
              and all related offerings. Please read these terms carefully before engaging our services. By using 
              our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-12 bg-transparent">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
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
              Contact Us
            </h2>
            <p className="text-slate-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
              Agreement
            </h3>
            <p className="text-slate-400">
              By using our services, you acknowledge that you have read these Terms of Service and agree 
              to be bound by them. These terms constitute a legally binding agreement between you and 
              HumanLens  (Pvt) Ltd. If you are entering into this agreement on behalf of a company 
              or other legal entity, you represent that you have the authority to bind such entity to these terms.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
