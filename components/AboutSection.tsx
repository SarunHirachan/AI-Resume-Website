import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-gray-900/50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              I am an innovative and open-minded professional with a passion for 
              mechanical engineering, robotics, and real-world automation. As a 
              strong leader, I thrive in collaborative environments and am 
              committed to problem-solving, technological advancement, and 
              creating positive community impact.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Details</h3>
              <div className="space-y-2">
                <p><span className="text-gray-400">Name:</span> Rohan Karki</p>
                <p><span className="text-gray-400">Email:</span> info.rohankarki.com</p>
                <p><span className="text-gray-400">Phone:</span> +977-9827279854</p>
                <p>
                  <span className="text-gray-400">LinkedIn:</span> 
                  <a 
                    href="https://linkedin.com/in/rohankarkii" 
                    className="text-blue-400 hover:text-blue-300 ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    rohankarkii
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
