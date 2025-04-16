import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              I am a passionate and curious individual with a strong interest in technology, 
              innovation, and entrepreneurship. With experience in programming, event organizing, 
              and leadership, I excel at problem-solving and adapting to new challenges. Through 
              hands-on projects and strategic roles, I have developed the skills to execute ideas 
              effectively and create meaningful impact.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Details</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-20 text-gray-400">Name</span>
                  <span>Sarun Hirachan</span>
                </li>
                <li className="flex items-center">
                  <span className="w-20 text-gray-400">Location</span>
                  <span>Pokhara-9, Kaski, Nepal</span>
                </li>
                <li className="flex items-center">
                  <span className="w-20 text-gray-400">Email</span>
                  <a href="mailto:sarun.hirachan@gmail.com" className="hover:text-blue-400">
                    sarun.hirachan@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="w-20 text-gray-400">GitHub</span>
                  <a 
                    href="https://github.com/SarunHirachan" 
                    className="hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @SarunHirachan
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="w-20 text-gray-400">LinkedIn</span>
                  <a 
                    href="https://linkedin.com/in/sarun-hirachan" 
                    className="hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /in/sarun-hirachan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
