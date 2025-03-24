
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "./auth/AuthModal";
import { UserMenu } from "./auth/UserMenu";
import { History } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="py-4 px-6 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
              ScraperVerse
            </Link>
          </motion.div>

          <div className="flex items-center gap-2">
            {user ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="gap-2"
                >
                  <Link to="/history">
                    <History className="h-4 w-4" />
                    <span className="hidden md:inline">History</span>
                  </Link>
                </Button>
                <UserMenu />
              </>
            ) : (
              <AuthModal />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
