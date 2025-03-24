
import React from 'react';
import Navbar from '../components/Navbar';
import { ScrapeForm } from '../components/ScrapeForm';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto max-w-5xl px-6 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Web Scraper Tool</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Extract articles, PDFs, and images from websites with our simple scraping tool.
          </p>
        </div>
        <ScrapeForm />
      </main>
      
      <footer className="py-6 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-center">
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
