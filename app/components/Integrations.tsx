"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    ArrowRight,
    Grid3x3,
    Box,
    Layers,
    Zap
} from "lucide-react";

interface IntegrationItem {
    name: string;
    logo: string;
    color?: string;
}

interface CategoryData {
    [key: string]: IntegrationItem[];
}

const Integrations: React.FC = () => {
    // Enhanced data with gradient colors for each category
    const data: CategoryData = {
        Features: [
            { name: "Work Order Management", logo: "🛠️", color: "from-purple-500 to-purple-600" },
            { name: "Asset Management", logo: "📦", color: "from-teal-500 to-teal-600" },
            { name: "Parts & Inventory", logo: "📦", color: "from-purple-600 to-teal-500" },
            { name: "Preventive Maintenance", logo: "🧰", color: "from-teal-600 to-purple-500" },
            { name: "Safety & Compliance", logo: "🛡️", color: "from-purple-500 to-teal-500" },
            { name: "Integrations", logo: "☁️", color: "from-teal-500 to-purple-600" },
            { name: "Analytics & Reporting", logo: "📊", color: "from-purple-600 to-teal-600" },
        ],
        Solutions: [
            { name: "Maintenance", logo: "⚙️", color: "from-purple-500 to-purple-600" },
            { name: "Operations", logo: "🛠️", color: "from-teal-500 to-teal-600" },
            { name: "Reliability", logo: "📈", color: "from-purple-600 to-teal-500" },
        ],
        Industries: [
            { name: "Manufacturing & Plants", logo: "🏭", color: "from-purple-500 to-teal-500" },
            { name: "Facility Management", logo: "🏢", color: "from-teal-500 to-purple-500" },
            { name: "Energy & Utilities", logo: "⚡", color: "from-purple-600 to-teal-600" },
            { name: "Food & Beverage Manufacturing", logo: "🍔", color: "from-teal-600 to-purple-600" },
            { name: "Healthcare", logo: "🏥", color: "from-purple-500 to-teal-500" },
            { name: "Fleet Management", logo: "🚛", color: "from-teal-500 to-purple-500" },
            { name: "Property Management", logo: "🏠", color: "from-purple-600 to-teal-600" },
            { name: "Farming & Agriculture", logo: "🌾", color: "from-teal-600 to-purple-600" },
            { name: "Schools & Higher Education", logo: "🎓", color: "from-purple-500 to-teal-500" },
            { name: "Government & Public Works", logo: "🏛️", color: "from-teal-500 to-purple-500" },
            { name: "Churches & Non-Profits", logo: "⛪", color: "from-purple-600 to-teal-600" },
            { name: "Restaurants", logo: "🍽️", color: "from-teal-600 to-purple-600" },
            { name: "Gym & Fitness", logo: "💪", color: "from-purple-500 to-teal-500" },
            { name: "Hospitality", logo: "🏨", color: "from-teal-500 to-purple-500" },
        ],
        Products: [
            { name: "CMMS Software", logo: "💻", color: "from-purple-500 to-teal-500" },
            { name: "Enterprise Asset Management", logo: "🏢", color: "from-teal-500 to-purple-500" },
            { name: "EMS", logo: "⚙️", color: "from-purple-600 to-teal-600" },
        ],
        Integrations: [
            { name: "Salesforce", logo: "☁️", color: "from-purple-500 to-teal-500" },
            { name: "ServiceNow", logo: "🔧", color: "from-teal-500 to-purple-500" },
            { name: "Microsoft 365", logo: "💼", color: "from-purple-600 to-teal-600" },
            { name: "Slack", logo: "💬", color: "from-teal-600 to-purple-600" },
            { name: "Jira", logo: "🎯", color: "from-purple-500 to-teal-500" },
            { name: "AWS", logo: "☁️", color: "from-teal-500 to-purple-500" },
            { name: "Azure", logo: "🌩️", color: "from-purple-600 to-teal-600" },
            { name: "Google Cloud", logo: "🌥️", color: "from-teal-600 to-purple-600" },
            { name: "Okta", logo: "🔐", color: "from-purple-500 to-teal-500" },
            { name: "Tableau", logo: "📊", color: "from-teal-500 to-purple-500" },
            { name: "SAP", logo: "💾", color: "from-purple-600 to-teal-600" },
            { name: "Oracle", logo: "🏛️", color: "from-teal-600 to-purple-600" },
            { name: "Zoom", logo: "📹", color: "from-purple-500 to-teal-500" },
            { name: "DocuSign", logo: "📝", color: "from-teal-500 to-purple-500" },
            { name: "Stripe", logo: "💳", color: "from-purple-600 to-teal-600" },
            { name: "HubSpot", logo: "🎪", color: "from-teal-600 to-purple-600" },
        ],
    };

    const categoryIcons: { [key: string]: React.ElementType } = {
        Features: Zap,
        Solutions: Grid3x3,
        Industries: Box,
        Products: Layers,
        Integrations: Sparkles,
    };

    const categories = Object.keys(data);
    const [selectedCategory, setSelectedCategory] = useState<string>("Features");

    return (
        <section id="integrations" className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#5D1F73] rounded-full opacity-5 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1ABC9C] rounded-full opacity-5 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300 rounded-full opacity-5 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                {/* Header Section */}
                <div className="mb-8 lg:mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-gradient-to-r from-purple-50 to-teal-50 border border-purple-200 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#1ABC9C]" />
                        <span className="text-sm font-medium text-[#5D1F73]">
                            Complete Ecosystem
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Explore Our{" "}
                        <span className="bg-[#5D1F73] bg-clip-text text-transparent">
                            Ecosystem
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                        Discover all features, solutions, industries, products, and integrations in one place.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-3 mb-8 lg:mb-10">
                    {categories.map((category) => {
                        const Icon = categoryIcons[category];
                        const isActive = selectedCategory === category;

                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`
                  group relative px-5 py-2.5 rounded-xl font-medium text-sm
                  transition-all duration-300 overflow-hidden
                  ${isActive
                                        ? "bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white shadow-lg"
                                        : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#5D1F73]"
                                    }
                `}
                            >
                                {/* Hover effect for inactive tabs */}
                                {!isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                )}

                                <span className="relative flex items-center gap-2">
                                    {Icon && <Icon className="w-4 h-4" />}
                                    {category}
                                </span>

                                {/* Active indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/50"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Count Badge */}
                <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm">
                        <Grid3x3 className="w-4 h-4 text-[#5D1F73]" />
                        <span className="text-sm font-medium text-gray-700">
                            {data[selectedCategory].length} {selectedCategory.toLowerCase()}
                        </span>
                    </div>
                </div>

                {/* Grid Display - Animated */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                    >
                        {data[selectedCategory].map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.03, duration: 0.3 }}
                                className="group relative bg-white rounded-xl p-5 
                  hover:shadow-xl transition-all duration-300 cursor-pointer
                  border-2 border-gray-100 hover:border-transparent overflow-hidden"
                            >
                                {/* Gradient border effect on hover */}
                                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 
                  bg-gradient-to-br ${item.color || 'from-purple-500 to-teal-500'} 
                  transition-opacity duration-300 rounded-xl
                `} style={{ padding: '2px' }}>
                                    <div className="w-full h-full bg-white rounded-xl" />
                                </div>

                                {/* Subtle gradient background on hover */}
                                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-10 
                  bg-gradient-to-br ${item.color || 'from-purple-500 to-teal-500'} 
                  transition-opacity duration-300
                `} />

                                {/* Content */}
                                <div className="relative text-center">
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {item.logo}
                                    </div>
                                    <div className="text-sm font-medium text-gray-900 group-hover:text-[#5D1F73] transition-colors">
                                        {item.name}
                                    </div>

                                    {/* Arrow indicator on hover */}
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                    opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <ArrowRight className="w-4 h-4 text-[#1ABC9C]" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 text-center"
                >
                    <p className="text-gray-600 mb-4">
                        Don't see what you're looking for?
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 
            bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] 
            text-white font-semibold rounded-xl text-sm
            hover:shadow-lg transition-all duration-300 group">
                        Contact Us
                        <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Integrations;