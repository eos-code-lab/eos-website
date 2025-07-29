'use client'

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

const ourStoryItem = {
  id: 1,
  image: '/images/services/our-story.png',
  title: 'BEST OF OUR FEATURES',
  description: [
    {
      id: 1,
      description:
        'We are a fearless software company based in Bucharest, Romania, founded in 2015 by a pasionate software engineer who loves traveling through the digital galaxy.',
    },
    {
      id: 2,
      description:
        'We are always looking for entertaining things to do and for us every project is an opportunity to innovate and make things better, faster, smarter.',
    },
    {
      id: 3,
      description:
        'If you join us, you’ll be amazed by our space ship’s speed. Every task is an opportunity to improve the things around us. We want to show you a place where no man has gone before.',
    },
    {
      id: 4,
      description: 'Come and join us to the light',
    },
  ],
};

const OurStory = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="our-story" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left p-6 md:pr-12 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h2
              className="text-3xl font-bold uppercase mb-2 text-black"
              variants={textVariants}
            >
              {ourStoryItem.title}
            </motion.h2>
            <motion.hr className="border-t-4 my-3 w-[10%] green" variants={textVariants}/>
            <motion.ul className="space-y-4 text-gray-600" variants={textVariants}>
              {ourStoryItem.description.map((item) => (
                <motion.li
                  key={item.id}
                  className="text-base mr-8"
                  variants={textVariants}
                >
                  {item.description}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center relative min-h-[300px] md:min-h-[500px]"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <img
              src={ourStoryItem.image}
              alt="Our Story"
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
