import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-yoga-heading text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0" 
        style={{ backgroundImage: "url('https://images.pexels.com/photos/8436589/pexels-photo-8436589.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}
      />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-medium mb-6"
          >
            Begin Your Yoga Journey Today
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl opacity-90 mb-8"
          >
            Transform your mind, body, and spirit through our nurturing yoga practices. Whether you're a beginner or experienced practitioner, our classes are designed to meet you where you are.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              to="/contact" 
              variant="primary" 
              className="bg-yoga-accent hover:bg-opacity-90 text-white px-8 py-4"
            >
              Book Your First Class
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;