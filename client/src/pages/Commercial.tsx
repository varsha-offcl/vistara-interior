import { useEffect } from "react";
import { ServicePage } from "@/components/Vistara";
export default function Commercial() { useEffect(() => { document.title = "Office & Commercial Interior Designers in Bangalore | Vistara"; document.querySelector('meta[name="description"]')?.setAttribute("content", "Turnkey office, retail and F&B interiors delivered around your business hours — trusted by HP, Tata, HCL, Oracle and ITC. Vistara Interior, Bengaluru."); }, []); return <ServicePage kind="commercial" />; }
