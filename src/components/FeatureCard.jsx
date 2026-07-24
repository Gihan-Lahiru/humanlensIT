import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card text-center hover:scale-105 transition-transform duration-300"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-secondary-600 dark:text-secondary-400">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
