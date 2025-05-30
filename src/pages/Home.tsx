import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <Hero />
      <Services />
      <Testimonials />
      <CallToAction />
    </PageTransition>
  );
};

export default Home;