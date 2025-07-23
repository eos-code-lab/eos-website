// Partners section
'use client'

import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

// Partner data
const partners = [
    {
        id: 1,
        name: 'Eau de Web',
        logo: '/images/partners/eaudeweb.png',
        url: 'http://www.eaudeweb.ro/'
    },
    {
        id: 2,
        name: 'Aquavita',
        logo: '/images/partners/logo-aqv.svg',
        url: 'http://www.aqv.ro/'
    },
    {
        id: 3,
        name: 'Terrasigna',
        logo: '/images/partners/terrasigna.png',
        url: 'http://www.terrasigna.com/'
    }
];

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
                ease: "easeOut"
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
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <section id="our-partners" className="py-16 bg-gray-50" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={titleVariants}
                >
                    <h2 className="text-3xl font-bold uppercase mb-2">Our Partners</h2>
                    <hr className="w-24 h-1 bg-purple-500 mx-auto" /> {/* mov-line equivalent */}
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {partners.map((partner) => (
                        <motion.div
                            key={partner.id}
                            className="w-full flex justify-center"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-64 h-40 relative"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
