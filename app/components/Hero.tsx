"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from './Navbar';
import OperationsSection from './OperationsSection';
import Timeline from './Timeline'
import Integrations from "./Integrations";
import HeroSectionBanner from "./HeroSectionBanner";
import ContactForm from "./ContactForm";
import Footer from './Footer'
import Link from 'next/link';

export default function AssetManagementHero() {
    const overlayTexts: string[] = [
        "Monitor and optimize every asset in real time to make smarter business decisions effortlessly.",
        "Simplify compliance, reporting, and performance tracking across all your enterprise assets.",
        "Unlock insights from your asset data and drive growth with confidence and clarity.",
        "Experience seamless asset management with a secure, intuitive cloud platform.",
        "Transform how your organization tracks, manages, and grows its valuable resources."
    ];

    const [textIndex, setTextIndex] = useState<number>(0);
    const [displayedText, setDisplayedText] = useState<string>("");
    const [typing, setTyping] = useState<boolean>(true);
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let typeTimeout: NodeJS.Timeout;

        if (typing) {
            typeTimeout = setTimeout(() => {
                setDisplayedText(
                    overlayTexts[textIndex].slice(0, displayedText.length + 1)
                );
                if (displayedText.length + 1 === overlayTexts[textIndex].length) {
                    setTyping(false);
                }
            }, 100);
        } else {
            typeTimeout = setTimeout(() => {
                setTyping(true);
                setDisplayedText("");
                setTextIndex((prev) => (prev + 1) % overlayTexts.length);
            }, 2000);
        }

        return () => clearTimeout(typeTimeout);
    }, [displayedText, typing, overlayTexts, textIndex]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div>
            <Navbar />

            <div className="w-full bg-white overflow-hidden relative">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-[#5D1F73]/10 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1ABC9C]/10 rounded-full blur-3xl animate-pulse-slower"></div>
                    <div
                        className="absolute w-64 h-64 bg-[#5D1F73]/5 rounded-full blur-2xl transition-all duration-300 ease-out"
                        style={{
                            left: `${mousePosition.x}%`,
                            top: `${mousePosition.y}%`,
                            transform: 'translate(-50%, -50%)'
                        }}
                    ></div>
                </div>

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                ></div>

                <section ref={heroRef} className="relative pb-16 sm:pb-20 md:pb-24 pt-24 sm:pt-28 md:pt-32 lg:pt-32 min-h-screen flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
                        <div className="flex flex-wrap items-center gap-8 sm:gap-10 md:gap-12 lg:gap-0">
                            {/* Left Section */}
                            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-7 md:space-y-8 animate-fade-in-up">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-50 to-teal-50 border border-purple-200 backdrop-blur-sm animate-fade-in">
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#1ABC9C] animate-pulse"></div>
                                    <span className="text-xs sm:text-sm font-medium text-[#5D1F73] tracking-wide">Next-Gen Platform</span>
                                </div>

                                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-gray-900 tracking-tight">
                                        Enterprise-Grade
                                        <span className="block mt-1 sm:mt-2 text-[#5D1F73]">
                                            Facility Management
                                        </span>
                                    </h1>

                                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed font-light">
                                        Take charge of <span className="font-semibold text-[#1ABC9C]">Assets</span>, <span className="font-semibold text-[#5D1F73]">Maintenance</span>, and{" "}
                                        <span className="font-semibold text-[#5D1F73]">Work Orders</span> with our intelligent software built for modern enterprises. Ensure safety, compliance, and efficiency—at scale.
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-2 sm:pt-4">
                                    <div className="space-y-1">
                                        <div className="text-2xl sm:text-3xl font-bold text-gray-900">99.9%</div>
                                        <div className="text-xs sm:text-sm text-gray-600 font-medium">Uptime SLA</div>
                                    </div>
                                    <div className="w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                                    <div className="space-y-1">
                                        <div className="text-2xl sm:text-3xl font-bold text-gray-900">50K+</div>
                                        <div className="text-xs sm:text-sm text-gray-600 font-medium">Assets Managed</div>
                                    </div>
                                    <div className="w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                                    <div className="space-y-1">
                                        <div className="text-2xl sm:text-3xl font-bold text-gray-900">24/7</div>
                                        <div className="text-xs sm:text-sm text-gray-600 font-medium">Support</div>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                                    <Link
                                        href="/request-demo"
                                        className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C]"></div>
                                        <div className="absolute inset-0 bg-[#5D1F73] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <span className="relative flex items-center gap-2">
                                            Request Demo
                                            <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </Link>

                                    <Link
                                        href="/about"
                                        className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-900 border-2 border-gray-300 rounded-xl hover:border-[#5D1F73] hover:bg-purple-50 transition-all duration-300 backdrop-blur-sm"
                                    >
                                        <span className="flex items-center gap-2">
                                            Learn More
                                            <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>

                                {/* Trust indicators */}
                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 sm:pt-6 text-xs sm:text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>SOC 2 Certified</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>GDPR Compliant</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-16 animate-fade-in-up-delay mt-8 lg:mt-0">
                                <div className="relative group">
                                    {/* Decorative elements - hidden on very small screens */}
                                    <div className="hidden sm:block absolute -top-4 -left-4 w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 bg-[#5D1F73]/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                                    <div className="hidden sm:block absolute -bottom-4 -right-4 w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 bg-[#1ABC9C]/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>

                                    {/* Image container with modern frame */}
                                    <div className="relative z-10">
                                        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-white to-gray-50 p-1.5 sm:p-2">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#5D1F73]/5 via-transparent to-[#1ABC9C]/5"></div>

                                            <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
                                                <img
                                                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.0&q=80&auto=format&fit=crop&w=1200"
                                                    alt="Asset Management Dashboard"
                                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                />

                                                {/* Overlay gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                                {/* Typing text overlay */}
                                                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8">
                                                    <div className="bg-white/90 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-gray-200 shadow-lg">
                                                        <p className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                                                            {displayedText}
                                                            <span className="animate-blink text-[#1ABC9C]">|</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating feature cards - hidden on mobile, visible on tablet+ */}
                                        <div className="hidden md:block absolute -left-4 lg:-left-6 top-1/4 z-20 animate-float">
                                            <div className="bg-white backdrop-blur-lg rounded-lg p-3 lg:p-4 border border-gray-200 shadow-xl">
                                                <div className="flex items-center gap-2 lg:gap-3">
                                                    <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-lg bg-gradient-to-br from-[#1ABC9C] to-teal-600 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-900 font-semibold text-xs lg:text-sm">98% Efficiency</p>
                                                        <p className="text-gray-600 text-[10px] lg:text-xs">Asset Tracking</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hidden md:block absolute -right-4 lg:-right-6 bottom-1/3 z-20 animate-float-delay">
                                            <div className="bg-white backdrop-blur-lg rounded-lg p-3 lg:p-4 border border-gray-200 shadow-xl">
                                                <div className="flex items-center gap-2 lg:gap-3">
                                                    <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-lg bg-[#5D1F73] flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-900 font-semibold text-xs lg:text-sm">Real-time</p>
                                                        <p className="text-gray-600 text-[10px] lg:text-xs">Monitoring</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll indicator - hidden on mobile */}
                    <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                        <div className="flex flex-col items-center gap-2 text-gray-500">
                            <span className="text-xs font-medium tracking-wider uppercase">Scroll to explore</span>
                            <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&display=swap');
                
                * {
                    font-family: 'Outfit', sans-serif;
                }

                @keyframes blink {
                    50% { opacity: 0; }
                }
                
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.05); }
                }
                
                @keyframes pulse-slower {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(1.08); }
                }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes float-delay {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes bounce-slow {
                    0%, 100% { transform: translateX(-50%) translateY(0); }
                    50% { transform: translateX(-50%) translateY(-10px); }
                }
                
                .animate-blink {
                    animation: blink 1s step-start infinite;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 6s ease-in-out infinite;
                }
                
                .animate-pulse-slower {
                    animation: pulse-slower 8s ease-in-out infinite;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                
                .animate-fade-in-up-delay {
                    animation: fade-in-up 0.8s ease-out 0.2s forwards;
                    opacity: 0;
                }
                
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 8s ease infinite;
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-float-delay {
                    animation: float-delay 5s ease-in-out infinite 1s;
                }
                
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
            `}</style>

            <OperationsSection />
            <Timeline />
            <Integrations />
            <HeroSectionBanner />
            <ContactForm />
            <Footer />
        </div>
    );
}