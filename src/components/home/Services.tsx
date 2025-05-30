import React from 'react';
import { motion } from 'framer-motion';
import { Bot as Lotus, Users, PersonStanding, Globe, Heart } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-lg shadow-card p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-yoga-background rounded-full mb-5 text-yoga-heading">
        {icon}
      </div>
      <h3 className="text-xl font-display font-medium text-yoga-heading mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Group Classes",
      description: "Join our supportive community in guided group sessions designed for all skill levels.",
      icon: <Users size={24} strokeWidth={1.5} />,
      delay: 0.1
    },
    {
      title: "Private Sessions",
      description: "Personalized one-on-one instruction tailored to your specific needs and goals.",
      icon: <PersonStanding size={24} strokeWidth={1.5} />,
      delay: 0.2
    },
    {
      title: "Virtual Classes",
      description: "Experience the benefits of yoga from the comfort of your home with our live online sessions.",
      icon: <Globe size={24} strokeWidth={1.5} />,
      delay: 0.3
    },
    {
      title: "Wellness Consultations",
      description: "Holistic guidance to integrate yoga and mindfulness practices into your daily life.",
      icon: <Heart size={24} strokeWidth={1.5} />,
      delay: 0.4
    }
  ];

  return (
    <section className="section-padding bg-yoga-background">
      <div className="container-custom">
        <SectionHeading 
          title="Our Services" 
          subtitle="Discover a variety of yoga experiences designed to nurture your well-being and support your personal growth."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button to="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;