"use client";
// ─── next.config.js reminder ─────────────────────────────────────────────────
// Make sure your next.config.js (or next.config.ts) includes:
//
//   module.exports = {
//     images: {
//       remotePatterns: [
//         { protocol: "https", hostname: "images.unsplash.com" },
//       ],
//     },
//   };
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import {
    Wrench,
    ShieldCheck,
    Boxes,
    Users,
    FileBarChart,
    ArrowRight,
    ChevronDown,
} from "lucide-react";

// ─── Unsplash Image URLs ─────────────────────────────────────────────────────
const IMAGES = {
    hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&auto=format&fit=crop",
    workOrders: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80&auto=format&fit=crop",
    analytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
    enterprise: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop",
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
    checks: string[];
    imageSide: "left" | "right";
    imgUrl: string;
    imgAlt: string;
}

// ─── Hook: Intersection Observer for Scroll Reveal ───────────────────────────
function useReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return { ref, visible };
}

// ─── Animated Counter Hook ───────────────────────────────────────────────────
function useCounter(target: number, duration = 1800) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const rafRef = useRef<number>(0);

    const start = useCallback(() => {
        if (started) return;
        setStarted(true);
        const startTime = performance.now();
        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
    }, [started, target, duration]);

    useEffect(() => () => cancelAnimationFrame(rafRef.current), []);
    return { count, start };
}

// ─── Decorative SVG Blob ─────────────────────────────────────────────────────
const Blob = ({ color, className }: { color: string; className: string }) => (
    <div className={className}>
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <defs>
                <filter id="blur">
                    <feGaussianBlur stdDeviation="40" />
                </filter>
            </defs>
            <ellipse cx="100" cy="100" rx="90" ry="75" fill={color} filter="url(#blur)" />
        </svg>
    </div>
);

// ─── Stat Card ───────────────────────────────────────────────────────────────
const StatCard = ({
    target,
    suffix,
    label,
}: {
    target: number;
    suffix: string;
    label: string;
}) => {
    const statRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const { count, start } = useCounter(target, 1600);

    useEffect(() => {
        const el = statRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setInView(true); },
            { threshold: 0.4 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    useEffect(() => { if (inView) start(); }, [inView, start]);

    return (
        <div
            ref={statRef}
            className="flex flex-col items-center"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.6s cubic-bezier(0.22,1,0.36,1)" }}
        >
            <span className="text-4xl sm:text-5xl font-extrabold" style={{ background: "linear-gradient(135deg, #5D1F73, #1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {count}{suffix}
            </span>
            <span className="mt-1 text-sm font-medium text-gray-500 tracking-wide uppercase">{label}</span>
        </div>
    );
};

// ─── Feature Card Component ─────────────────────────────────────────────────
const FeatureCardComp = ({ card, delay }: { card: FeatureCard; delay: number }) => {
    const { ref, visible } = useReveal(0.15);
    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
            }}
            className="group relative bg-white border border-gray-200 rounded-2xl p-7 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
        >
            {/* Teal accent bar that slides in on hover */}
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: "linear-gradient(90deg, #5D1F73, #1ABC9C)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)" }} />
            <style>{`
        .feature-card:hover .accent-bar { transform: scaleX(1) !important; }
      `}</style>
            <div className="feature-card">
                {/* Icon Circle */}
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5" style={{ background: "linear-gradient(135deg, #ede9f0, #e0faf4)" }}>
                    <span className="text-[#1ABC9C]">{card.icon}</span>
                </div>
                <h3 className="text-xl font-700 text-[#5D1F73] mb-3" style={{ fontWeight: 700 }}>{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{card.description}</p>
            </div>
        </div>
    );
};

// ─── Content Section Component ───────────────────────────────────────────────
const ContentSection = ({ section, index }: { section: ContentSection; index: number }) => {
    const { ref, visible } = useReveal(0.1);
    const isRight = section.imageSide === "right";

    const textBlock = (
        <div
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : `translateX(${isRight ? "-40px" : "40px"})`,
                transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s",
            }}
            className="flex-1 space-y-4"
        >
            {/* Badge */}
            <span
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#1ABC9C" }}
            >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1ABC9C" }} />
                Feature 0{index + 1}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#5D1F73] flex items-start gap-3">
                <span className="mt-1 shrink-0" style={{ color: "#1ABC9C" }}>{section.icon}</span>
                <span>{section.title}</span>
            </h3>
            <p className="text-gray-500 italic text-sm">{section.subtitle}</p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{section.body}</p>
            {section.checks.length > 0 && (
                <div className="space-y-2 pt-2">
                    {section.checks.map((c, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "#10B981" }}>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4.5 7.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                            <span className="text-gray-600 text-sm leading-relaxed">{c}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    const imageBlock = (
        <div
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.95)",
                transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s",
            }}
            className="flex-1 group"
        >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <div className="relative w-full aspect-video">
                    <Image
                        src={section.imgUrl}
                        alt={section.imgAlt}
                        fill
                        sizes="(max-width:768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle brand-tinted overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5D1F73]/10 via-transparent to-[#1ABC9C]/10" />
                </div>
                {/* Teal shimmer overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, #1ABC9C, #5D1F73)" }} />
            </div>
        </div>
    );

    return (
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {isRight ? (
                <>
                    {textBlock}
                    {imageBlock}
                </>
            ) : (
                <>
                    {imageBlock}
                    {textBlock}
                </>
            )}
        </div>
    );
};

// ─── Data ────────────────────────────────────────────────────────────────────
const featureCards: FeatureCard[] = [
    {
        icon: <ShieldCheck size={26} />,
        title: "Preventive Maintenance",
        description:
            "Equipment must run at peak capacity during critical hours. FusionEdge's preventive maintenance ensures regular servicing regardless of condition, preventing costly disruptions to operations.",
    },
    {
        icon: <Boxes size={26} />,
        title: "Spare Parts Inventory Planning",
        description:
            "Track every asset and part instantly. Automated reordering prevents last-minute rushes during breakdowns, proactively saving cost and time while improving operational efficiency.",
    },
    {
        icon: <Wrench size={26} />,
        title: "Automated Maintenance Processes",
        description:
            "Automate maintenance workflows, minimize manual interventions, and empower teams with smart scheduling and reporting to achieve optimal efficiency across all facilities.",
    },
];

const contentSections: ContentSection[] = [
    {
        icon: <Users size={28} />,
        title: "Seamless Work Orders, Effortless Task Assignment",
        subtitle: "From request to resolution — in minutes",
        body: "FusionEdge transforms issue requests into structured work orders through customized templates. Tasks are instantly assigned to the right staff, and resolution happens rapidly with real-time overdue notifications keeping everything on track.",
        checks: [
            "Custom templates auto-generate work orders — e.g. a malfunctioning refrigerator triggers a \"Refrigeration Maintenance\" template instantly.",
            "Drag-and-drop dashboard lets managers assign tasks to technicians or adjust shift schedules with zero friction.",
            "Overdue alerts fire before operational disruptions occur, enabling seamless preventive management at every level.",
        ],
        imageSide: "right",
        imgUrl: IMAGES.workOrders,
        imgAlt: "Work Orders & Task Assignment",
    },
    {
        icon: <FileBarChart size={28} />,
        title: "Turn Data Into Actionable Insight",
        subtitle: "Let the metrics speak for themselves",
        body: "The customizable FusionEdge dashboard surfaces completed work orders, resolved tasks, and live equipment status. Auto-generated reports are shared directly with stakeholders — transforming raw data into the clarity needed for smart decisions.",
        checks: [],
        imageSide: "left",
        imgUrl: IMAGES.analytics,
        imgAlt: "Analytics & Reports",
    },
    {
        icon: <Wrench size={28} />,
        title: "Helm Enterprise Operations at Scale",
        subtitle: "One platform. Every facility. Full control.",
        body: "FusionEdge is built for large food & beverage brands. It manages assets, security, and maintenance tasks across multiple facilities and product lines. Customizable templates flag issues automatically, and the right corrective steps are taken instantly — compliance and workflow remain uninterrupted.",
        checks: [],
        imageSide: "right",
        imgUrl: IMAGES.enterprise,
        imgAlt: "Enterprise Operations",
    },
];

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function FoodBeverages() {
    const [scrolled, setScrolled] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    // Navbar shadow on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Subtle parallax on hero image placeholder
    const [parallax, setParallax] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                setParallax(rect.top * 0.08);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen" style={{ fontFamily: "'Outfit', system-ui, -apple-system, sans-serif" }}>
            {/* Google Font Import */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        * { font-family: 'Outfit', system-ui, -apple-system, sans-serif; }
      `}</style>

            {/* ── Sticky Navbar ── */}
            <Navbar />

            {/* ── Hero Section ── */}
            <section className="relative overflow-hidden mt-24" style={{ minHeight: "90vh" }}>
                {/* Decorative blobs */}
                <Blob color="rgba(93,31,115,0.07)" className="absolute -top-20 -left-20 w-96 h-96 pointer-events-none" />
                <Blob color="rgba(26,188,156,0.06)" className="absolute -bottom-10 -right-16 w-80 h-80 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Left: Text */}
                    <div className="flex-1 z-10 space-y-6">
                        {/* Pill badge */}
                        <span
                            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full border"
                            style={{ background: "linear-gradient(135deg, #f3ebf5, #edfcf8)", borderColor: "#e9d5ff", color: "#5D1F73" }}
                        >
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1ABC9C" }} />
                            Food & Beverage Maintenance Software
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-tight">
                            Integrating{" "}
                            <span style={{ background: "linear-gradient(135deg, #5D1F73, #1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                quality & safety
                            </span>{" "}
                            across your entire supply chain
                        </h1>

                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                            FusionEdge's centralized platform manages maintenance, tracks performance, and ensures seamless operations — eliminating the need for spreadsheets and fragmented tools.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link
                                href="/request-demo"
                                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                                style={{ background: "linear-gradient(135deg, #5D1F73, #1ABC9C)" }}
                            >
                                Request Demo <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-[#111827] font-semibold px-7 py-3.5 rounded-xl border-2 border-gray-300 bg-white transition-all duration-300 hover:border-[#5D1F73] hover:bg-[#f3ebf5]"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Trust stats row */}
                        <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-200 mt-4">
                            <StatCard target={500} suffix="+" label="Facilities" />
                            <StatCard target={99} suffix="%" label="Uptime" />
                            <StatCard target={40} suffix="%" label="Cost Reduction" />
                        </div>
                    </div>

                    {/* Right: Hero Visual */}
                    <div ref={heroRef} className="flex-1 z-10">
                        <div
                            className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
                            style={{ transform: `translateY(${parallax}px)`, transition: "transform 0.1s linear" }}
                        >
                            <div className="relative w-full aspect-video">
                                <Image
                                    src={IMAGES.hero}
                                    alt="Food & Beverage Operations"
                                    fill
                                    sizes="(max-width:768px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                                {/* Dark gradient overlay so bottom text/stripe reads cleanly */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                {/* Floating glass badge */}
                                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-xl border border-white/20"
                                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}>
                                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1ABC9C" }} />
                                    <span className="text-white text-xs font-semibold tracking-wide">Live Operations Dashboard</span>
                                </div>
                            </div>
                            {/* Bottom accent stripe */}
                            <div className="h-1" style={{ background: "linear-gradient(90deg, #5D1F73, #1ABC9C)" }} />
                        </div>
                    </div>
                </div>

                {/* Scroll hint */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 animate-bounce">
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                    <ChevronDown size={18} />
                </div>
            </section>

            {/* ── "Proper maintenance is the key to longevity" Section ── */}
            <section className="py-20 lg:py-28" style={{ background: "#ffffff" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#1ABC9C" }}>
                            Why FusionEdge
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D1F73] leading-snug mb-5">
                            Proper maintenance is the{" "}
                            <span style={{ background: "linear-gradient(135deg, #5D1F73, #1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                key to longevity
                            </span>
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                            FusionEdge assesses, analyses, and reminds through predictive analysis of asset failures. Unexpected breakdowns threaten production — we ensure excellence through meticulous quality control.
                        </p>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {featureCards.map((card, i) => (
                            <FeatureCardComp key={i} card={card} delay={i * 120} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── "Together We Achieve More" Content Sections ── */}
            <section className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    {/* Header */}
                    <div className="text-center mb-16 sm:mb-20">
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#1ABC9C" }}>
                            How It Works
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D1F73] leading-snug">
                            Together, we achieve{" "}
                            <span style={{ background: "linear-gradient(135deg, #5D1F73, #1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                more
                            </span>
                        </h2>
                    </div>

                    {/* Stacked content sections with dividers */}
                    <div className="space-y-24 lg:space-y-32">
                        {contentSections.map((section, i) => (
                            <React.Fragment key={i}>
                                <ContentSection section={section} index={i} />
                                {i < contentSections.length - 1 && (
                                    <div className="flex items-center justify-center">
                                        <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(90deg, transparent, #e5e7eb, transparent)" }} />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Final CTA Section ── */}
            <section className="py-20 lg:py-28 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f3ebf5 0%, #edfcf8 50%, #f0fdf4 100%)" }} />
                    {/* Decorative blobs inside */}
                    <Blob color="rgba(93,31,115,0.08)" className="absolute -top-12 -left-12 w-64 h-64 pointer-events-none" />
                    <Blob color="rgba(26,188,156,0.07)" className="absolute -bottom-16 -right-16 w-72 h-72 pointer-events-none" />
                    {/* Geometric lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="none">
                        <line x1="0" y1="200" x2="800" y2="150" stroke="#5D1F73" strokeWidth="1" />
                        <line x1="0" y1="250" x2="800" y2="220" stroke="#1ABC9C" strokeWidth="0.5" />
                        <circle cx="650" cy="80" r="100" stroke="#5D1F73" strokeWidth="0.5" fill="none" />
                    </svg>

                    {/* Content */}
                    <div className="relative z-10 text-center py-16 sm:py-20 px-6 sm:px-12">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#1ABC9C" }}>
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1ABC9C" }} />
                            Get Started
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D1F73] leading-snug mb-5">
                            Let's glimpse how FusionEdge is{" "}
                            <span style={{ background: "linear-gradient(135deg, #5D1F73, #1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                reshaping the future
                            </span>
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                            Optimum maintenance for Food & Beverage companies and contractors — built for scale, designed for simplicity.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
                            style={{ background: "linear-gradient(135deg, #5D1F73, #1ABC9C)" }}
                        >
                            Start Your Journey <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Footer ── */}
            <Footer />
        </div>
    );
}