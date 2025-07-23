// Company story section

'use client'

import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

const OurStory = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    };

    const textVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, x: 50 },
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

    return (
        <section id="our-story" className="py-16 bg-gray-50" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    {/* Text content */}
                    <motion.div 
                        className="w-full md:w-1/2 text-center md:text-left p-6 md:pr-12 flex flex-col justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.h2 
                            className="text-3xl font-bold uppercase mb-2"
                            variants={textVariants}
                        >
                            Our Story
                        </motion.h2>
                        <motion.hr 
                            className="w-24 h-1 bg-green-500 mb-6 md:mx-0 mx-auto" 
                            variants={textVariants}
                        />
                        <div className="space-y-4">
                            <motion.p 
                                className="text-gray-600"
                                variants={textVariants}
                            >
                                We are a fearless software company based in Bucharest, Romania, founded in 2015 by a passionate software engineer who loves traveling through the digital galaxy.
                            </motion.p>
                            <motion.p 
                                className="text-gray-600"
                                variants={textVariants}
                            >
                                We are always looking for entertaining things to do and for us every project is an opportunity to innovate and make things better, faster, smarter.
                            </motion.p>
                            <motion.p 
                                className="text-gray-600"
                                variants={textVariants}
                            >
                                If you join us, you'll be amazed by our space ship's speed. Every task is an opportunity to improve the things around us. We want to show you a place where no man has gone before.
                            </motion.p>
                            <motion.p 
                                className="text-gray-600"
                                variants={textVariants}
                            >
                                Come and join us to the light side!
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div 
                        className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px]"
                        variants={imageVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <Image
                            src="/images/services/our-story.png"
                            alt="Our story"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={90}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default OurStory;
