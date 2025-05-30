import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  price,
  features,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-lg shadow-card overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-medium text-yoga-heading mb-2">
          {title}
        </h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-yoga-accent text-xl font-medium mb-4">{price}</p>
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-5 h-5 bg-yoga-background rounded-full flex-shrink-0 mr-2 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Button to="/contact" variant="primary" className="w-full">
          Book Now
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;