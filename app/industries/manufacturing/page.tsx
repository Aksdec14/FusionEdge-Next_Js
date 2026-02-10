"use client";
// ─── next.config.js reminder ─────────────────────────────────────────────────
// Make sure your next.config.ts includes:
//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "images.unsplash.com" },
//     ],
//   },
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
    Wrench,
    ShieldCheck,
    Boxes,
    Users,
    FileBarChart,
    Headphones,
    TrendingUp,
    ArrowRight,
    ChevronDown,
} from "lucide-react";

// ─── Unsplash Image URLs ─────────────────────────────────────────────────────
const IMAGES = {
    hero: "https://images.unsplash.com/photo-1746014601017-4e515ef51722?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dashboard: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format&fit=crop",
    management: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop",
    support: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80&auto=format&fit=crop",
    scalable: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
} as const;

// ─── Types ───────────────────────────────────────────────────────────────────
interface FeatureCard {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface ContentSection {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    body: string;
    imgUrl: string;
    imgAlt: string;
    imageSide: "left" | "right";
}

// ─── Hook: Intersection Observer ─────────────────────────────────────────────
function useReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}

// ─── Hook: Animated Counter ──────────────────────────────────────────────────
function useCounter(target: number, duration = 1800) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const rafRef = useRef<number>(0);
    const start = useCallback(() => {
        if (started) return;
        setStarted(true);
        const t0 = performance.now();
        const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
    }, [started, target, duration]);
    useEffect(() => () => cancelAnimationFrame(rafRef.current), []);
    return { count, start };
}

// ─── Decorative Blob ─────────────────────────────────────────────────────────
const Blob = ({ color, className }: { color: string; className: string }) => (
    <div className={className} aria-hidden="true">
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <defs><filter id={`blur-${color.slice(0, 6)}`}><feGaussianBlur stdDeviation="40" /></filter></defs>
            <ellipse cx="100" cy="100" rx="90" ry="75" fill={color} filter={`url(#blur-${color.slice(0, 6)})`} />
        </svg>
    </div>
);

// ─── Uptime Ring (SVG progress circle) ───────────────────────────────────────
const UptimeRing = ({ value, label }: { value: number; label: string }) => {
    const { ref, visible } = useReveal(0.3);
    const radius = 38;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div ref={ref} className="flex flex-col items-center">
            <div className="relative w-28 h-28">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Track */}
                    <circle cx="50" cy="50" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="6" />
                    {/* Animated fill */}
                    <circle
                        cx="50" cy="50" r={radius} fill="none"
                        stroke="url(#ringGrad)" strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={visible ? offset : circumference}
                        style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)" }}
                    />
                    <defs>
                        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#5D1F73" />
                            <stop offset="100%" stopColor="#1ABC9C" />
                        </linearGradient>
                    </defs>
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-extrabold text-[#5D1F73]">{value}%</span>
                </div>
            </div>
            <span className="mt-2 text-xs font-semibold text-gray-500 tracking-widest uppercase">{label}</span>
        </div>
    );
};

// ─── Stat Card ───────────────────────────────────────────────────────────────
const StatCard = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const { count, start } = useCounter(target, 1600);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.4 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    useEffect(() => { if (inView) start(); }, [inView, start]);

    return (
        <div ref={ref} className="flex flex-col items-center"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.6s cubic-bezier(0.22,1,0.36,1)" }}>
            <span className="text-4xl sm:text-5xl font-extrabold"
                style={{ background: "linear-gradient(135deg,#5D1F73,#1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {count}{suffix}
            </span>
            <span className="mt-1 text-xs font-semibold text-gray-500 tracking-widest uppercase">{label}</span>
        </div>
    );
};

// ─── Feature Card ────────────────────────────────────────────────────────────
const FeatureCardComp = ({ card, delay }: { card: FeatureCard; delay: number }) => {
    const { ref, visible } = useReveal(0.15);
    return (
        <div ref={ref}
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms` }}
            className="group relative bg-white border border-gray-200 rounded-2xl p-7 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden">
            {/* Gradient top-bar – slides in on hover via CSS */}
            <div className="accent-bar absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                style={{ background: "linear-gradient(90deg,#5D1F73,#1ABC9C)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)" }} />
            <style>{`.group:hover .accent-bar { transform: scaleX(1) !important; }`}</style>

            <div className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                style={{ background: "linear-gradient(135deg,#ede9f0,#e0faf4)" }}>
                <span className="text-[#1ABC9C]">{card.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-[#5D1F73] mb-3">{card.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{card.description}</p>
        </div>
    );
};

// ─── Content Section (alternating image / text) ─────────────────────────────
const ContentSectionComp = ({ section, index }: { section: ContentSection; index: number }) => {
    const { ref, visible } = useReveal(0.1);
    const isRight = section.imageSide === "right";

    const textBlock = (
        <div className="flex-1 space-y-4"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : `translateX(${isRight ? "-40px" : "40px"})`, transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s" }}>
            {/* Feature badge */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase" style={{ color: "#1ABC9C" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1ABC9C" }} />
                Feature 0{index + 1}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#5D1F73] flex items-start gap-3">
                <span className="mt-1 shrink-0" style={{ color: "#1ABC9C" }}>{section.icon}</span>
                <span>{section.title}</span>
            </h3>
            <p className="text-gray-500 italic text-sm">{section.subtitle}</p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{section.body}</p>
        </div>
    );

    const imageBlock = (
        <div className="flex-1 group"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.95)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <div className="relative w-full aspect-video">
                    <Image src={section.imgUrl} alt={section.imgAlt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5D1F73]/10 via-transparent to-[#1ABC9C]/10" />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: "linear-gradient(135deg,#1ABC9C,#5D1F73)" }} />
            </div>
        </div>
    );

    return (
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {isRight ? <>{textBlock}{imageBlock}</> : <>{imageBlock}{textBlock}</>}
        </div>
    );
};

// ─── Connector between content sections ──────────────────────────────────────
const SectionConnector = ({ number }: { number: number }) => (
    <div className="flex flex-col items-center py-2">
        {/* Vertical dashed line */}
        <div className="w-px h-8" style={{ background: "repeating-linear-gradient(to bottom, #1ABC9C 0, #1ABC9C 4px, transparent 4px, transparent 8px)" }} />
        {/* Numbered circle */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#1ABC9C] bg-white shadow-md">
            <span className="text-xs font-bold text-[#1ABC9C]">{number}</span>
        </div>
        <div className="w-px h-8" style={{ background: "repeating-linear-gradient(to bottom, #1ABC9C 0, #1ABC9C 4px, transparent 4px, transparent 8px)" }} />
    </div>
);

// ─── Marquee ticker ──────────────────────────────────────────────────────────
const tickerItems = [
    "40% Less Downtime",
    "Real-Time Asset Tracking",
    "Automated Preventive Maintenance",
    "24/7 Support Coverage",
    "Smart Inventory Management",
    "Enterprise-Grade Security",
];

const Ticker = () => (
    <div className="overflow-hidden whitespace-nowrap py-3" style={{ background: "linear-gradient(90deg,#5D1F73,#3a1259,#5D1F73)" }}>
        <style>{`
      @keyframes ticker-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      .ticker-track { display: flex; animation: ticker-scroll 20s linear infinite; }
    `}</style>
        <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-3 px-8 text-sm font-semibold text-white/80 tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1ABC9C" }} />
                    {item}
                </span>
            ))}
        </div>
    </div>
);

// ─── Data ────────────────────────────────────────────────────────────────────
const featureCards: FeatureCard[] = [
    {
        icon: <ShieldCheck size={26} />,
        title: "Preventive Maintenance",
        description: "FusionEdge tracks every maintenance task automatically. Proactive checklists and scheduled preventive routines guarantee enhanced asset availability and consistent uptime across every facility.",
    },
    {
        icon: <Boxes size={26} />,
        title: "Spare Parts Inventory Planning",
        description: "Smart inventory tracking paired with automated reordering ensures critical parts are always on hand. Eliminate emergency expenses and production stoppages with fail-proof supply continuity.",
    },
    {
        icon: <Wrench size={26} />,
        title: "Automated Maintenance Processes",
        description: "Automate workflows, minimize manual interventions, and empower teams with intelligent scheduling and reporting — achieving optimal efficiency without the overhead.",
    },
];

const contentSections: ContentSection[] = [
    {
        icon: <Users size={28} />,
        title: "Custom Dashboard, Automated Reports",
        subtitle: "Know your assets with real-time insights",
        body: "Stay on top of maintenance performance by tracking and optimizing every activity. Our analytical insights surface the data you need to make focused, informed decisions for asset maintenance and repairs — at a glance.",
        imgUrl: IMAGES.dashboard,
        imgAlt: "Custom Dashboard",
        imageSide: "right",
    },
    {
        icon: <FileBarChart size={28} />,
        title: "Maintenance Management at Your Fingertips",
        subtitle: "A bespoke platform, under your command",
        body: "Run maintenance processes exactly how your operation demands. Customized work-request portals, QR codes, smart templates, and automated reports combine into a single command center — peak performance with maximum efficiency.",
        imgUrl: IMAGES.management,
        imgAlt: "Maintenance Management",
        imageSide: "left",
    },
    {
        icon: <Headphones size={28} />,
        title: "In a Jam? FusionEdge Has Your Back",
        subtitle: "A friendly platform, round the clock",
        body: "A robust help centre, live support, and embedded how-to videos mean every question gets answered fast. No matter the plan, FusionEdge's customer-first service responds instantly — making maintenance effortless at every step.",
        imgUrl: IMAGES.support,
        imgAlt: "24/7 Support",
        imageSide: "right",
    },
    {
        icon: <TrendingUp size={28} />,
        title: "Scalable Solution for Any Team Size",
        subtitle: "Big or small — the platform grows with you",
        body: "FusionEdge is purpose-built to elevate maintenance management at every scale. This future-ready, flexible solution adapts as your team expands — from a lean startup crew to full enterprise operations, without missing a beat.",
        imgUrl: IMAGES.scalable,
        imgAlt: "Scalable Operations",
        imageSide: "left",
    },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Manufacturing() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [parallax, setParallax] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            if (heroRef.current) {
                setParallax(heroRef.current.getBoundingClientRect().top * 0.07);
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: "'Outfit', system-ui, -apple-system, sans-serif" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        * { font-family: 'Outfit', system-ui, -apple-system, sans-serif; }`}
            </style>

            <Navbar />

            {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
            <section className="relative overflow-hidden mt-20" style={{ minHeight: "92vh" }}>
                <Blob color="rgba(93,31,115,0.07)" className="absolute -top-24 -right-24 w-96 h-96 pointer-events-none" />
                <Blob color="rgba(26,188,156,0.06)" className="absolute -bottom-16 -left-20 w-80 h-80 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-14 pb-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* ── Left: copy ── */}
                    <div className="flex-1 z-10 space-y-6">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full border"
                            style={{ background: "linear-gradient(135deg,#f3ebf5,#edfcf8)", borderColor: "#e9d5ff", color: "#5D1F73" }}>
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1ABC9C" }} />
                            Manufacturing Maintenance Software
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-tight">
                            Run at full capacity —{" "}
                            <span style={{ background: "linear-gradient(135deg,#5D1F73,#1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                every minute counts
                            </span>
                        </h1>

                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                            Turn downtime into maximum uptime with FusionEdge's smart manufacturing intelligence. Ensure 100 % operational availability with the best asset-management solution built for the floor.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link href="/request-demo"
                                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                                style={{ background: "linear-gradient(135deg,#5D1F73,#1ABC9C)" }}>
                                Request Demo <ArrowRight size={18} />
                            </Link>
                            <Link href="/contact"
                                className="inline-flex items-center gap-2 text-[#111827] font-semibold px-7 py-3.5 rounded-xl border-2 border-gray-300 bg-white transition-all duration-300 hover:border-[#5D1F73] hover:bg-[#f3ebf5]">
                                Learn More
                            </Link>
                        </div>

                        {/* Stats row: ring + counters */}
                        <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-gray-200 mt-2">
                            <UptimeRing value={99} label="Uptime" />
                            <StatCard target={40} suffix="%" label="Less Downtime" />
                            <StatCard target={500} suffix="+" label="Facilities" />
                        </div>
                    </div>

                    {/* ── Right: hero image ── */}
                    <div ref={heroRef} className="flex-1 z-10">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
                            style={{ transform: `translateY(${parallax}px)`, transition: "transform 0.1s linear" }}>
                            <div className="relative w-full aspect-video">
                                <Image src={IMAGES.hero} alt="Manufacturing Operations" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" priority />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                                {/* Glass badge */}
                                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-xl border border-white/20"
                                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}>
                                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1ABC9C" }} />
                                    <span className="text-white text-xs font-semibold tracking-wide">Live Factory Dashboard</span>
                                </div>
                            </div>
                            <div className="h-1" style={{ background: "linear-gradient(90deg,#5D1F73,#1ABC9C)" }} />
                        </div>
                    </div>
                </div>

                {/* Scroll hint */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 animate-bounce">
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                    <ChevronDown size={18} />
                </div>
            </section>

            {/* ══════════════════════════ TICKER STRIP ═════════════════════════════════ */}
            <Ticker />

            {/* ═══════════════════ FEATURE CARDS SECTION ═══════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#1ABC9C" }}>Why FusionEdge</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D1F73] leading-snug mb-5">
                            The antidote to potential breakdowns:{" "}
                            <span style={{ background: "linear-gradient(135deg,#5D1F73,#1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>FusionEdge</span>
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                            Manage operations smoothly with prompt maintenance alerts and analytical dashboards. Shift from reactive repairs to preventive care — boosting asset reliability and longevity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {featureCards.map((card, i) => <FeatureCardComp key={i} card={card} delay={i * 120} />)}
                    </div>
                </div>
            </section>

            {/* ═══════════════ TOGETHER WE ACHIEVE MORE ════════════════════════════════ */}
            <section className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg,#ffffff 0%,#f8f9fa 100%)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-16 sm:mb-20">
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#1ABC9C" }}>How It Works</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D1F73] leading-snug">
                            Together, we achieve{" "}
                            <span style={{ background: "linear-gradient(135deg,#5D1F73,#1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>more</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {contentSections.map((section, i) => (
                            <React.Fragment key={i}>
                                <ContentSectionComp section={section} index={i} />
                                {i < contentSections.length - 1 && <SectionConnector number={i + 2} />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═════════════════════════ FINAL CTA ═════════════════════════════════════ */}
            <section className="py-20 lg:py-28 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden">
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#f3ebf5 0%,#edfcf8 50%,#f0fdf4 100%)" }} />
                    <Blob color="rgba(93,31,115,0.08)" className="absolute -top-12 -left-12 w-64 h-64 pointer-events-none" />
                    <Blob color="rgba(26,188,156,0.07)" className="absolute -bottom-16 -right-16 w-72 h-72 pointer-events-none" />
                    <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="none">
                        <line x1="0" y1="200" x2="800" y2="150" stroke="#5D1F73" strokeWidth="1" />
                        <line x1="0" y1="250" x2="800" y2="220" stroke="#1ABC9C" strokeWidth="0.5" />
                        <circle cx="650" cy="80" r="100" stroke="#5D1F73" strokeWidth="0.5" fill="none" />
                    </svg>

                    <div className="relative z-10 text-center py-16 sm:py-20 px-6 sm:px-12">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#1ABC9C" }}>
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1ABC9C" }} />
                            Get Started
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D1F73] leading-snug mb-5">
                            Let's glimpse how FusionEdge is{" "}
                            <span style={{ background: "linear-gradient(135deg,#5D1F73,#1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>reshaping the future</span>
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                            Optimum maintenance for manufacturing companies and contractors — built for scale, designed for simplicity.
                        </p>
                        <Link href="/contact"
                            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                            style={{ background: "linear-gradient(135deg,#5D1F73,#1ABC9C)" }}>
                            Start Your Journey <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}