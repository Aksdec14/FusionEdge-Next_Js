"use client";

import React, { useState, useEffect } from "react";

const sections = [
    {
        id: 1,
        title: "Work Order Management",
        description:
            "Manage all your work orders from creation to completion. Track progress, assign tasks, and ensure timely maintenance activities.",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
        ),
        features: [
            "Create, assign, and track work orders",
            "Real-time progress monitoring",
            "Collaborative task management",
            "Reduce delays with automated alerts",
        ],
    },
    {
        id: 2,
        title: "Preventive Maintenance",
        description:
            "Automate preventive maintenance schedules to reduce downtime and improve equipment reliability.",
        img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        features: [
            "Schedule recurring maintenance tasks",
            "Extend asset lifespan",
            "Reduce unexpected failures",
            "Lower overall repair costs",
        ],
    },
    {
        id: 3,
        title: "Asset Management",
        description:
            "Track and optimize asset performance with real-time insights and lifecycle management tools.",
        img: "https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
        features: [
            "Centralized asset tracking",
            "Monitor asset lifecycle",
            "Real-time performance metrics",
            "Plan for asset replacements",
        ],
    },
    {
        id: 4,
        title: "Parts & Inventory",
        description:
            "Maintain optimal inventory levels with automated alerts, reordering capabilities, and parts tracking.",
        img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        features: [
            "Automated stock alerts",
            "Reduce stockouts & overstock",
            "Streamlined reordering process",
            "Track parts consumption",
        ],
    },
    {
        id: 5,
        title: "Analytics & Insights",
        description:
            "Get actionable insights from real-time analytics to improve operational efficiency and decision-making.",
        img: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=1674&q=80&auto=format&fit=crop",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        features: [
            "Track KPIs in real time",
            "Identify performance bottlenecks",
            "Forecast maintenance trends",
            "Data-driven decision making",
        ],
    },
];

export default function OperationsSection() {
    const [activeTab, setActiveTab] = useState<number>(1);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const handleTabChange = (id: number) => {
        if (id !== activeTab) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveTab(id);
                setIsTransitioning(false);
            }, 300);
        }
    };

    const activeSection = sections.find((s) => s.id === activeTab);

    return (
        <section className="relative bg-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#5D1F73]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#1ABC9C]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-left mb-12 md:mb-16 space-y-4 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-teal-50 border border-purple-200 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#1ABC9C] animate-pulse"></div>
                        <span className="text-sm font-medium text-[#5D1F73]">Complete Platform</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Simplify Modern
                        <span className="block mt-2 text-[#5D1F73]">Facility Operations</span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
                        A complete suite of intelligent tools designed to modernize your facility operations. From work orders to analytics, streamline processes, enhance efficiency, and gain real-time insights.
                    </p>

                    <p className="text-base sm:text-lg font-semibold text-gray-700 mt-4">
                        All in one powerful platform!
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="mb-12">
                    <div className="flex overflow-x-auto gap-3 pb-4 no-scrollbar">
                        <div className="flex gap-3 mx-auto">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => handleTabChange(section.id)}
                                    className={`group relative flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${activeTab === section.id
                                        ? "text-white shadow-lg scale-105"
                                        : "text-gray-700 bg-white border-2 border-gray-200 hover:border-[#5D1F73] hover:bg-purple-50"
                                        }`}
                                >
                                    {activeTab === section.id && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] rounded-xl"></div>
                                    )}

                                    <span className="relative z-10 flex items-center gap-3">
                                        <span className={`${activeTab === section.id ? "text-white" : "text-[#5D1F73]"}`}>
                                            {section.icon}
                                        </span>
                                        {section.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                {activeSection && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Side - Content */}
                        <div
                            className={`space-y-6 transition-all duration-500 ${isTransitioning
                                ? "opacity-0 -translate-x-10"
                                : "opacity-100 translate-x-0"
                                }`}
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] flex items-center justify-center text-white shadow-lg">
                                        {activeSection.icon}
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5D1F73]">
                                        {activeSection.title}
                                    </h3>
                                </div>

                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                    {activeSection.description}
                                </p>
                            </div>

                            {/* Feature List */}
                            <div className="space-y-3">
                                {activeSection.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-purple-50/50 to-teal-50/50 border border-purple-100 hover:border-[#1ABC9C] transition-all duration-300"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex-shrink-0 mt-0.5">
                                            <svg
                                                className="w-5 h-5 text-[#1ABC9C]"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C]"></div>
                                    <div className="absolute inset-0 bg-[#5D1F73] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative flex items-center gap-2">
                                        Learn More
                                        <svg
                                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div
                            className={`relative transition-all duration-500 ${isTransitioning
                                ? "opacity-0 translate-x-10"
                                : "opacity-100 translate-x-0"
                                }`}
                        >
                            <div className="relative group">
                                {/* Decorative background elements */}
                                <div className="absolute -top-6 -right-6 w-64 h-64 bg-[#5D1F73]/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                                <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-[#1ABC9C]/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>

                                {/* Image container with fixed dimensions */}
                                <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-2xl bg-white p-4">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#5D1F73]/5 via-transparent to-[#1ABC9C]/5"></div>
                                    <div className="relative z-10 w-full h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden rounded-xl">
                                        <img
                                            src={activeSection.img}
                                            alt={activeSection.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Floating badge */}
                                <div className="absolute -bottom-4 -right-4 z-20 bg-white rounded-xl shadow-xl p-4 border-2 border-[#1ABC9C]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] flex items-center justify-center text-white font-bold text-lg">
                                            {activeTab}
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Active Module</p>
                                            <p className="text-sm font-bold text-gray-900">{activeSection.title.split(' ')[0]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Outfit', sans-serif;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}