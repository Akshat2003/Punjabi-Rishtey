import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const MembershipPage = () => {
  const plans = [
    {
      title: "Free",
      price: "₹0",
      perMonth: "/month",
      features: [
        { text: "5 Premium Profiles view /mo", available: false },
        { text: "Free user profile can view", available: true },
        { text: "View contact details", available: false },
        { text: "Send interest", available: false },
        { text: "Start Chat", available: false },
      ],
      buttonText: "Get Started",
    },
    {
      title: "Gold",
      price: "₹349",
      perMonth: "/month",
      features: [
        { text: "20 Premium Profiles view /mo", available: true },
        { text: "Free user profile can view", available: true },
        { text: "View contact details", available: true },
        { text: "Send interest", available: true },
        { text: "Start Chat", available: true },
      ],
      buttonText: "Get Started",
      badge: "Most Popular",
    },
    {
      title: "Platinum",
      price: "₹549",
      perMonth: "/month",
      features: [
        { text: "50 Premium Profiles view /mo", available: true },
        { text: "Free user profile can view", available: true },
        { text: "View contact details", available: true },
        { text: "Send interest", available: true },
        { text: "Start Chat", available: true },
      ],
      buttonText: "Get Started",
    },
  ];

  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0 
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    }
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 px-6">
        <h2
          className="text-5xl text-center mb-12 text-[#111111]"
          style={{ fontFamily: "'Tiempos Headline', serif", fontWeight: 400 }}
        >
          Choose Your Perfect Plan
        </h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`relative w-full md:w-[380px] p-8 rounded-lg shadow-lg hover:ring-2 hover:ring-[#FF3D57] bg-[#FEEAEA]`}
          >
           {plan.badge && (
  <div 
    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF3D57] text-white px-4 py-1 rounded-full z-10"
    style={{ 
      fontFamily: "'Modern Era', sans-serif", 
      fontWeight: 400
    }}
  >
    {plan.badge}
  </div>
)}

              <h3
                className="text-2xl mb-4 text-[#111111]"
                style={{ fontFamily: "'Tiempos Headline', serif", fontWeight: 400 }}
              >
                {plan.title}
              </h3>
              <p
                className="text-3xl mb-2 text-[#FF3D57]"
                style={{ fontFamily: "'Tiempos Headline', serif", fontWeight: 400 }}
              >
                {plan.price}
                <span 
                  className="text-[#333333] text-lg ml-1"
                  style={{ fontFamily: "'Modern Era', sans-serif", fontWeight: 400 }}
                >
                  {plan.perMonth}
                </span>
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li 
                    key={i} 
                    className="flex items-center text-[#333333]"
                    style={{ fontFamily: "'Modern Era', sans-serif", fontWeight: 400 }}
                  >
                    {feature.available ? (
                      <span className="text-[#FF3D57] mr-2">✓</span>
                    ) : (
                      <span className="text-[#666666] mr-2">✕</span>
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 rounded-lg transition-all duration-300 bg-[#FF3D57] text-white hover:bg-[#FF6B80]"
                style={{ fontFamily: "'Modern Era', sans-serif", fontWeight: 400 }}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MembershipPage;