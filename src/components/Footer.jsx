import React from 'react';
import logoSrc from '../assets/logo.png'; // Ensure the correct path to your logo file

const Footer = () => {
    return (
        <footer className="bg-[#4F2F1D] text-white py-10">
            <div className="container mx-auto">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    {/* Logo and Description */}
                    <div className="text-center md:text-left">
                        <img src={logoSrc} alt="Punjabi Matrimony Logo" className="h-24 mb-4 mx-auto md:mx-0" /> {/* Increased size */}
                        <p className="text-sm text-gray-300 mt-2 max-w-md">
                            Find your perfect life partner on our trusted platform. We bring love and connection closer for the Punjabi community.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
                        <a href="#" className="hover:text-gray-400 transition duration-300">Home</a>
                        <a href="#" className="hover:text-gray-400 transition duration-300">About Us</a>
                        <a href="#" className="hover:text-gray-400 transition duration-300">Services</a>
                        <a href="#" className="hover:text-gray-400 transition duration-300">Contact</a>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-gray-500"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; 2025 PunjabiMatrimony. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
