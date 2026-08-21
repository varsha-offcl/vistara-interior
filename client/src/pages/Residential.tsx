import { useEffect } from "react";
import { ServicePage } from "@/components/Vistara";
export default function Residential() { useEffect(() => { document.title = "Villa & Home Interior Designers in Bangalore | Vistara"; document.querySelector('meta[name="description"]')?.setAttribute("content", "Complete home interiors for villas and fine apartments — designed around how you live, built in our own factory. Book a consultation with Vistara."); }, []); return <ServicePage kind="residential" />; }
