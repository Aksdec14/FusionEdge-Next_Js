"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Sparkles,
    ChevronRight,
    Scan,
    FileCheck,
    Truck
} from "lucide-react";

// Import your images
import img1 from "../assets/Images/FusionEdge_logo.png";
import img2 from "../assets/Images/FusionEdge_logo.png";
import img3 from "../assets/Images/FusionEdge_logo.png";

interface TabItem {
    id: number;
    heading: string;
    desc: string[];
    img: any;
    icon: React.ElementType;
    gradient: string;
}

const tabs: TabItem[] = [
    {
        id: 1,
        heading: "Leverage Tracking Technologies",
        desc: [
            "Seamlessly integrate technologies like Barcode, RFID, GPS, RTLS, BLE, and IoT to automate asset inventory & tracking with AssetCues.",
            "Manual errors will be a thing of the past as you gain unparalleled accuracy in asset tracking and management.",
            "Ensure all teams use and update the same asset information through tag scans ensuring better collaboration and decision-making.",
        ],
        img: img1,
        icon: Scan,
        gradient: "from-purple-500 to-teal-400",
    },
    {
        id: 2,
        heading: "Ensure Accurate Asset Records",
        desc: [
            "Track and update asset movements, assignments, and custodianship in real-time ensuring asset register reflects accuracy.",
            "Maintain complete and accurate asset records that are always ready for audit and decision-making.",
            "Ensure your asset register is updated with real-time recording of asset life cycle transactions.",
        ],
        img: img2,
        icon: FileCheck,
        gradient: "from-teal-500 to-purple-400",
    },
    {
        id: 3,
        heading: "Control Offsite/Mobile Assets Better",
        desc: [
            "Efficiently communicate with vendors and job-workers for management of off-site assets under their control.",
            "Ensure better control over mobile assets across locations, including those with employees, vendors, and customers.",
            "Create workflows for management of high-risk mobile and offsite assets.",
        ],
        img: img3,
        icon: Truck,
        gradient: "from-purple-600 to-teal-500",
    },
];

const Timeline: React.FC = () => {
    const [index, setIndex] = useState<number>(0);
    const [isHovering, setIsHovering] = useState<boolean>(false);

    useEffect(() => {
        if (!isHovering) {
            const interval = setInterval(() => {
                setIndex((prev) => (prev + 1) % tabs.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isHovering]);

    const CurrentIcon = tabs[index].icon;

    return (
        <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
            {/* Simplified Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#5D1F73] rounded-full opacity-5 blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1ABC9C] rounded-full opacity-5 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                {/* Section Header - Left Aligned */}
                <div className="mb-8 lg:mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-gradient-to-r from-purple-50 to-teal-50 border border-purple-200 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#1ABC9C]" />
                        <span className="text-sm font-medium text-[#5D1F73]">
                            Comprehensive Asset Management
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        End-to-End Asset Management{" "}
                        <span className="bg-[#5D1F73] bg-clip-text text-transparent">
                            Capabilities
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                        Discover how our platform helps you track, manage, and optimize your assets
                        effectively across all locations, ensuring accuracy and efficiency.
                    </p>
                </div>

                {/* Main Content Container */}
                <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200">
                    <div className="p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">

                        {/* LEFT: Tab Navigation */}
                        <div className="lg:w-[35%] w-full space-y-4">
                            <div className="space-y-3">
                                {tabs.map((tab, i) => {
                                    const TabIcon = tab.icon;
                                    const isActive = i === index;

                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setIndex(i)}
                                            onMouseEnter={() => setIsHovering(true)}
                                            onMouseLeave={() => setIsHovering(false)}
                                            className={`
                        w-full text-left p-3 rounded-lg transition-all duration-300
                        border-2 relative
                        ${isActive
                                                    ? 'bg-[#5D1F73] border-transparent shadow-lg'
                                                    : 'bg-white border-gray-200 hover:border-[#5D1F73]'
                                                }
                      `}
                                        >
                                            <div className="flex items-start gap-2.5">
                                                <div className={`
                          p-2 rounded-lg transition-all duration-300
                          ${isActive
                                                        ? 'bg-white/20'
                                                        : 'bg-gradient-to-br from-purple-50 to-teal-50'
                                                    }
                        `}>
                                                    <TabIcon
                                                        className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#5D1F73]'}`}
                                                    />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className={`
                            font-semibold text-xs sm:text-sm mb-0.5
                            ${isActive ? 'text-white' : 'text-gray-900'}
                          `}>
                                                        {tab.heading}
                                                    </h3>
                                                    <p className={`
                            text-[11px] line-clamp-2
                            ${isActive ? 'text-white/90' : 'text-gray-600'}
                          `}>
                                                        {tab.desc[0]}
                                                    </p>
                                                </div>

                                                <ChevronRight
                                                    className={`
                            w-4 h-4 transition-all flex-shrink-0
                            ${isActive ? 'text-white' : 'text-gray-400'}
                          `}
                                                />
                                            </div>

                                            {/* Simple progress bar */}
                                            {isActive && !isHovering && (
                                                <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full overflow-hidden rounded-b-xl">
                                                    <div
                                                        className="h-full bg-white/50 animate-progress"
                                                    />
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 
                text-white font-semibold rounded-lg text-xs sm:text-sm
                bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] 
                hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
                            >
                                Explore More
                                <Sparkles className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                        {/* RIGHT: Content Display */}
                        <div className="lg:w-[65%] w-full">
                            <div className="relative w-full bg-gradient-to-br from-gray-50 to-white 
              rounded-2xl shadow-lg border border-gray-200 overflow-hidden min-h-[400px]">

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={tabs[index].id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="p-4 sm:p-6 lg:p-8 h-full flex flex-col"
                                    >
                                        {/* Icon Badge */}
                                        <div className="mb-4">
                                            <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${tabs[index].gradient} shadow-lg`}>
                                                <CurrentIcon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>

                                        {/* Image */}
                                        <div className="relative mb-4 rounded-xl overflow-hidden h-48 sm:h-56">
                                            <Image
                                                src={tabs[index].img}
                                                alt={tabs[index].heading}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                                className="object-contain"
                                                priority={index === 0}
                                                quality={75}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-xl sm:text-2xl font-bold text-[#5D1F73] mb-4 leading-tight">
                                                {tabs[index].heading}
                                            </h3>

                                            <ul className="space-y-3">
                                                {tabs[index].desc.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2.5">
                                                        <div className="flex-shrink-0 mt-1.5">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C]" />
                                                        </div>
                                                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                                            {item}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tab number indicator */}
                                        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${tabs[index].gradient} 
                      flex items-center justify-center shadow-lg`}>
                                                <span className="text-white font-bold text-base">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Dots Navigation */}
                            <div className="flex gap-2 mt-4 justify-center">
                                {tabs.map((tab, i) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setIndex(i)}
                                        aria-label={`Go to slide ${i + 1}`}
                                        className="relative"
                                    >
                                        <div className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${i === index
                                                ? 'bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] scale-125'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                            }
                    `} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                    @keyframes progress {
                        from { width: 0%; }
                        to { width: 100%; }
                    }
                    .animate-progress {
                        animation: progress 5s linear forwards;
                    }
                `}
            </style>
        </section>
    );
};

export default Timeline;