'use client'

// Contact section
import { useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');

        try {
            // In a real implementation, you would send this data to your API route
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData),
            // });
            
            // if (!response.ok) throw new Error('Failed to submit form');
            
            // Simulate API call for now
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setFormStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Reset form status after 3 seconds
            setTimeout(() => {
                setFormStatus('idle');
            }, 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormStatus('error');
            
            // Reset form status after 3 seconds
            setTimeout(() => {
                setFormStatus('idle');
            }, 3000);
        }
    };

    return (
        <section id="contact-us" className="py-16 bg-white" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-12"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-3xl font-bold uppercase mb-2"
                        variants={itemVariants}
                    >
                        Contact Us
                    </motion.h2>
                    <motion.hr 
                        className="w-24 h-1 bg-blue-500 mx-auto mb-6" 
                        variants={itemVariants}
                    />
                    <motion.p 
                        className="text-lg font-semibold mb-2"
                        variants={itemVariants}
                    >
                        ASK US FOR AN ESTIMATE
                    </motion.p>
                    <motion.p 
                        className="max-w-2xl mx-auto mb-8"
                        variants={itemVariants}
                    >
                        Tell us about the project you want to bring to life and you will receive an estimate that meets your needs and your budget. And your imagination!
                    </motion.p>
                    <motion.div 
                        className="flex flex-col items-center justify-center space-y-2 text-gray-600 mb-10"
                        variants={itemVariants}
                    >
                        <a 
                            href="mailto:office@eoscodelab.com" 
                            className="flex items-center hover:text-blue-500 transition-colors"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            office@eoscodelab.com
                        </a>
                        <a 
                            href="tel:+40-745-940-499" 
                            className="flex items-center hover:text-blue-500 transition-colors"
                        >
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            +40-745-940-499
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="max-w-2xl mx-auto"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.form 
                        onSubmit={handleSubmit}
                        className="bg-white rounded-lg shadow-lg p-8"
                        variants={itemVariants}
                    >
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={formStatus === 'submitting'}
                            className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${
                                formStatus === 'submitting' 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-blue-500 hover:bg-blue-600'
                            }`}
                        >
                            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                        
                        {formStatus === 'success' && (
                            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                        
                        {formStatus === 'error' && (
                            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                                There was an error sending your message. Please try again.
                            </div>
                        )}
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
