// Services section
'use client'

import '@/styles/global.css';
import '@/styles/style.css';
import { motion, useInView, Variants } from "motion/react";
import { useRef } from 'react';


const serviceItems = [
  {
    id: 1,
    image: '/images/services/web-design.png',
    title: 'WEB DESIGN & UI',
    description: `Imagination is the best thing we have and we are not afraid to use it in
    your advantage. We offer creative design solutions that enhance user experience and enrich
    the value of your brand. Our analysts and UX/UI designers work with you closely in order
    to deliver custom designs in various forms that match your unique business requirements.
    We deliver ready to use and intuitive design services for websites, brand logos, eCommerce
    stores and enterprise software. Let us help you harness the "power of UX/UI design services"
    and create experiences that your customers will love!`,
    color: 'green'
  },
  {
    id: 2,
    image: '/images/services/development.png',
    title: 'DEVELOPMENT',
    description: `We’ve always been fans of space exploration and we like to think of it in our
    daily business. We offer custom software development services out of this world and help you
    maximise business opportunities with bespoke software solutions. We know the technologies
    that can lift your projects from the ground and we are eager to bring your ideas to life
    working on application design, application prototyping, application development and
    software maintenance. We transform products and services through software innovation,
    build web platforms that leverage latest technologies (machine learning, IoT, blockchain)
    and help companies execute big ideas at the speed of light.`,
    color: 'mov'
  },
  {
    id: 3,
    image: '/images/services/consulting.png',
    title: 'CONSULTING',
    description: `They say we are only as good as the promises we keep and we couldn't agree more when we
    are talking about consultancy. We can offer you IT consultancy on demand and assure you
    this is the best way to get exactly the expertise you need without hiring a permanent team.
    Our IT consultants work carefully with you in order to maximise the effectiveness and
    business impact of your project, helping you meet business objectives and fix problems.`,
    color: 'blue'
  }
];

const Services = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
                duration: 0.5
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    };

    const titleVariants: Variants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };  
  return (
    <section id="services" className="py-16 px-4 bg-white" ref={sectionRef}>
    <div className="container mx-auto">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={titleVariants}
      >
      <h2 className="text-3xl font-bold text-center uppercase mb-2 text-black">Services</h2>
      <hr className="border-t-4 my-6 w-[3%] mx-auto mov" />
      </motion.div>
    <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
    >    
      {serviceItems.map((item) => (
        <motion.div
          key={item.id}
          className="flex flex-col items-center text-stone-500"
          variants={itemVariants}
        >
          <img
            src={item.image}
            alt={`${item.title} image`}
            className=" mx-auto"
          />
          <h4 className={`font-bold text-2xl ${item.color}`}>{item.title}</h4>
          <p>{item.description}</p>
        </motion.div>
      ))}
      </motion.div>  
    </div>
    </section>
  );
};

export default Services;
