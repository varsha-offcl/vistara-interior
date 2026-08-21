import { Link } from "wouter";
import { ArrowUpRight, ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";

export const images = {
  hero: "/images/hero.webp",
  residential: "/images/whitefield.webp",
  commercial: "/images/hsr.webp",
  board: "/images/board.webp",
  whitefield: "/images/whitefield.webp",
  indiranagar: "/images/indiranagar.webp",
  sarjapur: "/images/sarjapur.webp",
  hsr: "/images/hsr.webp",
  koramangala: "/images/koramangala.webp",
  mgroad: "/images/mgroad.webp",
  mark: "/images/mark.svg",
};

export const navItems = [
  ["Homes", "/home-interiors-bangalore"],
  ["Workspaces", "/commercial-interior-designers-bangalore"],
  ["Contact", "/contact"],
] as const;

export function Wordmark({ dark = false }: { dark?: boolean }) {
  return <Link href="/" className={`wordmark ${dark ? "text-[var(--gesso)]" : ""}`} aria-label="Vistara Interior home">
    <span className="display text-[30px] italic leading-none">Vistara</span><span className="mono ml-2 align-[5px] text-[9px] tracking-[.18em]">INTERIOR</span>
  </Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="relative z-50 border-b border-[var(--line)] bg-[var(--gesso)]/95 backdrop-blur-md">
    <div className="container flex h-[78px] items-center justify-between">
      <Wordmark />
      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <Link key={href} href={href} className="group text-[13px] text-[var(--muted-ink)] transition-colors hover:text-[var(--fern)]">{label}<span className="ml-1 inline-block h-px w-0 bg-[var(--fern)] align-middle transition-all group-hover:w-4" /></Link>)}
        <Link href="/contact" className="button-fern ml-3">Book a consultation <ArrowUpRight size={15} /></Link>
      </nav>
      <button className="inline-flex items-center justify-center rounded-full border border-[var(--line)] p-2 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    </div>
    {open && <div className="border-t border-[var(--line)] bg-[var(--gesso)] px-4 pb-5 pt-4 md:hidden"><nav className="container flex flex-col gap-4" aria-label="Mobile navigation">{navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-[var(--line)] pb-3 text-[16px]">{label}<ArrowUpRight size={16} className="text-[var(--fern)]" /></Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="button-fern mt-2">Book a consultation <ArrowUpRight size={15} /></Link></nav></div>}
  </header>;
}

export function Footer() {
  return <footer className="bg-black text-[var(--gesso)]">
    <div className="container grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:py-20">
      <div><Wordmark dark /><div className="mt-7 max-w-[270px] space-y-5"><p className="text-[14px] leading-6 text-[var(--gesso)]/65">85, Ayyappa Block, Kogilu,<br />Yelahanka, Bangalore 560064</p><div className="border-t border-[var(--gesso)]/15 pt-5"><p className="mono text-[10px] tracking-[.15em] text-[var(--oak)]">CALL / WHATSAPP</p><a href="tel:+919964649595" className="mt-2 block text-[16px] font-semibold text-[var(--gesso)] hover:text-[var(--oak)] transition-colors">+91 99646 49595</a></div></div></div>
      <div><p className="mono text-[var(--oak)]">Services</p><div className="mt-5 flex flex-col gap-3 text-[14px] text-[var(--gesso)]/75"><a href="#">Residential interiors</a><a href="#">Modular kitchens</a><a href="#">Commercial & corporate</a><a href="#">Construction & architecture</a><a href="#">Vastu-aligned planning</a></div></div>
      <div><p className="mono text-[var(--oak)]">Studio</p><div className="mt-5 flex flex-col gap-3 text-[14px] text-[var(--gesso)]/75"><a href="#">Projects</a><a href="#">About Vistara</a><Link href="/contact">Contact</Link></div><p className="mt-10 text-[12px] text-[var(--gesso)]/45">© 2026 Vistara Interior. All rights reserved.</p></div>
    </div>
  </footer>;
}

export type Project = { title: string; spec: string; image: string; alt: string; chips?: string[] };
export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return <article className={`reveal group ${index % 2 === 1 ? "md:translate-y-10" : ""}`} style={{ animationDelay: `${index * 80}ms` }}>
    <div className="image-frame aspect-[4/3]"><img src={project.image} alt={project.alt} /></div>
    <div className="project-meta mt-4"><div className="flex items-start justify-between gap-4"><h3 className="display text-[29px] leading-none">{project.title}</h3><ArrowUpRight className="mt-1 shrink-0 text-[var(--fern)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} /></div><p className="mono mt-4 text-[10px] text-[var(--muted-ink)]">{project.spec}</p><div className="mt-3 flex flex-wrap gap-1.5">{(project.chips || ["Oak veneer", "Verde marble", "Brushed brass", "Made in our factory"]).map((chip) => <span key={chip} className={`chip ${chip === "Made in our factory" ? "factory" : ""}`}>{chip}</span>)}</div></div>
  </article>;
}

export function FAQ({ items }: { items: [string, string][] }) {
  return <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">{items.map(([q, a]) => <details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold"><span>{q}</span><ChevronDown size={18} className="shrink-0 text-[var(--fern)] transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pt-4 text-[14px] leading-6 text-[var(--muted-ink)]">{a}</p></details>)}</div>;
}

export function CTA({ label = "Book a consultation" }: { label?: string }) {
  return <section className="grain bg-[var(--fern)] py-16 text-[var(--gesso)] md:py-20"><div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow text-[var(--oak)]">A considered next step</p><h2 className="display mt-4 max-w-[650px] text-[clamp(40px,6vw,76px)]">The standards corporate India demands — brought home.</h2></div><Link href="/contact" className="button-outline shrink-0 border-[var(--gesso)] text-[var(--gesso)] hover:bg-[var(--gesso)] hover:text-[var(--fern)]">{label} <ArrowUpRight size={15} /></Link></div></section>;
}

const WHATSAPP_NUMBER = "919964649595";
const WHATSAPP_MESSAGE = "Hi, I'd like to book a consultation with Vistara Interior.";
const PHONE_NUMBER = "+91 99646 49595";

function WhatsAppDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  return <AlertDialog open={open} onOpenChange={onOpenChange}>
    <AlertDialogContent className="bg-[var(--gesso)] border-[var(--line)]">
      <AlertDialogHeader>
        <AlertDialogTitle className="display text-[22px]">Chat with us on WhatsApp</AlertDialogTitle>
        <AlertDialogDescription className="text-[var(--muted-ink)] text-[15px] leading-6">You'll be redirected to WhatsApp to start a conversation with Vistara Interior. Continue?</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className="rounded-full border-[var(--line)] text-[var(--muted-ink)]">Cancel</AlertDialogCancel>
        <AlertDialogAction className="button-fern rounded-full" onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, "_blank")}>Open WhatsApp</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>;
}

export function WhatsAppLink({ children, className, variant }: { children?: React.ReactNode; className?: string; variant?: "card" | "inline" }) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" onClick={() => setOpen(true)} className={className ?? "inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--fern)] underline decoration-[var(--oak)] underline-offset-4 cursor-pointer"}>
      {children ?? <><MessageCircle size={16} />WhatsApp us</>}
    </button>
    <WhatsAppDialog open={open} onOpenChange={setOpen} />
  </>;
}

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" onClick={() => setOpen(true)} aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer">
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-7"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </button>
    <WhatsAppDialog open={open} onOpenChange={setOpen} />
  </>;
}

function CallDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [copied, setCopied] = useState(false);
  const copyNumber = () => { navigator.clipboard.writeText(PHONE_NUMBER.replace(/\s/g, "")); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return <AlertDialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setCopied(false); }}>
    <AlertDialogContent className="bg-[var(--gesso)] border-[var(--line)]">
      <AlertDialogHeader>
        <AlertDialogTitle className="display text-[22px]">Call Vistara Interior</AlertDialogTitle>
        <AlertDialogDescription className="text-[var(--muted-ink)] text-[15px] leading-6">You'll be redirected to call <span className="font-semibold text-[var(--ink)]">{PHONE_NUMBER}</span>. Continue?</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <button type="button" onClick={copyNumber} className="h-10 rounded-full border border-[var(--line)] px-5 text-[14px] font-medium text-[var(--muted-ink)] transition-colors hover:bg-[var(--limewash)] cursor-pointer">{copied ? "Copied!" : "Copy number"}</button>
        <AlertDialogCancel className="h-10 rounded-full border-[var(--line)] px-5 text-[14px] text-[var(--muted-ink)]">Cancel</AlertDialogCancel>
        <AlertDialogAction className="button-fern h-10 rounded-full px-5 text-[14px]" onClick={() => { window.location.href = `tel:${PHONE_NUMBER.replace(/\s/g, "")}`; }}>Call now</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>;
}

export function CallLink({ children, className }: { children?: React.ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" onClick={() => setOpen(true)} className={className ?? "inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--fern)] underline decoration-[var(--oak)] underline-offset-4 cursor-pointer"}>
      {children ?? <><Phone size={16} />Call us</>}
    </button>
    <CallDialog open={open} onOpenChange={setOpen} />
  </>;
}

export function ServicePage({ kind }: { kind: "residential" | "commercial" }) {
  const residential = kind === "residential";
  const data = residential ? {
    eyebrow: "RESIDENTIAL · BENGALURU",
    h1: "Complete home interiors for villas & fine apartments in Bengaluru",
    promise: "No catalogues, no packages. Your home, designed around how you live — and built by the same team that answers to corporate deadlines.",
    image: images.residential,
    alt: "dining room with oak veneer and brushed brass lighting — villa, Whitefield",
    items: ["Full-home interior design", "Modular kitchens & wardrobes, factory-made", "Custom furniture built to drawing", "False ceiling & lighting design", "Soft furnishings & styling", "Vastu-aligned planning on request"],
    projects: [{ title: "Whitefield Villa", spec: "WHITEFIELD VILLA · 4,200 SQ FT · TURNKEY · 2025", image: images.whitefield, alt: "oak-panelled living room with ivory seating — villa, Whitefield" }, { title: "Indiranagar Apartment", spec: "INDIRANAGAR APARTMENT · [SAMPLE] · TURNKEY · 2025", image: images.indiranagar, alt: "curved-niche living and dining room with oak joinery — apartment, Indiranagar" }, { title: "Sarjapur Villa", spec: "SARJAPUR VILLA · [SAMPLE] · TURNKEY · 2025", image: images.sarjapur, alt: "sunlit villa lounge opening to a courtyard — villa, Sarjapur" }],
    differentiator: "Your wardrobe isn't ordered from a catalogue. It's built in our factory — in finishes the catalogues don't carry.",
    faq: [["Do you take up full homes or only kitchens and wardrobes?", "Full homes — design, factory production, installation and handover as one engagement. Kitchens and wardrobes are part of it, not the whole of it."], ["Can we choose materials beyond the usual catalogues?", "Yes — that's the point of owning a factory. Our material library runs wider than mainstream catalogues, and you approve every finish on the material board before we build."], ["What does a full home typically take?", "[PLACEHOLDER — timeline to be confirmed with client]"]] as [string, string][]
  } : {
    eyebrow: "COMMERCIAL · BENGALURU",
    h1: "Office & commercial interiors in Bengaluru",
    promise: "For 15+ years, Vistara has fitted out offices, retail spaces and restaurants for companies including HP, Tata, HCL, Oracle, GTS and ITC — turnkey, on schedule, and around your working hours.",
    image: images.commercial,
    alt: "corporate workspace with oak slatted wall and pale stone — office, Bengaluru",
    items: ["Corporate office fit-outs", "Retail spaces", "F&B and hospitality", "Phased and after-hours execution", "Compliance documentation MNC facility teams expect", "Single point of contact to handover"],
    projects: [{ title: "HSR Office", spec: "HSR OFFICE · [SAMPLE] · TURNKEY · 2025", image: images.hsr, alt: "corporate office reception with oak acoustic wall — office, HSR" }, { title: "Koramangala F&B", spec: "KORAMANGALA F&B · [SAMPLE] · TURNKEY · 2025", image: images.koramangala, alt: "restaurant interior with oak banquette and brushed brass lighting — F&B, Koramangala" }, { title: "MG Road Retail", spec: "MG ROAD RETAIL · [SAMPLE] · TURNKEY · 2025", image: images.mgroad, alt: "boutique retail interior with oak display wall — retail, MG Road" }],
    differentiator: "Fit-outs fail on coordination. Ours don't leave the family — designed by us, made in our factory, installed by our team, handed over on the committed date.",
    faq: [["Can you execute without disrupting our operations?", "Yes — phased and after-hours execution is standard for us, planned around your business hours from day one."], ["Who manages vendors and coordination?", "No one external — design, factory production and installation are all in-house, with one point of contact end to end."], ["What do commercial timelines look like?", "[PLACEHOLDER — to be confirmed with client]"]] as [string, string][]
  };
  return <div className={`page-shell ${residential ? "service-residential" : "service-commercial"}`}><Header /><main><section className="container grid gap-12 pb-20 pt-16 md:grid-cols-[.9fr_1.1fr] md:items-end md:pb-28 md:pt-24"><div className="max-w-[570px]"><p className="eyebrow">{data.eyebrow}</p><h1 className="display mt-5 text-[clamp(52px,7vw,96px)]">{data.h1}</h1><p className="mt-7 max-w-[520px] text-[17px] leading-7 text-[var(--muted-ink)]">{data.promise}</p><div className="mt-8 flex flex-wrap items-center gap-5"><Link href="/contact" className="button-fern">Book a consultation <ArrowUpRight size={15} /></Link><WhatsAppLink /></div><div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--line)] pt-4"><span className="mono text-[var(--brass)]">{residential ? "VILLA HOMES" : "CORPORATE FIT-OUT"}</span><span className="mono text-[var(--muted-ink)]">{residential ? "FINE APARTMENTS" : "HP · TATA · HCL · ORACLE · GTS · ITC"}</span></div></div><div className="image-frame aspect-[4/3] md:aspect-[5/4]"><img src={data.image} alt={data.alt} /></div></section><section className="section-pad bg-[var(--limewash)]"><div className="container grid gap-12 md:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">The scope</p><h2 className="display mt-4 max-w-[370px] text-[clamp(42px,5vw,70px)]">What's included</h2></div><div className="grid gap-x-10 sm:grid-cols-2">{data.items.map((item, i) => <div key={item} className="oak-rule flex min-h-[88px] items-start gap-5 py-5"><span className="mono text-[var(--brass)]">0{i + 1}</span><p className="text-[16px] leading-6">{item}</p></div>)}</div></div></section><section className="section-pad"><div className="container"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Selected work · [SAMPLE]</p><h2 className="display mt-4 text-[clamp(44px,6vw,80px)]">Featured projects</h2></div><Link href="/contact" className="text-[13px] font-semibold text-[var(--fern)] underline decoration-[var(--oak)] underline-offset-4">Discuss your project <ArrowUpRight size={14} className="inline" /></Link></div><div className="grid gap-10 md:grid-cols-3">{data.projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}</div></div></section><section className="bg-[var(--fern-deep)] py-20 text-[var(--gesso)] md:py-28"><div className="container grid gap-10 md:grid-cols-[.7fr_1.3fr] md:items-center"><p className="eyebrow text-[var(--oak)]">{residential ? "THE VISTARA DIFFERENCE" : "EXECUTION, STRUCTURED"}</p><h2 className="display max-w-[850px] text-[clamp(38px,5.4vw,76px)]">{data.differentiator}</h2></div></section><section className="section-pad"><div className="container grid gap-12 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Questions, answered</p><h2 className="display mt-4 text-[clamp(44px,5vw,72px)]">FAQ</h2></div><FAQ items={data.faq} /></div></section><CTA /></main><Footer /></div>;
}
