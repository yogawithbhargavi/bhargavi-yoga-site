import React from 'react';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/services/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      title: "Group Classes",
      description: "Join our supportive community in guided group sessions designed for all skill levels.",
      image: "https://images.pexels.com/photos/8436614/pexels-photo-8436614.jpeg?auto=compress&cs=tinysrgb&w=1600",
      price: "$20 per class / $80 monthly",
      features: [
        "60-minute sessions",
        "Suitable for all levels",
        "Limited to 12 participants",
        "Equipment provided"
      ],
      delay: 0.1
    },
    {
      title: "Private Sessions",
      description: "Personalized one-on-one instruction tailored to your specific needs and goals.",
      image: "https://images.pexels.com/photos/3822353/pexels-photo-3822353.jpeg?auto=compress&cs=tinysrgb&w=1600",
      price: "$75 per session / $280 for 4",
      features: [
        "75-minute sessions",
        "Customized practice",
        "Flexible scheduling",
        "Progress tracking"
      ],
      delay: 0.2
    },
    {
      title: "Virtual Classes",
      description: "Experience the benefits of yoga from the comfort of your home with our live online sessions.",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1600",
      price: "$15 per class / $60 monthly",
      features: [
        "60-minute sessions",
        "Live instruction",
        "Recording available",
        "Convenient at-home practice"
      ],
      delay: 0.3
    },
    {
      title: "Wellness Consultations",
      description: "Holistic guidance to integrate yoga and mindfulness practices into your daily life.",
      image: "https://images.pexels.com/photos/5012071/pexels-photo-5012071.jpeg?auto=compress&cs=tinysrgb&w=1600",
      price: "$90 per consultation",
      features: [
        "90-minute session",
        "Personalized wellness plan",
        "Nutritional guidance",
        "Follow-up support"
      ],
      delay: 0.4
    }
  ];

  const workshops = [
    {
      title: "Mindful Meditation Workshop",
      description: "Learn essential meditation techniques to cultivate awareness and inner peace.",
      image: "https://images.pexels.com/photos/3759659/pexels-photo-3759659.jpeg?auto=compress&cs=tinysrgb&w=1600",
      price: "$45 per workshop",
      features: [
        "3-hour intensive session",
        "Practical meditation tools",
        "Take-home materials",
        "Small group setting"
      ],
      delay: 0.1
    },
    {
      title: "Yoga for Stress Relief",
      description: "Specialized techniques and practices focused on managing anxiety and reducing stress.",
      image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1600",
      price: "$45 per workshop",
      features: [
        "3-hour workshop",
        "Breathing techniques",
        "Gentle movement practices",
        "Relaxation methods"
      ],
      delay: 0.2
    }
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <SectionHeading
            title="Our Services"
            subtitle="Discover a variety of yoga experiences designed to nurture your well-being and support your personal growth."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                price={service.price}
                features={service.features}
                delay={service.delay}
              />
            ))}
          </div>

          <SectionHeading
            title="Special Workshops"
            subtitle="Deepen your practice with our specialized workshops focusing on specific aspects of yoga and mindfulness."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <ServiceCard
                key={index}
                title={workshop.title}
                description={workshop.description}
                image={workshop.image}
                price={workshop.price}
                features={workshop.features}
                delay={workshop.delay}
              />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;