"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Wrench, ShieldCheck, Boxes, Users, FileBarChart, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import Image from "next/image";


const Construction = () => {
    const features = [
        {
            icon: <ShieldCheck className="text-[#1ABC9C]" size={28} />,
            title: "Preventive Maintenance",
            description: "Unplanned downtime has always been a bottleneck for seamless operations. The platform is adept at scheduling and managing preventive maintenance and employs information to track asset performance efficiently."
        },
        {
            icon: <Boxes className="text-[#1ABC9C]" size={28} />,
            title: "Enterprise-grade Asset Management",
            description: "Tracks every asset and part instantly to have visibility of their whereabouts. Even if they are dispersed across state lines, the smart platform ensures transparency into the equipment maintenance needs."
        },
        {
            icon: <Wrench className="text-[#1ABC9C]" size={28} />,
            title: "Automated Maintenance Processes",
            description: "FusionEdge automates maintenance workflows, minimizes manual interventions, and empowers teams with smart scheduling and reporting to achieve optimal efficiency."
        }
    ];

    const benefits = [
        "Discover and create any asset in a flash",
        "Safe and fully compliant construction job sites",
        "Mitigate downtime with hassle-free construction projects",
        "Real-time equipment tracking across locations"
    ];

    const stats = [
        { value: "50%", label: "Reduced Downtime" },
        { value: "35%", label: "Cost Savings" },
        { value: "99%", label: "Asset Visibility" },
        { value: "24/7", label: "Support Available" }
    ];

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-teal-50">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-[#5D1F73]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#1ABC9C]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 shadow-lg">
                                <span className="w-2 h-2 bg-[#1ABC9C] rounded-full animate-pulse"></span>
                                <span className="text-sm font-medium text-gray-700">Construction Solutions</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Safety Starts With{" "}
                                <span className="text-[#5D1F73]">FusionEdge</span>
                            </h1>

                            <h2 className="text-xl sm:text-2xl font-semibold text-[#1ABC9C]">
                                Experience Trouble-free Delivery of Construction Projects
                            </h2>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                FusionEdge's construction equipment software is a supercharged asset management system and flexible CMMS that is well-equipped to proactively and astutely tackle maintenance-related issues while aligning your hefty equipment teams.
                            </p>

                            {/* Benefits List */}
                            <div className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3 group">
                                        <CheckCircle className="w-6 h-6 text-[#1ABC9C] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                        <p className="text-gray-700">{benefit}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link
                                    href="/request-demo"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                                >
                                    Request Demo
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 text-[#5D1F73] font-semibold rounded-xl border-2 border-[#5D1F73] hover:bg-purple-50 transition-all duration-300"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <img
                                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                                    alt="Construction Management"
                                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                {/* Floating Stats Card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                                    <div className="grid grid-cols-2 gap-4">
                                        {stats.slice(0, 2).map((stat, index) => (
                                            <div key={index} className="text-center">
                                                <div className="text-2xl font-bold text-[#5D1F73]">{stat.value}</div>
                                                <div className="text-xs text-gray-600">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#1ABC9C]/20 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#5D1F73]/20 rounded-full blur-2xl animate-pulse"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative inline-block">
                                    <div className="text-4xl sm:text-5xl font-bold text-[#5D1F73] group-hover:scale-110 transition-transform">
                                        {stat.value}
                                    </div>
                                    <TrendingUp className="absolute -top-2 -right-6 w-5 h-5 text-[#1ABC9C] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="text-gray-600 mt-2 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-b from-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Maintenance Management:{" "}
                            <span className="text-[#5D1F73]">FusionEdge has your back</span>
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Now, the traditional manual, administrative work has vanished — all thanks to FusionEdge. This powerful platform takes all the work off your shoulders, allowing you to focus specifically on paramount maintenance tasks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                                }}
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#5D1F73] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Collaboration Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D1F73] mb-4">
                            Together, We Achieve More
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Seamless Collaboration with Vendors, Teammates, and Subcontractors
                        </p>
                    </div>

                    {/* Feature 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 bg-purple-50 rounded-full px-6 py-3">
                                <Users className="text-[#1ABC9C]" size={24} />
                                <span className="font-semibold text-[#5D1F73]">Seamless Collaboration</span>
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900">
                                Work Together, Anywhere
                            </h3>

                            <p className="text-gray-700 leading-relaxed">
                                The centralized platform invites third parties in your ecosystem to participate in completing work orders, fulfilling purchase orders, managing the lifecycle of construction equipment, accomplishing preventive maintenance tasks, and receiving automated real-time notifications for considerable events.
                            </p>

                            <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-2xl p-6 border-l-4 border-[#1ABC9C]">
                                <p className="text-gray-700 leading-relaxed">
                                    The tasks are allocated to the people mentioned in the comments section of miscellaneous records. A work request portal is established for staff to submit requests using a link or QR code.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-4">
                                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700">Work Orders</span>
                                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700">Purchase Orders</span>
                                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700">Real-time Notifications</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                                    alt="Collaboration"
                                    className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1ABC9C]/20 rounded-full blur-2xl"></div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                        <div className="relative order-2 lg:order-1">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                                    alt="Reports"
                                    className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#5D1F73]/20 rounded-full blur-2xl"></div>
                        </div>

                        <div className="space-y-6 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-3 bg-purple-50 rounded-full px-6 py-3">
                                <FileBarChart className="text-[#1ABC9C]" size={24} />
                                <span className="font-semibold text-[#5D1F73]">Smart Reporting</span>
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900">
                                Tailored Reports, Empowered Business
                            </h3>

                            <p className="text-gray-700 leading-relaxed">
                                From manual drudgery to automated insights — empower your stakeholders with customized, automated reporting to focus on Key Performance Indicators (KPI), enabling data-driven and real-time decision-making.
                            </p>

                            <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-2xl p-6 border-l-4 border-[#5D1F73]">
                                <p className="text-gray-700 leading-relaxed">
                                    FusionEdge generates customizable insights through automated reports on historical work orders, warranty information, the entire lifecycle history of assets and spare parts inventory, and maintenance expenses.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                                    <div className="text-2xl font-bold text-[#5D1F73] mb-1">Real-time</div>
                                    <div className="text-sm text-gray-600">Data Insights</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                                    <div className="text-2xl font-bold text-[#1ABC9C] mb-1">Custom</div>
                                    <div className="text-sm text-gray-600">KPI Tracking</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 bg-purple-50 rounded-full px-6 py-3">
                                <Wrench className="text-[#1ABC9C]" size={24} />
                                <span className="font-semibold text-[#5D1F73]">Streamlined Maintenance</span>
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900">
                                Fix it, Forget it, Enjoy it
                            </h3>

                            <p className="text-gray-700 leading-relaxed">
                                Experience the smooth sailing of maintenance with FusionEdge's construction equipment management software. It provides intuitive maintenance control over equipment and its parts across varied geographic regions and warehouses.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-md border border-gray-100">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Multi-Facility Support</h4>
                                        <p className="text-sm text-gray-600">Manage equipment across multiple locations seamlessly</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-md border border-gray-100">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1ABC9C] to-[#5D1F73] flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">End-to-End Workflow</h4>
                                        <p className="text-sm text-gray-600">Complete workflow management in a single platform</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                                    alt="Maintenance Management"
                                    className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#1ABC9C]/20 rounded-full blur-2xl"></div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C]"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        We're all ears for your ideas and experience
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Let's take a glimpse at how FusionEdge is reshaping the future of construction companies and contractors with optimum maintenance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center px-8 py-4 text-[#5D1F73] font-semibold rounded-xl bg-white hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            Start Your Journey
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/request-demo"
                            className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                        >
                            Book a Demo
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 pt-8 border-t border-white/20">
                        <p className="text-white/80 text-sm mb-6">Trusted by leading construction companies</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                            <div className="text-white font-semibold">COMPANY 1</div>
                            <div className="text-white font-semibold">COMPANY 2</div>
                            <div className="text-white font-semibold">COMPANY 3</div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Outfit', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>

            <Footer />
        </>
    );
};

export default Construction;