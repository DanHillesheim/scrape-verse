
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Download, Check, FileText, Image, FileType2, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { ScrapingResult, ScrapedItem, downloadAsFile, formatTimestamp } from '../lib/scraper';
import { useToast } from '../hooks/use-toast';

interface ResultsCardProps {
  result: ScrapingResult;
}

export const ResultsCard: React.FC<ResultsCardProps> = ({ result }) => {
  const { toast } = useToast();
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const handleCopyContent = (content: string) => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copied to clipboard",
      description: "Content has been copied to your clipboard",
      duration: 3000,
    });
  };

  const handleDownload = (item: ScrapedItem) => {
    let filename, content;
    
    switch (item.type) {
      case 'article':
        filename = `${item.title?.replace(/\s+/g, '-').toLowerCase() || 'article'}.txt`;
        content = `Title: ${item.title || 'Untitled'}\nURL: ${item.url}\n\n${item.content || ''}`;
        break;
      case 'pdf':
        filename = `${item.title?.replace(/\s+/g, '-').toLowerCase() || 'document'}.txt`;
        content = `Title: ${item.title || 'Untitled'}\nURL: ${item.url}\n\n${item.content || ''}`;
        break;
      case 'image':
        // For images, we'd normally download the actual image file
        // but for this demo we'll just create a text file with the URL
        filename = `${item.title?.replace(/\s+/g, '-').toLowerCase() || 'image'}.txt`;
        content = `Image: ${item.title || 'Untitled'}\nURL: ${item.url}`;
        break;
      default:
        filename = 'content.txt';
        content = `URL: ${item.url}`;
    }
    
    downloadAsFile(content, filename);
    
    toast({
      title: "Download started",
      description: `${filename} is being downloaded`,
      duration: 3000,
    });
  };

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'article':
        return <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case 'pdf':
        return <FileType2 className="h-5 w-5 text-red-600 dark:text-red-400" />;
      case 'image':
        return <Image className="h-5 w-5 text-green-600 dark:text-green-400" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Scraped Results</h3>
        <div className="text-sm text-muted-foreground">
          {formatTimestamp(result.timestamp)}
        </div>
      </div>
      
      <div className="p-3 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center overflow-hidden">
        <span className="text-sm font-medium mr-2">URL:</span>
        <span className="text-sm text-muted-foreground truncate flex-1">{result.url}</span>
        <a 
          href={result.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-2 p-1 rounded-md hover:bg-foreground/10 transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      
      <div className="space-y-4">
        {result.items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-lg border border-foreground/10 overflow-hidden"
          >
            <div 
              className="flex items-center justify-between p-4 bg-foreground/5 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center space-x-3">
                {getIconForType(item.type)}
                <span className="font-medium">
                  {item.title || `${item.type.charAt(0).toUpperCase() + item.type.slice(1)} ${index + 1}`}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-xs px-2 py-1 rounded-full bg-foreground/10 text-foreground/70">
                  {item.type}
                </span>
                {expandedItems[index] ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </div>
            
            {expandedItems[index] && (
              <div className="p-4 border-t border-foreground/10">
                {item.content && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Content</span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleCopyContent(item.content || '')}
                          className="p-1 rounded-md hover:bg-foreground/10 transition-colors"
                          title="Copy content"
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDownload(item)}
                          className="p-1 rounded-md hover:bg-foreground/10 transition-colors"
                          title="Download content"
                        >
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-foreground/5 rounded-md p-3 text-sm font-mono overflow-auto max-h-60">
                      {item.content}
                    </div>
                  </div>
                )}
                
                {item.metadata && Object.keys(item.metadata).length > 0 && (
                  <div>
                    <span className="text-sm font-medium block mb-2">Metadata</span>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(item.metadata).map(([key, value], mdIndex) => (
                        <div key={mdIndex} className="flex items-center space-x-2 p-2 rounded-md bg-foreground/5">
                          <span className="font-medium">{key}:</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">URL:</span>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline truncate flex-1"
                    >
                      {item.url}
                    </a>
                    <button
                      onClick={() => handleCopyContent(item.url)}
                      className="p-1 rounded-md hover:bg-foreground/10 transition-colors flex-shrink-0"
                      title="Copy URL"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
