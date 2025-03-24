
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="py-4 px-6 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-center md:justify-start">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
              ScraperVerse
            </span>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
