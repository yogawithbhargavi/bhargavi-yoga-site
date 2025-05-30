import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import { Award, BookOpen, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/5384538/pexels-photo-5384538.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Yoga Instructor"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>

            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block text-yoga-accent font-medium mb-4"
              >
                About Me
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-display font-medium text-yoga-heading mb-6"
              >
                Sarah Johnson
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-700 mb-6"
              >
                Certified Yoga Instructor with over 10 years of experience in guiding practitioners of all levels through transformative yoga journeys. My approach combines traditional yoga philosophies with modern techniques to create balanced, mindful practices.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-700 mb-6"
              >
                After discovering yoga during a challenging period in my life, I was amazed by its ability to heal and transform both body and mind. This profound experience inspired me to deepen my practice and eventually share these powerful teachings with others.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-1 bg-yoga-accent rounded-full"></div>
                <span className="text-yoga-heading font-display italic">Namaste</span>
              </motion.div>
            </div>
          </div>

          <div className="mb-20">
            <SectionHeading
              title="My Philosophy"
              subtitle="I believe yoga is for everyone, regardless of age, background, or physical ability. My teaching philosophy centers on creating accessible practices that honor each individual's unique journey."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-card"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-yoga-background rounded-full mb-5 text-yoga-heading">
                  <Heart size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-medium text-yoga-heading mb-3">Compassionate Practice</h3>
                <p className="text-gray-600">
                  I teach with empathy and understanding, creating a space where you can practice without judgment and grow at your own pace.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-card"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-yoga-background rounded-full mb-5 text-yoga-heading">
                  <BookOpen size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-medium text-yoga-heading mb-3">Mindful Approach</h3>
                <p className="text-gray-600">
                  My teaching emphasizes the connection between breath, movement, and awareness, creating a meditative flow that calms the mind.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-card"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-yoga-background rounded-full mb-5 text-yoga-heading">
                  <Award size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-medium text-yoga-heading mb-3">Holistic Wellness</h3>
                <p className="text-gray-600">
                  I believe in nurturing the whole person – integrating physical practice with emotional and spiritual well-being.
                </p>
              </motion.div>
            </div>
          </div>

          <div>
            <SectionHeading
              title="Certifications & Training"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-card"
              >
                <h3 className="text-xl font-display font-medium text-yoga-heading mb-3">200-Hour RYT Certification</h3>
                <p className="text-gray-500 mb-3">Yoga Alliance Certified, 2013</p>
                <p className="text-gray-600">
                  Comprehensive training in Hatha and Vinyasa yoga traditions, including anatomy, philosophy, and teaching methodology.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-card"
              >
                <h3 className="text-xl font-display font-medium text-yoga-heading mb-3">300-Hour Advanced Certification</h3>
                <p className="text-gray-500 mb-3">Himalayan Institute, 2016</p>
                <p className="text-gray-600">
                  Advanced studies in yoga philosophy, therapeutic applications, and meditation techniques.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-card"
              >
                <h3 className="text-xl font-display font-medium text-yoga-heading mb-3">Prenatal Yoga Certification</h3>
                <p className="text-gray-500 mb-3">Blooma, 2018</p>
                <p className="text-gray-600">
                  Specialized training in safe and nurturing yoga practices for expectant mothers.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-card"
              >
                <h3 className="text-xl font-display font-medium text-yoga-heading mb-3">Meditation Teacher Training</h3>
                <p className="text-gray-500 mb-3">Insight Meditation Society, 2020</p>
                <p className="text-gray-600">
                  In-depth study of mindfulness meditation techniques and teaching methodologies.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;