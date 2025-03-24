
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '@/contexts/AuthContext';
import { historyService, HistoryItem } from '@/lib/historyService';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const History: React.FC = () => {
  const { user } = useAuth();
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }

    const fetchHistory = async () => {
      try {
        setLoading(true);
        const data = await historyService.getHistory();
        setHistory(data);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load your history"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [user, toast, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Your Scraping History</h1>
          <p className="text-muted-foreground">
            Review your previous scraping activities
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : history.length === 0 ? (
          <div className="text-center py-20 border border-dashed rounded-lg">
            <p className="text-muted-foreground">You don't have any scraping history yet.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => navigate('/')}
            >
              Start Scraping
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {history.map((item) => (
              <div 
                key={item.id} 
                className="p-6 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium truncate max-w-md">{item.url}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {format(new Date(item.created_at), 'PPP p')}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(item.url, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit
                    </Button>
                  </div>
                </div>
                <div className="text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    {item.target_type}
                  </span>
                  <p className="mt-2 text-muted-foreground">
                    {item.result.success 
                      ? `Successfully scraped ${item.result.items.length} items` 
                      : `Error: ${item.result.error}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default History;
