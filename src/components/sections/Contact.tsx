// Contact section
'use client'

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import ColoredLine from '@/components/ui/ColoredLine';

const Contact = () => {
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

  return (
    <section id="contact-us" className="text-center py-10 px-4" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3 className="text-2xl md:text-2xl font-bold text-black mb-2" variants={itemVariants}>CONTACT US</motion.h3>

          <ColoredLine color="blue" width="[3%]" animate={true} variants={itemVariants} />

          <motion.p className="text-black" variants={itemVariants}>ASK US FOR AN ESTIMATE</motion.p>
          <motion.p className="mb-2 text-black" variants={itemVariants}>
            Tell us about the project you want to bring to life and you will receive an estimate that meets your needs and your budget. And your imagination!
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center space-y-2 text-gray-500 mb-10"
            variants={itemVariants}
          >
            <a
              href="mailto:office@eoscodelab.com"
              className="flex items-center hover:underline transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              office@eoscodelab.com
            </a>
            <a
              href="tel:+40-745-940-499"
              className="flex items-center hover:underline transition-colors"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +40-745-940-499
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


export default Contact;
