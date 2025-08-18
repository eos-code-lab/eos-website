"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import ColoredLine from "@/components/ui/ColoredLine";
import PartnerCard from "../ui/PartnerLogo";

const partnerItem = {
  title: "OUR PARTNERS",
  images: [
    {
      id: 1,
      image: "/images/partners/terrasigna.png",
      link: "http://www.terrasigna.com/",
    },
    {
      id: 2,
      image: "/images/partners/eaudeweb.png",
      link: "http://www.eaudeweb.ro//",
    },
    {
      id: 3,
      image: "/images/partners/aquavita.png",
      link: "http://www.aqv.ro/",
    },
  ],
};

const Partners = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Animation variants
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="our-partners" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="text-center container mx-auto px-4 ">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-2xl md:text-2xl font-bold text-black mb-2">
            {partnerItem.title}
          </h2>
          <ColoredLine
            color="mov"
            width="[3%]"
            animate={true}
            variants={itemVariants}
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center partners img"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {partnerItem.images.map((img) => (
            <PartnerCard
              key={img.id}
              id={img.id}
              image={img.image}
              link={img.link}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
