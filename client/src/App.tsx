import { Route, Switch, useLocation } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingWhatsApp } from "@/components/Vistara";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Home from "./pages/Home";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: "easeIn" } },
};

function PageWrapper({ children }: { children: React.ReactNode }) {
  return <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">{children}</motion.div>;
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

function Router() {
  const [location] = useLocation();
  return <>
    <ScrollToTop />
    <AnimatePresence mode="wait">
      <PageWrapper key={location}>
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/home-interiors-bangalore" component={Residential} />
          <Route path="/commercial-interior-designers-bangalore" component={Commercial} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </PageWrapper>
    </AnimatePresence>
  </>;
}

export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /><FloatingWhatsApp /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
