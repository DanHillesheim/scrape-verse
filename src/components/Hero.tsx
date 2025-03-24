
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/30 dark:from-blue-950/20 dark:to-black/10 -z-10"></div>
      
      {/* Animated background circles */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full filter blur-3xl -z-10 animate-pulse-soft"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full filter blur-3xl -z-10 animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
              Effortless Web Scraping
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Extract content from any website
            <span className="block text-blue-600 dark:text-blue-400">with elegance and precision</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Effortlessly collect articles, PDFs, and images from websites with our intuitive scraping tool. Simply enter a URL and let our tool do the rest.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="#scraper" 
              className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
            >
              Start Scraping
            </a>
            <a 
              href="#how-it-works" 
              className="px-8 py-3 rounded-lg glass-button font-medium"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
