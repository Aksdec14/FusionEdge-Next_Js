"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    CheckCircle2,
    TrendingUp,
    Shield,
    Zap,
    ArrowRight,
    Clock,
    ClipboardList,
    Users,
    FileText,
    SlidersHorizontal,
    AlertTriangle,
    BarChart3,
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
const workOrderImage = "https://images.unsplash.com/photo-1529661197280-63dc545366c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// ── Data ────────────────────────────────────────────────────────────────────
const workOrderSections = [
    {
        title: "Increase uptime",
        text: "Foster a preventive maintenance strategy by taking proactive and swift actions in case of emergencies, thereby achieving significant cost savings.",
        icon: <FaClock className="text-[#5D1F73] text-4xl" />,
    },
    {
        title: "Enhance performance",
        text: "The collaborative software helps achieve the work order targets within the timeframe, thus increasing productivity.",
        icon: <FaCheckCircle className="text-[#5D1F73] text-4xl" />,
    },
    {
        title: "Track work order",
        text: "Gain comprehensive visibility of all the past work orders. Track full compliance and audits, and staff-level task completion.",
        icon: <FaUsers className="text-[#5D1F73] text-4xl" />,
    },
    {
        title: "Create Work Orders",
        text: "To create a new work order, use the dashboard, an asset's record, or a vendor's profile, and add details and photos directly from your mobile. You can also use FusionEdge's default work order templates that align with your company's SOP.",
        icon: <FaRegFileAlt className="text-[#5D1F73] text-4xl" />,
    },
    {
        title: "Assign and Follow-Up",
        text: "The system checks for any open work orders and immediately assigns tasks to the right staff, also aligning them with the related machines or parts. Automated reminders ensure no task gets delayed.",
        icon: <FaCheckCircle className="text-[#5D1F73] text-4xl" />,
    },
    {
        title: "Search, Filter, and Prioritize",
        text: "Rank and prioritize work orders based on urgency, team, location, and asset. Drag and drop in the calendar view to change deadlines and reassign tasks efficiently.",
        icon: <FaChartLine className="text-[#5D1F73] text-4xl" />,
    },
    {
        title: "Avoid Downtime",
        text: "Regular inspection and servicing prevent sudden breakdowns, reducing high repair expenses. Automated preventive tasks track and provide insights into malfunctioning equipment.",
        icon: <FaShieldAlt className="text-[#5D1F73] text-4xl" />,
    },
];

export default function WorkOrder() {
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
                                <span className="text-sm font-medium text-[#5D1F73]">Work Order Management</span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                                Maintenance{" "}
                                <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                    Work Order Software
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                                FusionEdge's user-friendly mobile and desktop Work Order software
                                streamlines managing maintenance requests, scheduling and
                                monitoring work orders, and assigning tasks to your team.
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
                                src={workOrderImage}
                                alt="Work Order Software"
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
                            <span className="text-[#5D1F73]">Work Orders?</span>
                        </h2>
                        <p className="text-lg text-[#6B7280] leading-relaxed">
                            Foster a preventive maintenance strategy by taking proactive and
                            swift actions in case of emergencies. The collaborative software
                            helps achieve work order targets within the timeframe, thus
                            increasing productivity and achieving significant cost savings.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Clock,
                                title: "Increase Uptime",
                                description:
                                    "Proactive and swift actions in case of emergencies achieve significant cost savings and prevent breakdowns.",
                            },
                            {
                                icon: TrendingUp,
                                title: "Enhance Performance",
                                description:
                                    "Collaborative software helps achieve work order targets within the timeframe, boosting team productivity.",
                            },
                            {
                                icon: Users,
                                title: "Track Work Orders",
                                description:
                                    "Comprehensive visibility of all past work orders with full compliance, audits, and staff-level task completion.",
                            },
                            {
                                icon: FileText,
                                title: "Create Instantly",
                                description:
                                    "Create work orders from the dashboard, asset records, or vendor profiles with photos directly from mobile.",
                            },
                            {
                                icon: Shield,
                                title: "Avoid Downtime",
                                description:
                                    "Regular inspection and servicing prevent sudden breakdowns, reducing high repair expenses.",
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

            {/* ── Image Section - Increase Uptime ─────────────────────────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                                Increase Uptime &amp;{" "}
                                <span className="text-[#5D1F73]">Enhance Performance</span>
                            </h2>
                            <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                                Foster a preventive maintenance strategy by taking proactive and
                                swift actions in case of emergencies, thereby achieving
                                significant cost savings. The collaborative software helps
                                achieve the work order targets within the timeframe, thus
                                increasing productivity.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Proactive emergency response",
                                    "Preventive maintenance strategy",
                                    "Team collaboration on tasks",
                                    "On-time work order completion",
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
                                src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Team working on maintenance tasks"
                                width={700}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Key Work Order Features - Modules Grid ──────────────────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            Key{" "}
                            <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                Work Order Features
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {workOrderSections.slice(2, 7).map((module, index) => (
                            <div
                                key={index}
                                className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-[#1ABC9C]"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5D1F73]/5 to-[#1ABC9C]/5 rounded-bl-full" />
                                <div className="relative">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#5D1F73]/5 to-[#1ABC9C]/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        {module.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                                        {module.title}
                                    </h3>
                                    <p className="text-[#6B7280] leading-relaxed">
                                        {module.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Image Section - Assign & Follow-Up (flipped) ────────────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <Image
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=500&q=80&fit=crop"
                                alt="Team assigning and following up on work orders"
                                width={700}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                                Assign, Follow-Up &amp;{" "}
                                <span className="text-[#5D1F73]">Prioritize</span>
                            </h2>
                            <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                                The system checks for any open work orders and immediately
                                assigns tasks to the right staff, also aligning them with the
                                related machines or parts. Rank and prioritize work orders based
                                on urgency, team, location, and asset.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Auto-assign tasks to the right staff",
                                    "Automated reminders for no delays",
                                    "Drag & drop calendar rescheduling",
                                    "Filter by urgency, team, or location",
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

            {/* ── Self-Service Portal - Features at a Glance ──────────────────── */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            Self-Service Portal{" "}
                            <span className="text-[#5D1F73]">to Work on Fixes</span>
                        </h2>
                        <p className="text-lg text-[#6B7280] leading-relaxed">
                            The user-friendly, self-service work order request portal allows
                            users to submit maintenance requests or any other issues from
                            anywhere, reducing the trouble of calls or emails.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                step: "Step 1",
                                title: "Your Portal, Your Preferences",
                                description:
                                    "Create the request form the way you want. Easily modify the fields so they perfectly match your team's requirements and workflows.",
                            },
                            {
                                step: "Step 2",
                                title: "Share and Care",
                                description:
                                    "Share your well-equipped portal with users so they can easily scan the QR code and start creating work requests, without downloading applications.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group relative p-8 bg-gradient-to-br from-purple-50/50 to-teal-50/50 rounded-2xl border border-purple-200 hover:border-[#1ABC9C] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#5D1F73]/5 to-[#1ABC9C]/5 rounded-bl-full" />
                                <div className="relative">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white mb-4">
                                        {item.step}
                                    </span>
                                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#6B7280] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Business Impact - Gradient Banner ───────────────────────────── */}
            <section className="relative py-12 md:py-16 bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Business Impact You Can Measure
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            {
                                icon: FaClock,
                                title: "Increased Uptime",
                                description:
                                    "Proactive maintenance prevents sudden breakdowns and reduces high repair expenses.",
                            },
                            {
                                icon: FaCheckCircle,
                                title: "On-Time Completion",
                                description:
                                    "Automated reminders and smart assignment ensure no task gets delayed.",
                            },
                            {
                                icon: FaChartLine,
                                title: "Full Visibility",
                                description:
                                    "Comprehensive tracking of all work orders, compliance, and staff-level task completion.",
                            },
                            {
                                icon: FaShieldAlt,
                                title: "Reduced Downtime",
                                description:
                                    "Regular inspection and servicing insights keep malfunctioning equipment in check.",
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