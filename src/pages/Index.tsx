
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { ScrapeForm } from '../components/ScrapeForm';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ScrapeForm />
        
        <section id="features" className="py-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full mb-3">
                Powerful Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to scrape efficiently</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our scraping tool combines powerful extraction capabilities with an elegant, intuitive interface.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 border border-white/20 dark:border-white/10 shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Extraction</h3>
                <p className="text-muted-foreground">
                  Extract content quickly from any website with our optimized scraping engine.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 border border-white/20 dark:border-white/10 shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Parsing</h3>
                <p className="text-muted-foreground">
                  Automatically identifies and extracts articles, PDFs, and images with intelligent content recognition.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 border border-white/20 dark:border-white/10 shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Export</h3>
                <p className="text-muted-foreground">
                  Download scraped content in multiple formats or copy directly to your clipboard.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-black/10">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full mb-3">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, powerful web scraping</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our intuitive process makes extracting web content easier than ever before.
              </p>
            </motion.div>
            
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enter Website URL</h3>
                <p className="text-muted-foreground">
                  Simply paste the URL of any website you want to extract content from.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Select Content Type</h3>
                <p className="text-muted-foreground">
                  Choose what type of content you want to extract: articles, PDFs, images, or all.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Download Results</h3>
                <p className="text-muted-foreground">
                  Review the extracted content and download or copy what you need.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-10 border border-white/20 dark:border-white/10 shadow-xl text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start scraping?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Try our web scraping tool today and extract content with elegance and precision.
              </p>
              <a 
                href="#scraper" 
                className="inline-block px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
              >
                Start Scraping Now
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                ScraperVerse
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ScraperVerse. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
