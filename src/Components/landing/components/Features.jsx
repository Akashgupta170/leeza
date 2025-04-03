import React from "react";
import { motion } from "framer-motion";
import check1 from '../../assest/landingassests/categeories/check1.png'
import keyfeature from '../../assest/landingassests/categeories/keyfeature.png'

const Features = () => {
  const features = [
    {
      title: "User Registration & Profiles",
      description: "Creatives and companies can build optimized profiles with AI-driven suggestions."
    },
    {
      title: "Job Postings & AI Matching",
      description: "Smart job recommendations for creatives and companies based on data-driven insights."
    },
    {
      title: "Networking & Collaboration",
      description: "Connect with like-minded professionals and groups through AI-suggested chat rooms."
    },
    {
      title: "Learning & Growth",
      description: "Personalized learning paths to help users close skill gaps."
    },
    {
      title: "Event Recommendations",
      description: "Stay updated with industry-specific events tailored to your interests."
    }
  ];

  return (
    <>
      <section id="features" className="my-4 py-16 bg-[#e7ebf4] flex flex-col md:flex-row items-center">
        <motion.div 
          className="w-full md:w-1/2 flex flex-col items-center relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={keyfeature}
            className="w-4/5 h-auto rounded-lg shadow-lg"
            alt="Main Feature"
          />
          <motion.img
            src={keyfeature}
            className="absolute bottom-[-20px] left-10 border-4 border-white rounded-lg shadow-lg hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            alt="Secondary Feature"
          />
        </motion.div>

        <div className="w-full md:w-1/2 px-8 my-2">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Key Features That Set Us Apart
          </motion.h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start p-2 rounded-lg "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center space-x-4">
                  <div>
                    {/* <span className="text-xl text-white">✔</span> */}
                    <img src={check1} alt="" className="w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0c3891] mb-2">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-base relative left-12">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
