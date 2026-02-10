"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle2,
    ArrowRight,
    ChevronDown,
    Leaf,
    LayoutDashboard,
    Wrench,
    Building2,
    Cpu,
    TrendingUp,
    Shield,
    Zap,
    BarChart3,
    Globe,
} from "lucide-react";
import {
    FaCheckCircle,
    FaClock,
    FaShieldAlt,
    FaRegFileAlt,
    FaUsers,
} from "react-icons/fa";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// ── Image paths ─────────────────────────────────────────────────────────────
const assetImage = "/images/35522.jpg";
const img = "/images/business-people-working-with-ipad-high-angle.png";
const img1 = "/images/representation-user-experience-interface-design.jpg";

// ── Data ────────────────────────────────────────────────────────────────────
const benefitsList = [
    "One view dashboard, reporting all critical KRAs across facilities",
    "Reduced breakdowns and repair costs through preventive maintenance alerts",
    "Automated dashboards and reports on key compliance and deviations",
    "Better energy utilisation and improved carbon footprint, making organization ESG compliant",
    "Integrated solution designed to meet future business needs and custom requirements",
];

const featureSections = [
    {
        title: "Proactive Maintenance",
        text: "Analyse and repair the equipment in advance before it gives up.",
        icon: <FaCheckCircle className="text-[#5D1F73] text-4xl" />,
        lucide: Wrench,
    },
    {
        title: "Smarter Building Management",
        text: "Based on data from HVAC, elevators, water, energy, and indoor air quality.",
        icon: <FaClock className="text-[#5D1F73] text-4xl" />,
        lucide: Building2,
    },
    {
        title: "Better Facility Services Management",
        text: "Based on vendor SLAs, compliance, and safety logs.",
        icon: <FaRegFileAlt className="text-[#5D1F73] text-4xl" />,
        lucide: Cpu,
    },
    {
        title: "Portfolio-Level Dashboards",
        text: "Assist multi-site leaders and facilities management companies in processes and best practice compliance.",
        icon: <FaUsers className="text-[#5D1F73] text-4xl" />,
        lucide: LayoutDashboard,
    },
    {
        title: "Sustainable Operations",
        text: "Promotes sustainable operations and carbon reduction by monitoring energy and waste metrics.",
        icon: <FaShieldAlt className="text-[#5D1F73] text-4xl" />,
        lucide: Leaf,
    },
];

export default function IntegratedAsset() {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div
            className="min-h-screen bg-white"
            style={{ fontFamily: "'Outfit', system-ui, -apple-system, sans-serif" }}
        >
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');`}</style>
            <Navbar />
            {/* ── Hero Section - Left Right Format ───────────────────────────── */}
            <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-teal-50 border border-purple-200 mb-6">
                                <span className="w-2 h-2 bg-[#1ABC9C] rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-[#5D1F73]">Integrated Asset Management</span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                                The Smarter Way to{" "}
                                <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                    Run Facility Management
                                </span>{" "}
                                in 2025
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                                Today, organisations are adopting various initiatives to enhance
                                efficiency and meet cost savings targets. Integrated platforms
                                bring everything into one intelligent system, reducing costs,
                                improving uptime, and providing real-time visibility across
                                portfolios.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
                                >
                                    Book a Demo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    href="/request-demo"
                                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 text-[#111827] rounded-xl font-semibold hover:border-[#5D1F73] hover:bg-purple-50 transition-all duration-300 text-center"
                                >
                                    Talk to an Expert
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <Image
                                src={assetImage}
                                alt="Integrated Asset Management"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why FusionEdge Section ──────────────────────────────────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            Why FusionEdge for{" "}
                            <span className="text-[#5D1F73]">Integrated Asset Management?</span>
                        </h2>
                        <p className="text-lg text-[#6B7280] leading-relaxed">
                            Integrated asset management supports ESG and net-zero goals by
                            optimizing resources and energy usage, reducing carbon emissions.
                            Facility management ensures smooth operations, with comfort,
                            safety, and efficiency — all unified in one intelligent system.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: TrendingUp,
                                title: "Proactive Maintenance",
                                description:
                                    "Analyse and repair equipment in advance before it gives up, preventing costly breakdowns.",
                            },
                            {
                                icon: Building2,
                                title: "Smarter Building Management",
                                description:
                                    "Based on data from HVAC, elevators, water, energy, and indoor air quality sensors.",
                            },
                            {
                                icon: Shield,
                                title: "Facility Services Management",
                                description:
                                    "Based on vendor SLAs, compliance, and safety logs for full operational control.",
                            },
                            {
                                icon: LayoutDashboard,
                                title: "Portfolio-Level Dashboards",
                                description:
                                    "Assist multi-site leaders and facility management companies in processes and best practice compliance.",
                            },
                            {
                                icon: Leaf,
                                title: "Sustainable Operations",
                                description:
                                    "Promotes sustainable operations and carbon reduction by monitoring energy and waste metrics.",
                            },
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-[#1ABC9C] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <benefit.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-[#6B7280]">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Image Section - Understanding Facility Management ───────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                                Understanding Facility Management{" "}
                                <span className="text-[#5D1F73]">in the Modern Era</span>
                            </h2>
                            <p className="text-lg text-[#6B7280] leading-relaxed mb-4">
                                Facility management covers maintenance, cleaning, building
                                management, space optimisation, energy utilisation, and vendor
                                coordination. Sustainability, productivity, and overall
                                organisational success are achieved with modern facility
                                management services.
                            </p>
                            <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                                Today, facility management ensures smooth operations, reduced
                                energy costs, adherence to safety standards, and optimal
                                organisational performance.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Waste reduction & renewable energy use",
                                    "Green certifications support",
                                    "Reduced operational cost",
                                    "Enhanced environmental performance",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                                        <span className="text-[#374151]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <Image
                                src={img}
                                alt="Facility Management"
                                width={700}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── What Integrated Asset Management Offers - Modules Grid ──────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            What Integrated Asset Management{" "}
                            <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                Offers
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featureSections.map((module, index) => {
                            const Icon = module.lucide;
                            return (
                                <div
                                    key={index}
                                    className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-[#1ABC9C]"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5D1F73]/5 to-[#1ABC9C]/5 rounded-bl-full" />
                                    <div className="relative">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                                            {module.title}
                                        </h3>
                                        <p className="text-[#6B7280] leading-relaxed">
                                            {module.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Image Section - Transforming Building Management (flipped) ──── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <Image
                                src={assetImage}
                                alt="Building Management"
                                width={700}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                                Transforming Building Management{" "}
                                <span className="text-[#5D1F73]">for the Future</span>
                            </h2>
                            <p className="text-lg text-[#6B7280] leading-relaxed mb-4">
                                Building management includes HVAC systems, lighting, energy
                                consumption, and safety compliance. FusionEdge allows
                                stakeholders to monitor operations, analyze performance, and
                                make informed decisions, improving routine operations and
                                workplace experience.
                            </p>
                            <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                                FusionEdge's data-rich analytics detect inefficiencies early,
                                provide real-time monitoring on HVAC energy usage, and support
                                smart, sustainable building strategies.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Real-time HVAC energy monitoring",
                                    "Early inefficiency detection",
                                    "Smart sustainable building strategies",
                                    "Informed stakeholder decision-making",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                                        <span className="text-[#374151]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Key Benefits - Features at a Glance ─────────────────────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            Key Benefits of Advanced{" "}
                            <span className="text-[#5D1F73]">Facility Management</span>
                        </h2>
                        <p className="text-lg text-[#6B7280] leading-relaxed">
                            The role of technology in facility services management — replacing
                            manual processes with IoT-based monitoring, AI-powered predictive
                            maintenance, and smart energy management.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefitsList.map((feature, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-6 bg-gradient-to-br from-purple-50/50 to-teal-50/50 rounded-xl border border-purple-200 hover:border-[#1ABC9C] transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
                                </div>
                                <p className="text-[#374151]">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Role of Technology - Image Section ──────────────────────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                                The Role of Technology in{" "}
                                <span className="text-[#5D1F73]">Facility Services Management</span>
                            </h2>
                            <p className="text-lg text-[#6B7280] leading-relaxed mb-4">
                                Technology has transformed facility services management by
                                replacing manual processes. IoT-based monitoring systems collect
                                real-time data, while AI-powered predictive maintenance analyzes
                                and predicts machine performance.
                            </p>
                            <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                                Efficient utilization of facility water, energy, and electricity
                                with IoT sensors and AI algorithms enhances asset lifecycle and
                                reduces carbon footprint.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "IoT-based real-time data collection",
                                    "AI-powered predictive maintenance",
                                    "Smart water & energy management",
                                    "Reduced carbon footprint",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                                        <span className="text-[#374151]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <Image
                                src={img1}
                                alt="Technology in Facility Management"
                                width={700}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Business Impact - Gradient Banner ───────────────────────────── */}
            <section className="relative py-12 md:py-16 bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Why FusionEdge is a Game-Changer
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                        {[
                            {
                                icon: TrendingUp,
                                title: "ESG Goals",
                                description:
                                    "Helps clients achieve ESG goals and operational resilience with green workflows and smart technologies.",
                            },
                            {
                                icon: BarChart3,
                                title: "Cost Optimization",
                                description:
                                    "Scalable, customizable solutions reduce operational cost and enhance environmental performance.",
                            },
                            {
                                icon: Globe,
                                title: "Future-Ready",
                                description:
                                    "Intelligent, future-ready platform designed to meet future business needs and custom requirements.",
                            },
                            {
                                icon: Zap,
                                title: "Superior Experience",
                                description:
                                    "Improves environmental impact, reduces carbon footprint, and ensures sustainable operations.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-5 h-5 text-[#5D1F73]" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Accordion inside banner */}
                    <div className="max-w-3xl mx-auto">
                        <button
                            className="w-full flex items-center justify-between p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-left"
                            onClick={() => setAccordionOpen(!accordionOpen)}
                        >
                            <span className="text-xl font-bold text-white">
                                FusionEdge provides integrated asset and facility management solutions that are scalable, customizable, intelligent, and future-ready.
                            </span>
                            <motion.div
                                animate={{ rotate: accordionOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0 ml-4 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"
                            >
                                <ChevronDown className="w-5 h-5 text-white" />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {accordionOpen && (
                                <motion.div
                                    key="accordion-body"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 py-6 bg-white/10 backdrop-blur-sm rounded-b-2xl border-x border-b border-white/20 -mt-2">
                                        <p className="text-white/90 leading-relaxed mb-4">
                                            FusionEdge provides integrated asset and facility
                                            management solutions that are scalable, customizable,
                                            intelligent, and future-ready. It helps clients achieve
                                            ESG goals, operational resilience, cost optimization, and
                                            superior user experience.
                                        </p>
                                        <p className="text-white/90 leading-relaxed">
                                            Leveraging green workflows and smart technologies,
                                            FusionEdge improves environmental impact, reduces carbon
                                            footprint, and ensures sustainable operations.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ── CTA Section ─────────────────────────────────────────────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="relative overflow-hidden bg-white rounded-2xl p-12 lg:p-16 border-2 border-gray-200 shadow-xl">
                        {/* Decorative Glows */}
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#5D1F73]/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#1ABC9C]/5 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                                We&apos;re All Ears for Your{" "}
                                <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                    Ideas &amp; Experience
                                </span>
                            </h2>
                            <p className="text-lg sm:text-xl text-[#6B7280] mb-8">
                                FusionEdge&apos;s adaptive Asset Management System is built for
                                precision and performance. Experience a personalized demo
                                tailored by our team.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link
                                    href="/contact"
                                    className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                                >
                                    Request a Demo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    href="/request-demo"
                                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 text-[#111827] rounded-xl font-semibold hover:border-[#5D1F73] hover:bg-purple-50 transition-all duration-300"
                                >
                                    Talk to an Expert
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}