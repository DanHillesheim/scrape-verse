
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrapingOptions, scrapeWebsite, ScrapingResult } from '../lib/scraper';
import { ResultsCard } from './ResultsCard';
import { Search, FileText, Image, FileType2, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { historyService } from '@/lib/historyService';
import { useToast } from '@/hooks/use-toast';

export const ScrapeForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const [options, setOptions] = useState<ScrapingOptions>({
    targetType: 'all',
    includeMetadata: true,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScrapingResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
      // Basic URL validation
      if (!url) {
        throw new Error('Please enter a URL');
      }
      
      // Add http:// if missing
      let processedUrl = url;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        processedUrl = `https://${url}`;
      }
      
      const result = await scrapeWebsite(processedUrl, options);
      setResult(result);
      
      if (!result.success) {
        setError(result.error || 'Failed to scrape website');
      } else {
        // Save to history if user is logged in
        if (user) {
          try {
            await historyService.saveToHistory(processedUrl, options.targetType, result);
            toast({
              title: "Saved to history",
              description: "This scraping result has been saved to your history"
            });
          } catch (historyError) {
            console.error("Error saving to history:", historyError);
            toast({
              variant: "destructive",
              title: "Warning",
              description: "Failed to save to history, but scraping was successful"
            });
          }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="scraper" className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-10 shadow-xl border border-white/20 dark:border-white/10"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Scraping</h2>
            <p className="text-muted-foreground">Enter a website URL and select what you want to extract</p>
          </motion.div>

          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter website URL (e.g., example.com)"
                className="glass-input w-full pl-10 pr-4 py-3 rounded-lg text-foreground focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  options.targetType === 'article' || options.targetType === 'all'
                    ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
                onClick={() => setOptions({ 
                  ...options, 
                  targetType: options.targetType === 'article' ? 'all' : 'article' 
                })}
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <FileText className={`h-8 w-8 ${
                    options.targetType === 'article' || options.targetType === 'all'
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400'
                  }`} />
                  <span className="font-medium">Articles</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  options.targetType === 'pdf' || options.targetType === 'all'
                    ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
                onClick={() => setOptions({ 
                  ...options, 
                  targetType: options.targetType === 'pdf' ? 'all' : 'pdf' 
                })}
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <FileType2 className={`h-8 w-8 ${
                    options.targetType === 'pdf' || options.targetType === 'all'
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400'
                  }`} />
                  <span className="font-medium">PDFs</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  options.targetType === 'image' || options.targetType === 'all'
                    ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
                onClick={() => setOptions({ 
                  ...options, 
                  targetType: options.targetType === 'image' ? 'all' : 'image' 
                })}
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <Image className={`h-8 w-8 ${
                    options.targetType === 'image' || options.targetType === 'all'
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400'
                  }`} />
                  <span className="font-medium">Images</span>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeMetadata"
                checked={options.includeMetadata}
                onChange={(e) => setOptions({ ...options, includeMetadata: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-5 w-5"
              />
              <label htmlFor="includeMetadata" className="ml-2 text-sm text-muted-foreground">
                Include metadata (authors, dates, dimensions, etc.)
              </label>
            </div>

            <div className="flex justify-center">
              <motion.button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 w-full md:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin mr-2" /> Processing...
                  </>
                ) : (
                  'Start Scraping'
                )}
              </motion.button>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-center"
              >
                {error}
              </motion.div>
            )}
          </motion.form>

          {result && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10"
            >
              <ResultsCard result={result} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
