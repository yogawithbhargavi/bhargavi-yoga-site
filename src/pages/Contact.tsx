import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      submitted: false,
      error: false,
      message: '',
      loading: true,
    });
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.',
        loading: false,
      });
      return;
    }

    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbwuPaz3eOTBVqoZEyMmXs2KH1b-hZBW0Xfmz0Gm3tPM-BXMcadHAB1DJj1UAP23icPV/exec';
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          ...formData,
          timestamp: new Date().toISOString(),
        }).toString(),
      });

      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! We will contact you soon.',
        loading: false,
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'There was an error submitting your form. Please try again later.',
        loading: false,
      });
    }
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <SectionHeading
            title="Get in Touch"
            subtitle="Have questions or ready to begin your yoga journey? Contact us to learn more about our classes and services."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-card p-8">
                <h3 className="text-2xl font-display font-medium text-yoga-heading mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center bg-yoga-background rounded-full shrink-0 mr-4 text-yoga-heading">
                      <MapPin size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-yoga-heading mb-1">Studio Address</h4>
                      <address className="not-italic text-gray-600">
                        123 Serenity Lane<br />
                        Peaceful City, PC 12345
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center bg-yoga-background rounded-full shrink-0 mr-4 text-yoga-heading">
                      <Phone size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-yoga-heading mb-1">Phone</h4>
                      <p className="text-gray-600">
                        <a href="tel:+1234567890" className="hover:text-yoga-accent transition-colors">
                          (123) 456-7890
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center bg-yoga-background rounded-full shrink-0 mr-4 text-yoga-heading">
                      <Mail size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-yoga-heading mb-1">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:info@Bhargavi yoga.com" className="hover:text-yoga-accent transition-colors">
                          info@Bhargavi yoga.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center bg-yoga-background rounded-full shrink-0 mr-4 text-yoga-heading">
                      <Clock size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-yoga-heading mb-1">Studio Hours</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>Monday - Friday: 6:00 AM - 8:00 PM</li>
                        <li>Saturday: 8:00 AM - 6:00 PM</li>
                        <li>Sunday: 9:00 AM - 2:00 PM</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-card p-8">
                <h3 className="text-2xl font-display font-medium text-yoga-heading mb-6">
                  Send a Message
                </h3>
                
                {formStatus.submitted ? (
                  <div className="p-4 bg-yoga-success bg-opacity-10 text-yoga-success rounded-lg">
                    {formStatus.message}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {formStatus.error && (
                      <div className="p-4 bg-yoga-error bg-opacity-10 text-yoga-error rounded-lg mb-4">
                        {formStatus.message}
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Name <span className="text-yoga-error">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email <span className="text-yoga-error">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 mb-2">
                        Message <span className="text-yoga-error">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="input-field resize-none"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn btn-primary w-full text-center"
                      disabled={formStatus.loading}
                    >
                      {formStatus.loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;