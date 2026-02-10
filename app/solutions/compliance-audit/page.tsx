"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    CheckCircle2,
    TrendingUp,
    Shield,
    Zap,
    Globe,
    ArrowRight,
    FileText,
    Users,
    BarChart3,
    ClipboardCheck,
    Bell,
    Eye,
    Share2,
} from "lucide-react";
import {
    FaCheckCircle,
    FaClock,
    FaShieldAlt,
    FaRegFileAlt,
    FaUsers,
    FaChartLine,
} from "react-icons/fa";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// ── Image path ──────────────────────────────────────────────────────────────
// Replace with your actual image path
const complianceImage =
    "/images/audit-compliance-evaluation-financial-statement-concept.jpg";

export default function ComplianceAudit() {
    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: "'Outfit', system-ui, -apple-system, sans-serif" }}>
            <Navbar />
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');`}</style>

            {/* ── Hero Section - Left Right Format ───────────────────────────── */}
            <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-teal-50 border border-purple-200 mb-6">
                                <span className="w-2 h-2 bg-[#1ABC9C] rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-[#5D1F73]">Compliance &amp; Audit Management</span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                                Compliance &amp; Audit{" "}
                                <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                    Management
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                                Stay on top of regulations, standard procedures, and audits with
                                FusionEdge. Ensure compliance, streamline reporting, and reduce
                                operational risks across your facilities.
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
                                src={complianceImage}
                                alt="Compliance Audit"
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
                            <span className="text-[#5D1F73]">Compliance &amp; Audits?</span>
                        </h2>
                        <p className="text-lg text-[#6B7280] leading-relaxed">
                            In facility operations, compliance is crucial. FusionEdge helps
                            the company comply with all relevant rules, regulations, standard
                            procedures, and legal requirements. Experience hassle-free asset
                            audits through constant sanity checks and seamlessly view asset
                            records anytime.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Eye,
                                title: "Real-Time Visibility",
                                description:
                                    "Provides real-time visibility into the historical record of asset maintenance across all locations.",
                            },
                            {
                                icon: Zap,
                                title: "Automated Scheduling",
                                description:
                                    "Preventive maintenance and management scheduling — fully automated so nothing slips through.",
                            },
                            {
                                icon: Shield,
                                title: "Audit-Ready Records",
                                description:
                                    "Share generated reports seamlessly with auditors and maintain compliance documentation at all times.",
                            },
                            {
                                icon: Bell,
                                title: "Instant Notifications",
                                description:
                                    "Get notified instantly when any issue arises, so your team can respond before problems escalate.",
                            },
                            {
                                icon: BarChart3,
                                title: "KPI &amp; SLA Tracking",
                                description:
                                    "Get real-time information on services meeting compliance and performance metrics.",
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

            {/* ── Image Section - Adhere to Compliance ────────────────────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                                Adhere to Compliance,{" "}
                                <span className="text-[#5D1F73]">Enjoy Hassle-free Audits</span>
                            </h2>
                            <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                                In facility operations, compliance is crucial. FusionEdge helps
                                the company comply with all relevant rules, regulations, standard
                                procedures, and legal requirements. Experience hassle-free asset
                                audits through constant sanity checks and seamlessly view asset
                                records anytime.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Constant compliance sanity checks",
                                    "Seamless audit report generation",
                                    "Historical asset records on demand",
                                    "All regulatory requirements covered",
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
                                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=500&q=80&fit=crop"
                                alt="Compliance audit documents and checklist"
                                width={700}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Key Compliance Features - Mini Cards (modules layout) ────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            Key{" "}
                            <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                Compliance Features
                            </span>
                        </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: FaRegFileAlt,
                                title: "Automated",
                                description: "Preventive maintenance and management scheduling",
                            },
                            {
                                icon: FaUsers,
                                title: "Notified",
                                description: "Instantly, when any issue arises",
                            },
                            {
                                icon: FaShieldAlt,
                                title: "Visibility",
                                description: "Into the historical record of asset maintenance",
                            },
                            {
                                icon: FaCheckCircle,
                                title: "Share",
                                description: "Generated reports seamlessly with auditors",
                            },
                        ].map((module, index) => (
                            <div
                                key={index}
                                className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-[#1ABC9C] cursor-pointer text-center"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5D1F73]/5 to-[#1ABC9C]/5 rounded-bl-full" />
                                <div className="relative">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                                        <module.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                                        {module.title}
                                    </h3>
                                    <p className="text-[#6B7280] leading-relaxed">
                                        {module.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Image Section - Safety Standards (flipped) ──────────────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <Image
                                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&h=500&q=80&fit=crop"
                                alt="Safety standards and preventive maintenance"
                                width={700}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                                Optimize your Safety Standards{" "}
                                <span className="text-[#5D1F73]">and SOP</span>
                            </h2>
                            <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                                By staying at the peak of preventive maintenance, you will gain
                                insights into all the assets that were meticulously last
                                inspected and serviced, and which ones are yet to be covered.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Full inspection history per asset",
                                    "Service status tracking in real time",
                                    "Preventive maintenance scheduling",
                                    "SOP compliance monitoring",
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

            {/* ── Case Study / Stats ──────────────────────────────────────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            [Company Name] aced{" "}
                            <span className="text-[#5D1F73]">the ISO audit</span>
                        </h2>
                        <p className="text-lg text-[#6B7280] leading-relaxed">
                            Recently, [Company Name] sailed through an ISO audit by providing
                            all the relevant information and documents the auditor needed. The
                            company shared all the historical records of actions and safety
                            policies, enabling the audit process to run fast.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {[
                            { value: "30%", label: "Reduction in maintenance time" },
                            { value: "100%", label: "Timely achievement of tasks" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-[#1ABC9C] hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <h3
                                    className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent"
                                >
                                    {stat.value}
                                </h3>
                                <p className="text-[#6B7280]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Features at a Glance ────────────────────────────────────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            Explore our{" "}
                            <span className="text-[#5D1F73]">Blogs</span>
                        </h2>
                        <p className="text-lg text-[#6B7280] leading-relaxed">
                            Take a glance at our insightful and informative articles and ideas
                            on the topics you are interested in.
                        </p>
                    </div>
                    {/* Placeholder blog cards in features-at-a-glance style */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "How to prepare your facility for a hassle-free ISO audit",
                            "Preventive maintenance and SOP compliance best practices",
                            "Why automated compliance tracking reduces operational risk",
                            "KPI & SLA compliance: what every facility manager should know",
                            "Enterprise-grade security in modern CAFM platforms",
                            "From reactive to proactive: transforming your audit strategy",
                        ].map((title, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-6 bg-gradient-to-br from-purple-50/50 to-teal-50/50 rounded-xl border border-purple-200 hover:border-[#1ABC9C] transition-all duration-300 hover:shadow-lg cursor-pointer"
                            >
                                <div className="flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
                                </div>
                                <p className="text-[#374151]">{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Enterprise-Grade Security - Business Impact Banner ──────────── */}
            <section className="relative py-12 md:py-16 bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Stay on Top of Compliance with Enterprise-Grade Security
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            {
                                icon: FaUsers,
                                title: "Inherent management",
                                description:
                                    "Users with authorisation can access sensitive data, and automatic tracking of their actions is conducted.",
                            },
                            {
                                icon: FaShieldAlt,
                                title: "Secured infrastructure",
                                description:
                                    "With the protection given to the system, data is never hacked or lost. Even if one server malfunctions, another automatically takes charge.",
                            },
                            {
                                icon: FaRegFileAlt,
                                title: "Instructing & testing",
                                description:
                                    "Staff are rigorously trained through security drills, and the system is routinely tested for vulnerabilities.",
                            },
                            {
                                icon: FaChartLine,
                                title: "KPI & SLA compliance tracking",
                                description:
                                    "Get the real-time information on services meeting compliance and performance metrics, ensuring timely delivery.",
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