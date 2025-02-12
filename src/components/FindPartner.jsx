import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logoSrc from '../assets/logo.png';
import profileIcon from '../assets/profile.png';
import LoginModal from './LoginModal';
import dummyData from './dummyData';
import Footer from './Footer'; // Importing the footer component

const FindPartner = () => {
    const [filters, setFilters] = useState({
        gender: '',
        caste: '',
        manglik: '',
        maritalStatus: '',
        religion: ''
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProfile, setSelectedProfile] = useState(null);

    const navigate = useNavigate();
    const { isAuthenticated, showLoginModal, toggleLoginModal, login } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            toggleLoginModal();
        }
    }, [isAuthenticated]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const handleClearFilters = () => {
        setFilters({
            gender: '',
            caste: '',
            manglik: '',
            maritalStatus: '',
            religion: ''
        });
        setSearchTerm('');
    };

    const handleProfileClick = (profile) => {
        navigate(`/profile/${profile.id}`);
    };

    const filteredData = dummyData.filter(item => {
        return (
            (filters.gender === '' || item.gender === filters.gender) &&
            (filters.caste === '' || item.caste === filters.caste) &&
            (filters.manglik === '' || item.manglik === filters.manglik) &&
            (filters.maritalStatus === '' || item.maritalStatus === filters.maritalStatus) &&
            (filters.religion === '' || item.religion === filters.religion) &&
            (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] flex flex-col justify-between relative">
            {/* Solid Color Header */}
            <div className="w-full p-4 bg-[#4F2F1D] shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <img src={logoSrc} alt="Punjabi Matrimony Logo" className="h-16" />
                    </div>
                    {/* Navigation Links */}
                    <nav className="flex space-x-4">
                        <a href="#" onClick={() => navigate('/')} className="text-white hover:text-gray-400 transition duration-300">Home</a>
                        <a href="#" className="text-white hover:text-gray-400 transition duration-300">About Us</a>
                        <a href="#" className="text-white hover:text-gray-400 transition duration-300">Services</a>
                        <a href="#" className="text-white hover:text-gray-400 transition duration-300">Contact</a>
                    </nav>
                    {/* Buttons */}
                    <div>
                        {isAuthenticated ? (
                            <img
                                src={profileIcon}
                                alt="Profile"
                                className="h-10 w-10 rounded-full cursor-pointer"
                                onClick={() => navigate('/profile')}
                            />
                        ) : (
                            <>
                                <button className="bg-transparent border-2 border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300" onClick={() => toggleLoginModal()}>Login</button>
                                <button className="ml-4 bg-transparent border-2 border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300" onClick={() => toggleLoginModal()}>Sign Up</button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex flex-grow">
                {/* Sidebar for Filters */}
                <div className="w-1/4 p-8 bg-white shadow-lg sticky top-0 h-screen overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#4F2F1D' }}>
                        Filters
                    </h2>
                    {["Gender", "Caste", "Manglik", "Marital Status", "Religion"].map((label, index) => {
                        const name = label.toLowerCase().replace(" ", "");
                        return (
                            <div className="mb-4" key={index}>
                                <label className="block text-[#4F2F1D] mb-2 font-semibold">{label}</label>
                                <select
                                    name={name}
                                    value={filters[name]}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-[#D1BFA7] rounded focus:outline-none focus:ring-2 focus:ring-[#990000]"
                                >
                                    <option value="">Select {label}</option>
                                    {["male", "female", "khatri", "arora", "multani", "brahmin", "other", "manglik", "partial_manglik", "non_manglik", "never_married", "divorced", "widow_widower", "awaiting_divorce", "annulled", "hindu", "sikh", "jain", "buddhist"]
                                        .map(option => (
                                            <option key={option} value={option}>
                                                {option.replace("_", " ")}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        );
                    })}
                    <button
                        className="bg-[#990000] hover:bg-[#800000] text-white font-bold py-2 px-4 rounded-md transition duration-300"
                        onClick={handleClearFilters}
                    >
                        Clear Filters
                    </button>
                </div>

                {/* Main Content for Search Results */}
                <div className="w-3/4 p-8">
                    <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#4F2F1D' }}>
                        Search Results
                    </h2>
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-3 border border-[#D1BFA7] rounded focus:outline-none focus:ring-2 focus:ring-[#990000]"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {filteredData.map(item => (
                            <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-102 cursor-pointer" onClick={() => handleProfileClick(item)}>
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full mr-6" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#4F2F1D' }}>
                                            {item.name}
                                        </h3>
                                        <p className="text-[#4F2F1D] mb-1"><strong>Age:</strong> {item.age}</p>
                                        <p className="text-[#4F2F1D] mb-1"><strong>Religion:</strong> {item.religion}</p>
                                        <p className="text-[#4F2F1D] mb-1"><strong>Marital Status:</strong> {item.maritalStatus}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />

            {/* Login Modal */}
            {!isAuthenticated && showLoginModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
                    <LoginModal onClose={toggleLoginModal} onLogin={login} />
                </div>
            )}
        </div>
    );
};

export default FindPartner;