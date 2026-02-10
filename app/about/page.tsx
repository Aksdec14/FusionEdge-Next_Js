"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import {
    CalendarCheck,
    UserCheck,
    PackageSearch,
    Wrench,
    Boxes,
    CheckCircle,
    ShieldCheck,
    BarChart3,
} from "lucide-react";

const About = () => {
    const tabs = [
        {
            title: 'Our Mission',
            content:
                'To simplify facility and workplace operations through connected systems, intelligent automation, and real-time visibility.'
        },
        {
            title: 'Our Vision',
            content:
                'To empower organisations to scale efficiently, operate sustainably, and remain future-ready in a rapidly evolving digital world.'
        },
        {
            title: 'Our Story',
            content:
                'Write story of how and why fusionedge came into pictures'
        },
    ];

    const [activeTab, setActiveTab] = useState<number>(0);
    const [activeCard, setActiveCard] = useState<number>(0);


    const beliefs = [
        {
            id: 1,
            icon: CalendarCheck,
            title: "Attendance",
            description:
                "Track employee attendance with real-time dashboards, flexible time tracking, and automated reporting across multiple sites for accurate workforce management.",
        },
        {
            id: 2,
            icon: UserCheck,
            title: "Visitor Management",
            description:
                "Streamline visitor check-ins with digital registration, badge printing, host notifications, and comprehensive visitor logs for enhanced security and compliance.",
        },
        {
            id: 3,
            icon: PackageSearch,
            title: "Asset Tracking",
            description:
                "Monitor and manage your assets with real-time location tracking, maintenance schedules, lifecycle management, and detailed asset history across all facilities.",
        },
        {
            id: 4,
            icon: Wrench,
            title: "Maintenance",
            description:
                "Optimize facility maintenance with preventive scheduling, work order management, vendor coordination, and automated alerts to reduce downtime and costs.",
        },
        {
            id: 5,
            icon: Boxes,
            title: "Inventory",
            description:
                "Maintain optimal stock levels with automated inventory tracking, low-stock alerts, purchase order management, and usage analytics across multiple locations.",
        },
        {
            id: 6,
            icon: CheckCircle,
            title: "Approvals",
            description:
                "Streamline decision-making with configurable approval workflows, multi-level authorization, digital signatures, and complete audit trails for all requests.",
        },
        {
            id: 7,
            icon: ShieldCheck,
            title: "Compliance",
            description:
                "Ensure regulatory adherence with automated compliance tracking, documentation management, audit-ready reports, and real-time alerts for critical requirements.",
        },
        {
            id: 8,
            icon: BarChart3,
            title: "Analytics",
            description:
                "Make data-driven decisions with powerful dashboards, custom reports, predictive insights, and real-time metrics that optimize operational performance.",
        },
    ];

    const efficiencyCards = [
        {
            title: 'Smart Monitoring',
            description: 'Track and optimize every asset in real-time.',
            img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
        },
        {
            title: 'Automation at Scale',
            description: 'Reduce manual workload and boost efficiency.',
            img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
        },
        {
            title: 'Data-Driven Insights',
            description: 'Make informed decisions backed by analytics.',
            img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
        },
    ];

    // Auto-rotate cards
    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % efficiencyCards.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [efficiencyCards.length]);

    return (
        <div className="bg-white text-gray-900 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-[#5D1F73]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#1ABC9C]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <div className="space-y-6 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-teal-50 border border-purple-200">
                                <div className="w-2 h-2 rounded-full bg-[#1ABC9C] animate-pulse"></div>
                                <span className="text-sm font-medium text-[#5D1F73]">About Us</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                About
                                <span className="block mt-2 text-[#5D1F73]">FusionEdge</span>
                            </h1>

                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                FusionEdge is a modern facility management and workplace operations platform designed for organisations managing complex, multi-site environments.
                            </p>

                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                As businesses grow, operational challenges multiply - disconnected tools, manual tracking, delayed approvals, and limited visibility across locations. FusionEdge addresses this by bringing people, processes, assets, and data together on one integrated platform.
                            </p>

                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                By replacing spreadsheets and fragmented systems with real-time visibility and automation, FusionEdge helps organisations operate efficiently, make data-driven decisions, and scale without operational chaos.
                            </p>

                            <div className="pt-4">
                                <p className="text-lg sm:text-xl font-bold text-[#5D1F73] mb-6">
                                    Want to see how FusionEdge can simplify and strengthen your operations?
                                </p>

                                <Link
                                    href="/contact"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C]"></div>
                                    <div className="absolute inset-0 bg-[#5D1F73] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative flex items-center gap-2">
                                        Get to Know Us More
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Right - Image */}
                        <div className="relative order-1 lg:order-2">
                            <div className="relative group">
                                <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#5D1F73]/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                                <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-[#1ABC9C]/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>

                                <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-2xl">
                                    <img
                                        src="/image.png"
                                        alt="FusionEdge Platform"
                                        className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We've Built Section */}
            <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            What We've Built
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl">
                            FusionEdge is a next-generation integrated facility management (IFM) and workplace operations solution built to serve as a single source of truth across your organisation.
                            <br /><br />
                            Our platform connects critical functions including <strong className="text-[#5D1F73]">Attendance</strong>, <strong className="text-[#5D1F73]">Visitor management</strong>, <strong className="text-[#5D1F73]">Asset tracking</strong>, <strong className="text-[#5D1F73]">Maintenance</strong>, <strong className="text-[#5D1F73]">Inventory</strong>, <strong className="text-[#5D1F73]">Approvals</strong>, <strong className="text-[#5D1F73]">Compliance</strong> and <strong className="text-[#5D1F73]">Analytics</strong> - enabling seamless coordination across teams and sites.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${activeTab === index
                                    ? 'bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#5D1F73] hover:bg-purple-50'
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                            {tabs[activeTab].content}
                        </p>
                    </div>

                    {/* Quote */}
                    <div className="mt-12 text-center">
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5D1F73] leading-tight max-w-4xl mx-auto">
                            As businesses grow, problems don't get smaller - systems need to get smarter.
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Efficiency Section */}
            <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Text */}
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D1F73] leading-tight">
                                With Great Products, Comes Great Efficiency
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Our Asset Management system empowers organizations to streamline operations, improve visibility, and achieve maximum efficiency across all managed assets.
                            </p>

                            {/* Card Indicators */}
                            <div className="flex gap-3 pt-4">
                                {efficiencyCards.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveCard(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${activeCard === index ? 'w-12 bg-[#5D1F73]' : 'w-2 bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right - Cards */}
                        <div className="relative h-[400px] sm:h-[450px]">
                            {efficiencyCards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-500 ${activeCard === index
                                        ? 'opacity-100 translate-x-0 z-10'
                                        : index > activeCard
                                            ? 'opacity-0 translate-x-full'
                                            : 'opacity-0 -translate-x-full'
                                        }`}
                                >
                                    <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                            <h3 className="text-2xl sm:text-3xl font-bold mb-3">{card.title}</h3>
                                            <p className="text-base sm:text-lg">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Building Solutions Section */}
            <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#5D1F73]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#1ABC9C]/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D1F73] mb-4">
                            Building Solutions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {beliefs.map((belief, index) => (
                            <div
                                key={belief.id}
                                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Number Badge */}
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <belief.icon className="w-6 h-6" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-bold text-[#5D1F73] mb-3 group-hover:text-[#1ABC9C] transition-colors duration-300">
                                    {belief.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {belief.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#5D1F73]/5 to-[#1ABC9C]/5">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-gray-200">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left - Text */}
                            <div className="space-y-6">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D1F73] leading-tight">
                                    The Team which makes it possible
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                    At FusionEdge, leadership is driven by a strong blend of technical mastery, operational excellence, and real-world enterprise experience. The team brings together seasoned professionals who have built, scaled, and optimized complex technology solutions across industries. With deep expertise in cloud platforms, digital transformation, data intelligence, and enterprise operations, they focus on turning vision into execution. What truly sets FusionEdge apart is its collaborative mindset—combining strategic thinking with hands-on problem-solving to deliver reliable, scalable, and future-ready solutions for clients worldwide.
                                </p>
                            </div>

                            {/* Right - CEO Card */}
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-6 group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                        <img
                                            src="/rana_sir.png"
                                            alt="CEO"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                    Rana Rajvinder Singh
                                </h4>
                                <p className="text-lg sm:text-xl text-[#5D1F73] font-semibold">
                                    CEO & Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C]"></div>
                        <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 text-center">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Join Us
                            </h3>
                            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                                We're building solutions that solve real-world operational problems — and we're always looking for people who want to make an impact.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#5D1F73] text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                Explore Careers
                                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>

            <Footer />
        </div>
    );
};

export default About;