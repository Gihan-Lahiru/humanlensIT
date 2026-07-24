import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({
  title,
  subtitle,
  align = 'center',
  titleClassName = '',
  subtitleClassName = '',
  titleStyle = {},
  subtitleStyle = {},
  fullWidth = false,
}) => {
  const alignClass = align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right';
  const maxWidthClass = fullWidth ? 'max-w-full' : 'max-w-3xl';

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 pt-0 ${alignClass}`}
    >
      <h2 className={`section-title ${titleClassName}`} style={titleStyle}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${maxWidthClass} mx-auto ${subtitleClassName}`} style={subtitleStyle}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
