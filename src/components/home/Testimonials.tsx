import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Yoga Practitioner",
    quote: "Serene Yoga has transformed not just my practice, but my entire approach to life. The personalized attention and expert guidance have helped me grow in ways I never thought possible.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Stress Management Client",
    quote: "After months of stress and anxiety, I found Serene Yoga. The peaceful environment and mindful approach have given me tools to manage my stress and find balance in my busy life.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Virtual Class Student",
    quote: "Even though I attend classes virtually, I feel completely connected to the practice and the community. The instructor's guidance is clear and thoughtful, making each session a highlight of my week.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="section-padding bg-yoga-testimonial">
      <div className="container-custom">
        <SectionHeading 
          title="What Our Students Say" 
          subtitle="Hear from those who have experienced the transformative power of our yoga practice."
          centered
        />
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-card p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="shrink-0">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-yoga-background"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-yoga-accent mb-4">
                    <Quote size={32} strokeWidth={1.5} />
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    {testimonials[activeIndex].quote}
                  </p>
                  <div>
                    <h4 className="font-display text-yoga-heading text-lg font-medium">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-500">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-yoga-accent' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 bg-white rounded-full p-2 shadow-md text-yoga-heading hover:text-yoga-accent transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 bg-white rounded-full p-2 shadow-md text-yoga-heading hover:text-yoga-accent transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;