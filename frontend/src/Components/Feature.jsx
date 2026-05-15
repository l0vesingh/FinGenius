import React from "react";
import { motion } from "framer-motion";

function Feature() {
  const features = [
    {
      icon: "🧠",
      title: "Smart AI Agent",
      desc: "Ask anything — get jargon-free answers about stocks, SIPs, and markets. Perfect for beginners.",
    },
    {
      icon: "📊",
      title: "Personalized Stock Advisor",
      desc: "Receive tailored stock and mutual fund recommendations that diversify and grow your portfolio.",
    },
    {
      icon: "📈",
      title: "Real-Time Chart Data",
      desc: "Visualize real-time price and NAV movements with interactive, easy-to-read charts.",
    },
    {
      icon: "📋",
      title: "Simplified Dashboard",
      desc: "Manage your entire investment journey through a clean, intuitive, and modern dashboard.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-zinc-900 mt-20">
      <section id="Feature" className="text-white py-16 px-4 md:px-12">
        {/* Animate whole container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From real-time insights to intelligent recommendations — everything you need to invest with confidence
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-12">
            Your AI-powered financial companion designed for new investors and pros alike.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Feature;
