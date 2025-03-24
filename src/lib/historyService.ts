
import { supabase } from './supabase';
import { ScrapingResult } from './scraper';

export type HistoryItem = {
  id: string;
  user_id: string;
  url: string;
  target_type: string;
  created_at: string;
  result: ScrapingResult;
};

export const historyService = {
  async saveToHistory(url: string, targetType: string, result: ScrapingResult): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated');
      }
      
      await supabase.from('scraping_history').insert({
        user_id: user.id,
        url,
        target_type: targetType,
        result
      });
    } catch (error) {
      console.error('Error saving to history:', error);
      throw error;
    }
  },
  
  async getHistory(): Promise<HistoryItem[]> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated');
      }
      
      const { data, error } = await supabase
        .from('scraping_history')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      return data as HistoryItem[];
    } catch (error) {
      console.error('Error fetching history:', error);
      throw error;
    }
  }
};
