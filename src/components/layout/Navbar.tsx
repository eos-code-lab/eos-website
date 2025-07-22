// Navigation bar
'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo.png"
                                alt="EOS CODE LAB"
                                width={150}
                                height={150}
                                className="h-auto"
                            />
                            <span className='ml-2 text-white font-bold text-xl'>CODE LAB</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            type="button" 
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            <svg 
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Icon when menu is open */}
                            <svg 
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                        <Link href="#services" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                                <strong>SERVICES</strong>
                            </Link>
                            <Link href="#best-of" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                                <strong>OUR STORY</strong>
                            </Link>
                            <Link href="#our-partners" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                                <strong>PARTNERS</strong>
                            </Link>
                            <Link href="#contact-us" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                                <strong>LET'S TALK</strong>
                            </Link>
                            <a href="https://www.facebook.com/EOSCodeLab/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 px-3 py-2">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://twitter.com/CodeEos/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 px-3 py-2">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.linkedin.com/company/eos-code-lab/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 px-3 py-2">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile menu, show/hide based on menu state */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-90">
                    <Link href="#services" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md font-medium">
                        <strong>SERVICES</strong>
                    </Link>
                    <Link href="#best-of" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md font-medium">
                        <strong>OUR STORY</strong>
                    </Link>
                    <Link href="#our-partners" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md font-medium">
                        <strong>PARTNERS</strong>
                    </Link>
                    <Link href="#contact-us" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md font-medium">
                        <strong>LET'S TALK</strong>
                    </Link>
                    <div className="flex space-x-4 px-3 py-2">
                        <a href="https://www.facebook.com/EOSCodeLab/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://twitter.com/CodeEos/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.linkedin.com/company/eos-code-lab/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

 export default Navbar;