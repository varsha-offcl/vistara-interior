import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingWhatsApp } from "@/components/Vistara";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Router() { return <Switch><Route path="/" component={Home} /><Route path="/home-interiors-bangalore" component={Residential} /><Route path="/commercial-interior-designers-bangalore" component={Commercial} /><Route path="/contact" component={Contact} /><Route component={NotFound} /></Switch>; }
export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /><FloatingWhatsApp /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
