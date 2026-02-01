"use client";
// ─── next.config.ts reminder ─────────────────────────────────────────────────
// Ensure your next.config.ts includes:
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
    Star,
    Clock,
    Heart,
    ArrowRight,
    ChevronDown,
} from "lucide-react";

// ─── Unsplash Images ─────────────────────────────────────────────────────────
const IMAGES = {
    hero: "https://images.unsplash.com/photo-1587523945-12c77c3d2d51?w=1200&q=80&auto=format&fit=crop",
    workOrder: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80&auto=format&fit=crop",
    insights: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
    multiProp: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop",
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
    imgUrl: string;
    imgAlt: string;
    imageSide: "left" | "right";
}

interface PromiseCard {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// ─── Hook: Scroll Reveal ─────────────────────────────────────────────────────
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

// ─── Blob ────────────────────────────────────────────────────────────────────
const Blob = ({ color, className }: { color: string; className: string }) => (
    <div className={className} aria-hidden="true">
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <defs>
                <filter id={`blur-${color.replace(/[^a-z0-9]/gi, "").slice(0, 8)}`}>
                    <feGaussianBlur stdDeviation="40" />
                </filter>
            </defs>
            <ellipse cx="100" cy="100" rx="90" ry="75" fill={color}
                filter={`url(#blur-${color.replace(/[^a-z0-9]/gi, "").slice(0, 8)})`} />
        </svg>
    </div>
);

// ─── Animated Star Rating Widget ─────────────────────────────────────────────
const StarRating = ({ value, outOf, label }: { value: number; outOf: number; label: string }) => {
    const { ref, visible } = useReveal(0.3);
    return (
        <div ref={ref} className="flex flex-col items-center">
            <div className="flex items-center gap-0.5">
                {Array.from({ length: outOf }).map((_, i) => (
                    <Star
                        key={i}
                        size={22}
                        fill={visible && i < value ? "#F59E0B" : "none"}
                        stroke={visible && i < value ? "#F59E0B" : "#D1D5DB"}
                        style={{
                            transition: `all 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 120}ms`,
                            transform: visible && i < value ? "scale(1.15)" : "scale(1)",
                        }}
                    />
                ))}
            </div>
            <span className="mt-1.5 text-xs font-semibold text-gray-500 tracking-widest uppercase">{label}</span>
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

// ─── Promise Card (brand-promise row) ────────────────────────────────────────
const PromiseCardComp = ({ card, delay }: { card: PromiseCard; delay: number }) => {
    const { ref, visible } = useReveal(0.2);
    return (
        <div ref={ref}
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `all 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`, background: "linear-gradient(145deg, #faf7fc, #f0fdf9)" }}
            className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-[#E9D5FF] hover:border-[#1ABC9C] transition-colors duration-300">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md"
                style={{ background: "linear-gradient(135deg,#5D1F73,#1ABC9C)" }}>
                <span className="text-white">{card.icon}</span>
            </div>
            <h4 className="text-base font-bold text-[#5D1F73] mb-2">{card.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
        </div>
    );
};

// ─── Content Section ─────────────────────────────────────────────────────────
const ContentSectionComp = ({ section, index }: { section: ContentSection; index: number }) => {
    const { ref, visible } = useReveal(0.1);
    const isRight = section.imageSide === "right";

    const textBlock = (
        <div className="flex-1 space-y-4"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : `translateX(${isRight ? "-40px" : "40px"})`, transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s" }}>
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
            {section.checks.length > 0 && (
                <div className="space-y-2 pt-2">
                    {section.checks.map((c, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "#10B981" }}>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M2 5L4.5 7.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="text-gray-600 text-sm leading-relaxed">{c}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    const imageBlock = (
        <div className="flex-1 group"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.95)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <div className="relative w-full aspect-video">
                    <Image src={section.imgUrl} alt={section.imgAlt} fill sizes="(max-width:768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5D1F73]/10 via-transparent to-[#1ABC9C]/10" />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ background: "linear-gradient(135deg,#1ABC9C,#5D1F73)" }} />
            </div>
        </div>
    );

    return (
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {isRight ? <>{textBlock}{imageBlock}</> : <>{imageBlock}{textBlock}</>}
        </div>
    );
};

// ─── Gradient Divider ────────────────────────────────────────────────────────
const GradientDivider = () => (
    <div className="flex items-center justify-center">
        <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(90deg, transparent, #e5e7eb, transparent)" }} />
    </div>
);

// ─── Data ────────────────────────────────────────────────────────────────────
const featureCards: FeatureCard[] = [
    {
        icon: <ShieldCheck size={26} />,
        title: "Preventive Maintenance",
        description: "Out-of-order equipment threatens seamless guest experiences, especially during peak hours. FusionEdge proactively addresses and resolves asset issues before they ever disrupt operations or guest comfort.",
    },
    {
        icon: <Boxes size={26} />,
        title: "Spare Parts Inventory Planning",
        description: "Automated notifications alert you in advance about depleting parts or items needing immediate replacement. Stay ahead of shortages and keep operations running without interruption.",
    },
    {
        icon: <Wrench size={26} />,
        title: "Automated Maintenance Processes",
        description: "FusionEdge automates workflows, minimizes manual overhead, and empowers your teams with smart scheduling and reporting — so every task completes on time, every time.",
    },
];

const promiseCards: PromiseCard[] = [
    {
        icon: <Heart size={22} />,
        title: "Guest First, Always",
        description: "Every maintenance decision is guided by one goal — delivering an exceptional, uninterrupted guest experience.",
    },
    {
        icon: <Clock size={22} />,
        title: "Resolution in Minutes",
        description: "From request to completion, FusionEdge compresses response times so issues vanish before guests even notice.",
    },
    {
        icon: <ShieldCheck size={22} />,
        title: "Safety & Compliance",
        description: "Built-in compliance checks and configurable templates ensure your property stays safe, certified, and audit-ready at all times.",
    },
];

const contentSections: ContentSection[] = [
    {
        icon: <Users size={28} />,
        title: "Turn Guest Requests into Commands",
        subtitle: "Customized work-order templates for seamless measures",
        body: "Work requests flow in through the FusionEdge portal — guests or staff can report issues instantly via QR code. New tasks are automatically assigned to the right team member, and the requester receives a completion alert without lifting a finger.",
        checks: [
            "Work-order templates are fully customizable to match your property's specific maintenance workflows.",
            "QR codes posted across the property let anyone report an issue in seconds — no app download needed.",
            "Automated completion alerts close the loop instantly, keeping guests informed and your team accountable.",
        ],
        imgUrl: IMAGES.workOrder,
        imgAlt: "Guest Work Orders",
        imageSide: "right",
    },
    {
        icon: <FileBarChart size={28} />,
        title: "Data-Driven Insights, Driving Excellence",
        subtitle: "Customizable reports and dashboards for maintenance",
        body: "FusionEdge's fully customizable dashboards surface data-driven insights for every decision. Track all maintenance activity in real time to maintain optimum operations. Automated reports cover work-order completion, asset status, inventory health, and team performance — all in one place.",
        checks: [],
        imgUrl: IMAGES.insights,
        imgAlt: "Data Insights Dashboard",
        imageSide: "left",
    },
    {
        icon: <Wrench size={28} />,
        title: "Scale Maintenance Across Multi-Property Brands",
        subtitle: "Deliver exceptional guest experience at every location",
        body: "FusionEdge is purpose-built for large, multi-property hospitality portfolios. The platform helps teams maintain tasks while optimizing preventive and asset management across every site. Configurable templates streamline service management — ensuring safety, compliance, and consistency at scale.",
        checks: [],
        imgUrl: IMAGES.multiProp,
        imgAlt: "Multi-Property Management",
        imageSide: "right",
    },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Hospitality() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [parallax, setParallax] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            if (heroRef.current) setParallax(heroRef.current.getBoundingClientRect().top * 0.07);
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

            {/* ══════════════════════════════ HERO ════════════════════════════════════ */}
            <section className="relative overflow-hidden mt-20" style={{ minHeight: "92vh" }}>
                <Blob color="rgba(93,31,115,0.06)" className="absolute -top-20 -left-24 w-96 h-96 pointer-events-none" />
                <Blob color="rgba(26,188,156,0.05)" className="absolute -bottom-14 -right-20 w-80 h-80 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-14 pb-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Left: copy */}
                    <div className="flex-1 z-10 space-y-6">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full border"
                            style={{ background: "linear-gradient(135deg,#f3ebf5,#edfcf8)", borderColor: "#e9d5ff", color: "#5D1F73" }}>
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1ABC9C" }} />
                            Hospitality Maintenance Software
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-tight">
                            Satiate your guests with{" "}
                            <span style={{ background: "linear-gradient(135deg,#5D1F73,#1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                the best hospitality
                            </span>
                        </h1>

                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                            "Guest is God" — and FusionEdge makes sure your property lives up to that promise. Span work requests to work orders, track operations, and optimize resolution times seamlessly.
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

                        {/* Stats: star widget + counters */}
                        <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-gray-200 mt-2">
                            <StarRating value={5} outOf={5} label="Guest Satisfaction" />
                            <StatCard target={98} suffix="%" label="Completion Rate" />
                            <StatCard target={12} suffix="m" label="Avg Resolution" />
                        </div>
                    </div>

                    {/* Right: hero image */}
                    <div ref={heroRef} className="flex-1 z-10">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
                            style={{ transform: `translateY(${parallax}px)`, transition: "transform 0.1s linear" }}>
                            <div className="relative w-full aspect-video">
                                <Image src={IMAGES.hero} alt="Hospitality Operations" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" priority />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                {/* Glass badge */}
                                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 rounded-xl border border-white/20"
                                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}>
                                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#F59E0B" }} />
                                    <span className="text-white text-xs font-semibold tracking-wide">Guest Experience — Live</span>
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

            {/* ═══════════════════ FEATURE CARDS ═══════════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#1ABC9C" }}>
                            Why FusionEdge
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D1F73] leading-snug mb-5">
                            Safeguard your hospitality:{" "}
                            <span style={{ background: "linear-gradient(135deg,#5D1F73,#1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                count on FusionEdge
                            </span>
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                            Prevent equipment breakdowns, failed routine tasks, and operational disruptions. Keep optimum uptime — and your guests smiling.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {featureCards.map((card, i) => <FeatureCardComp key={i} card={card} delay={i * 120} />)}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ BRAND PROMISE ROW ═══════════════════════════════════ */}
            <section className="py-14 lg:py-20" style={{ background: "linear-gradient(180deg, #ffffff 0%, #faf7fc 100%)" }}>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-10">
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#1ABC9C" }}>
                            Our Commitment
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#5D1F73]">What we promise every property</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
                        {promiseCards.map((card, i) => <PromiseCardComp key={i} card={card} delay={i * 140} />)}
                    </div>
                </div>
            </section>

            {/* ═══════════════ TOGETHER WE ACHIEVE MORE ════════════════════════════════ */}
            <section className="py-20 lg:py-28" style={{ background: "linear-gradient(180deg,#faf7fc 0%,#f8f9fa 100%)" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-16 sm:mb-20">
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#1ABC9C" }}>
                            How It Works
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D1F73] leading-snug">
                            Together, we achieve{" "}
                            <span style={{ background: "linear-gradient(135deg,#5D1F73,#1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                more
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-24 lg:space-y-32">
                        {contentSections.map((section, i) => (
                            <React.Fragment key={i}>
                                <ContentSectionComp section={section} index={i} />
                                {i < contentSections.length - 1 && <GradientDivider />}
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
                            <span style={{ background: "linear-gradient(135deg,#5D1F73,#1ABC9C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                reshaping the future
                            </span>
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                            Optimum maintenance for hospitality brands — built for scale, designed so your guests never notice a thing.
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