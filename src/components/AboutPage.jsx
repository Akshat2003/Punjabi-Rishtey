import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const features = [
  {
    icon: "🏅",
    title: "Genuine Profiles",
    description: "Verified and authentic profiles for your perfect match",
  },
  {
    icon: "🤝",
    title: "Most Trusted",
    description: "22+ years of trusted matchmaking experience",
  },
  {
    icon: "💍",
    title: "Success Stories",
    description: "Thousands of happy couples found their soulmates",
  },
];

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const navigate = useNavigate();

  const handleFindPartnerClick = () => {
    navigate("/findpartner");
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: {
      scale: 1.05,
      backgroundColor: "#FFB6C1",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <motion.header className="text-center py-16" style={{ y: headerY }}>
          <h1
            className="text-5xl font-bold text-center mb-8 text-[#111111]"
            style={{ fontFamily: "'Lora', serif" }}
          >
            About us
          </h1>
          <p
            className="text-xl mt-4 text-[#333333]"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Most Trusted and Premium Matrimony Service.
          </p>

          <section className="bg-[#FFFFFF] flex justify-center gap-8 mt-12 flex-wrap py-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-[#FEEAEA] shadow-lg p-8 rounded-lg text-center w-96 transition-all duration-300"
              >
                <div className="text-6xl mb-6 text-[#FF3D57]">
                  {feature.icon}
                </div>
                <h3
                  className="text-2xl font-bold mt-4 text-[#111111]"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-lg text-[#333333] mt-4"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </section>
        </motion.header>
        <motion.section className="bg-[#FFFFFF] py-16 px-6 md:px-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="relative w-full md:w-1/2"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="src\assets\4.jpg"
                alt="Wedding Couple"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>

            <div className="w-full md:w-1/2 md:pl-16 text-center md:text-left">
              <h2
                className="text-4xl font-bold text-[#111111] leading-tight mt-0"
                style={{ fontFamily: "'Lora', serif" }}
              >
                WELCOME TO <br />
                <span className="text-[#FF3D57]">
                  PUNJABI RISHTEY WEDDING MATRIMONY
                </span>
              </h2>
              <p
                className="text-[#333333] mt-6 text-lg leading-relaxed"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Marriage is a lifetime promise, a beautiful blend of two lives,
                two loves, and two hearts. It is a wonderful, mystical moment
                when a beautiful love story starts.
              </p>

              <div className="mt-6">
                <button
                  onClick={handleFindPartnerClick}
                  className="bg-[#FEEAEA] text-[#FF3D57] font-semibold text-lg px-6 py-2 rounded-md hover:bg-[#FFB6C1] transition-all duration-300"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Click here
                </button>
                <span className="text-[#333333] ml-2">
                  {" "}
                  to start your matrimony service now.
                </span>
              </div>

              <hr className="border-t border-[#FEEAEA] my-8" />

              <p
                className="text-[#333333] text-lg"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Shri Balraj Sablok established "Punjabi Marriage Forum (Now
                Punjabi-Rishtey, our digital platform)" in 2000 and has been
                running successfully for 22 years.
              </p>

              <div className="flex flex-col md:flex-row items-center mt-8 space-y-6 md:space-y-0 md:space-x-12">
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="bg-[#FEEAEA] text-[#FF3D57] p-4 rounded-full text-2xl hover:bg-[#FFB6C1] transition-all duration-300">
                    📞
                  </span>
                  <div>
                    <p
                      className="text-[#333333] text-sm"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      Enquiry
                    </p>
                    <p
                      className="font-bold text-[#111111] text-lg"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      +91-7354619960
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="bg-[#FEEAEA] text-[#FF3D57] p-4 rounded-full text-2xl hover:bg-[#FFB6C1] transition-all duration-300">
                    ✉️
                  </span>
                  <div>
                    <p
                      className="text-[#333333] text-sm"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      Get Support
                    </p>
                    <p
                      className="font-bold text-[#111111] text-lg"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      info@example.com
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
