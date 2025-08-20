// Site footer

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const curretYear = new Date().getFullYear();

    return (
        <footer className="bg-black bg-opacity-90 text-white py-4">
            <div className="md:container md:mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="mb-4 md:mb-0">
                        <small className="font-bold">&copy; {curretYear} EOS CODE LAB - All Rights Reserved.</small>
                    </p>
                    <div>
                        <ul className="flex space-x-4">
                            <li>
                                <a 
                                    target="_blank" 
                                    href="https://www.facebook.com/EOSCodeLab/"
                                >
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li>
                                <a 
                                    target="_blank" 
                                    href="https://twitter.com/CodeEos/"
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a 
                                    target="_blank" 
                                    href="https://www.linkedin.com/company/eos-code-lab/"
                                >
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </li>
                            <li>
                            <Link 
                                    href="#" 
                                    className="text-white hover:text-gray-300"
                                >
                                    <FontAwesomeIcon icon={faArrowCircleUp} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;