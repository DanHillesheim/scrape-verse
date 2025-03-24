
export interface ScrapingOptions {
  targetType: 'article' | 'pdf' | 'image' | 'all';
  maxItems?: number;
  includeMetadata?: boolean;
}

export interface ScrapedItem {
  type: 'article' | 'pdf' | 'image';
  url: string;
  title?: string;
  content?: string;
  metadata?: {
    [key: string]: string;
  };
  timestamp: number;
}

export interface ScrapingResult {
  url: string;
  success: boolean;
  items: ScrapedItem[];
  error?: string;
  timestamp: number;
}

// This would be replaced with actual backend API calls in a real application
export const scrapeWebsite = async (
  url: string,
  options: ScrapingOptions
): Promise<ScrapingResult> => {
  try {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // URL validation
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return {
        url,
        success: false,
        items: [],
        error: 'Invalid URL. Please include http:// or https://',
        timestamp: Date.now()
      };
    }
    
    // Mock data based on the target type
    const mockItems: ScrapedItem[] = [];
    
    if (options.targetType === 'article' || options.targetType === 'all') {
      mockItems.push({
        type: 'article',
        url: `${url}/article-1`,
        title: 'Sample Article Title',
        content: 'This is a sample article content that would be extracted from the webpage. In a real implementation, this would contain the actual text content from the article on the target website.',
        metadata: options.includeMetadata ? {
          author: 'John Doe',
          publishDate: '2023-06-15',
          category: 'Technology'
        } : undefined,
        timestamp: Date.now()
      });
      
      mockItems.push({
        type: 'article',
        url: `${url}/article-2`,
        title: 'Another Article Example',
        content: 'This is another example of article content that would be extracted from the webpage. It demonstrates how multiple articles can be scraped from a single website.',
        metadata: options.includeMetadata ? {
          author: 'Jane Smith',
          publishDate: '2023-07-20',
          category: 'Business'
        } : undefined,
        timestamp: Date.now()
      });
    }
    
    if (options.targetType === 'pdf' || options.targetType === 'all') {
      mockItems.push({
        type: 'pdf',
        url: `${url}/document.pdf`,
        title: 'Important Document.pdf',
        content: 'PDF content would be extracted and converted to text in a real implementation.',
        metadata: options.includeMetadata ? {
          size: '2.4 MB',
          pages: '15',
          created: '2023-05-10'
        } : undefined,
        timestamp: Date.now()
      });
    }
    
    if (options.targetType === 'image' || options.targetType === 'all') {
      mockItems.push({
        type: 'image',
        url: `${url}/image1.jpg`,
        title: 'Banner Image',
        metadata: options.includeMetadata ? {
          dimensions: '1200x800',
          format: 'JPEG',
          altText: 'Company logo and banner'
        } : undefined,
        timestamp: Date.now()
      });
      
      mockItems.push({
        type: 'image',
        url: `${url}/image2.png`,
        title: 'Product Image',
        metadata: options.includeMetadata ? {
          dimensions: '600x600',
          format: 'PNG',
          altText: 'Product display photo'
        } : undefined,
        timestamp: Date.now()
      });
    }
    
    // Apply maxItems limit if specified
    const limitedItems = options.maxItems ? mockItems.slice(0, options.maxItems) : mockItems;
    
    return {
      url,
      success: true,
      items: limitedItems,
      timestamp: Date.now()
    };
  } catch (error) {
    return {
      url,
      success: false,
      items: [],
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      timestamp: Date.now()
    };
  }
};

// Function to download content as a file
export const downloadAsFile = (content: string, filename: string, type: string = 'text/plain') => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Function to format timestamp
export const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};
