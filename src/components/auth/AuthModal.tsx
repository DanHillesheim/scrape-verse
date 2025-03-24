
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

export function AuthModal() {
  const [open, setOpen] = useState(false);
  
  const handleSuccess = () => {
    setOpen(false);
  };
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <LogIn className="h-4 w-4" />
          <span className="hidden md:inline">Sign In</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Welcome to ScraperVerse</SheetTitle>
          <SheetDescription>
            Sign in to save your scraping history and access more features.
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-6">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="mt-4">
              <LoginForm onSuccess={handleSuccess} />
            </TabsContent>
            
            <TabsContent value="signup" className="mt-4">
              <SignupForm onSuccess={handleSuccess} />
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
}
