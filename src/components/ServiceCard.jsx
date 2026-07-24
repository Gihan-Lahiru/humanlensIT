import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

const ServiceCard = ({ title, description, features, revenueModel, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card hover:scale-105 transition-transform duration-300"
    >
      <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-secondary-600 dark:text-secondary-400 mb-4">
        {description}
      </p>
      
      {revenueModel && (
        <div className="mb-4 p-3 rounded-lg bg-primary-50 dark:bg-secondary-700/50 border border-primary-200 dark:border-secondary-600">
          <div className="flex items-start">
            <DollarSign className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold mb-1 text-primary-600 dark:text-primary-400">
                Revenue Model
              </p>
              <p className="text-sm text-secondary-700 dark:text-secondary-300">
                {revenueModel}
              </p>
            </div>
          </div>
        </div>
      )}
      
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start space-x-2 text-sm text-secondary-700 dark:text-secondary-300"
            >
              <span className="text-primary-500 mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default ServiceCard;
