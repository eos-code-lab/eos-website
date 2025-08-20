'use client'

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faCubes, 
  faExpandArrowsAlt, 
  faCode,
  faRing
} from '@fortawesome/free-solid-svg-icons';
import { 
  faDrupal
} from '@fortawesome/free-brands-svg-icons';
import FeatureCard from '../ui/FeatureCard';

const featureItems = {
  image: '/images/services/our-features.png',
  items: [
    {
      id: 1,
      icon: 'fa-users',
      title: 'DEVELOPERS & USERS UNITED',
      description:
        'In our world, developers and users are working in the same universe and this can offer you the best solutions for your needs. You’ll be amazed step by step.',
    },
    {
      id: 2,
      icon: 'fa-drupal',
      title: 'DRUPAL DEVELOPMENT',
      description:
        'No matter the challenge, we speak the Drupal language and we can deliver a high-quality digital user experience. We are strong Drupal developers with frontend, backend and site building skills and we can deliver you outstanding end-products.',
    },
    {
      id: 3,
      icon: 'fa-cubes',
      title: 'CUSTOM APPLICATION DEVELOPMENT',
      description:
        'All you need is love and our custom application development. We know the technologies that can lift your projects from the ground and how to adapt them just for you.',
    },
    {
      id: 4,
      icon: 'fa-code ',
      title: 'CODED TO PERFECTION',
      description:
        'You know that moment when you think that something is finished, but you have to do one more thing? We are not afraid of doing one more thing again and again, until everything is perfect. Yes, we are perfectionists and we are proud of it!',
    },
    {
      id: 5,
      icon: 'fa-expand-arrows-alt',
      title: 'MODERN, RESPONSIVE DESIGN',
      description:
        'We only know how to imagine a modern and responsive design, and after that how to make it alive and kicking. For us it’s the only way.',
    },
    {
      id: 6,
      icon: 'far fa-life-ring',
      title: 'OUTSTANDING SUPPORT',
      description:
        'Do you need all inclusive support for your projects? Or after some time do you need someone who can offer you advice, training and an instruction manual? We can do that in a professional way and at supersonic speeds.',
    }
  ],
};

const Features = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Animation variants
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
<section id="features" className="py-16 bg-white" ref={sectionRef}>
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-stretch">
      
      <motion.div 
        className="hidden lg:flex w-full lg:w-1/2 items-center justify-center relative"
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="w-full">
          <div className="relative h-full flex items-center justify-center">
            <img
              src={featureItems.image}
              alt="Our Features"
              className="object-contain max-h-[50%]"
              style={{ maxHeight: "50%" }}
            />
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="w-full lg:w-1/2 p-4 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {featureItems.items.map((item) => (
    <FeatureCard 
      key={item.id}
      id={item.id}
      icon={item.icon}
      title={item.title}
      description={item.description}
      variants={itemVariants}
    />
  ))}
</div>

      </motion.div>
    </div>
  </div>
</section>


  );
};

export default Features;
