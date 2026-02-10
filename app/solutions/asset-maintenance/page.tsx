import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Database,
    Activity,
    Wrench,
    Scan,
    Smartphone,
    BarChart3,
    CheckCircle2,
    TrendingUp,
    Shield,
    Zap,
    Globe,
    ArrowRight
} from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function AssetManagementPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Left Right Format */}
            <Navbar />
            <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-teal-50 border border-purple-200 mb-6">
                                <span className="w-2 h-2 bg-[#1ABC9C] rounded-full animate-pulse"></span>
                                <span className="text-sm font-medium text-[#5D1F73]">Asset Management</span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                                Every Asset Becomes a{' '}
                                <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                    Strategic Resource
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                                FusionEdge Asset Management offers organisations visibility and control over all physical and digital assets — from acquisition to decommissioning.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center">
                                    Book a Demo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link href="/request-demo" className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 text-[#111827] rounded-xl font-semibold hover:border-[#5D1F73] hover:bg-purple-50 transition-all duration-300 justify-center">
                                    Talk to an Expert
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <Image
                                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Modern data center with server racks"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why FusionEdge Section */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            Why FusionEdge for{' '}
                            <span className="text-[#5D1F73]">Asset Management?</span>
                        </h2>
                        <p className="text-lg text-[#6B7280] leading-relaxed">
                            In today's fast-paced operations, manual tracking and siloed spreadsheets lead to lost assets, unplanned failures, compliance risk, and ballooning costs. FusionEdge replaces fragmented processes with a unified, cloud-powered platform that:
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Eye,
                                title: 'Real-Time Visibility',
                                description: 'Provides real-time visibility and status across all asset types and locations'
                            },
                            {
                                icon: Zap,
                                title: 'Proactive Maintenance',
                                description: 'Enables proactive and predictive maintenance to reduce downtime'
                            },
                            {
                                icon: Shield,
                                title: 'Audit-Ready Records',
                                description: 'Maintains audit-ready records for compliance and governance'
                            },
                            {
                                icon: BarChart3,
                                title: 'Powerful Analytics',
                                description: 'Delivers powerful analytics to optimize utilization and costs'
                            },
                            {
                                icon: Globe,
                                title: 'Enterprise Scale',
                                description: 'Scales with your business — from single facilities to global portfolios'
                            }
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
                                <p className="text-[#6B7280]">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Section - Smart Tracking */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                                Smart Tracking &{' '}
                                <span className="text-[#5D1F73]">Real-Time Monitoring</span>
                            </h2>
                            <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                                Track every asset with precision using QR codes, barcodes, RFID, and IoT sensors. Get instant updates on location, status, and utilization across your entire organization.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Barcode & QR Code Scanning',
                                    'RFID Tag Integration',
                                    'GPS Location Tracking',
                                    'IoT Sensor Connectivity'
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
                                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Worker scanning QR code for asset tracking"
                                width={700}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            Modules that form the{' '}
                            <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                heart of the System
                            </span>
                        </h2>
                    </div>

                    {/* Modules Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Database,
                                title: 'Central Asset Register',
                                description: 'A one source of truth — no more multiple spreadsheets and fragmented records.'
                            },
                            {
                                icon: Activity,
                                title: 'Lifecycle & Activity Logs',
                                description: 'No matter a change, location, interaction or status update across an asset\'s lifecycle must be tracked.'
                            },
                            {
                                icon: Wrench,
                                title: 'Maintenance & Predictive Management',
                                description: 'Plan your maintenance, get alerts, and react to failures before they happen.'
                            },
                            {
                                icon: Scan,
                                title: 'Smart Tracking & Tagging',
                                description: 'Use the Barcode, QR, RFID, IoT or GPS methods that suits your environment and asset types.'
                            },
                            {
                                icon: Smartphone,
                                title: 'Mobile & Cloud Access',
                                description: 'Update, scan and assets manage from anywhere - out in the field, on site or remotely.'
                            },
                            {
                                icon: BarChart3,
                                title: 'Analytics, Utilization & Insights',
                                description: 'Get unified dashboards and reports to ease decision making and ROI optimization.'
                            }
                        ].map((module, index) => (
                            <div
                                key={index}
                                className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-[#1ABC9C]"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5D1F73]/5 to-[#1ABC9C]/5 rounded-bl-full"></div>

                                <div className="relative">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
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

            {/* Image Section - Analytics Dashboard */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <Image
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&q=80&fit=crop"
                                alt="Analytics dashboard showing asset performance metrics"
                                width={700}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                                Powerful Analytics &{' '}
                                <span className="text-[#5D1F73]">Insights</span>
                            </h2>
                            <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                                Transform raw data into actionable insights. Monitor asset performance, track costs, predict maintenance needs, and optimize utilization with our comprehensive analytics suite.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Real-time Performance Dashboards',
                                    'Predictive Maintenance Alerts',
                                    'Cost Tracking & ROI Analysis',
                                    'Customizable Reports'
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

            {/* Features Section */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            Features at a{' '}
                            <span className="text-[#5D1F73]">Glance</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Single Asset Record: Single system for all IT assets and ALL other equipment.',
                            'Asset Location & Status In Real-Time: Understand location and usage of your assets.',
                            'Adjustable Tracking Option: Select tracking based on asset type.',
                            'Full Audit Traces: Assets history to aid in compliance and traceability.',
                            'Maintenance & Lifecycle Management: From preventative maintenance to disposal monitoring.',
                            'Reporting & Analytics: Rich analytics on usage, costs and history of downtimes.'
                        ].map((feature, index) => (
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

            {/* Mobile Access Section */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                                Manage Assets{' '}
                                <span className="text-[#5D1F73]">Anywhere, Anytime</span>
                            </h2>
                            <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                                Access your entire asset inventory from any device. Update records, scan items, and monitor performance whether you're in the office, warehouse, or on the go.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Mobile App for iOS & Android',
                                    'Offline Mode Capability',
                                    'Cloud Sync in Real-Time',
                                    'Multi-Device Support'
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
                                src="https://images.unsplash.com/photo-1599413720280-1beeb76ff93a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Mobile device showing asset management application"
                                width={700}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Impact Section - Compact */}
            <section className="relative py-12 md:py-16 bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Business Impact You Can Measure
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                icon: TrendingUp,
                                title: 'Cost Savings',
                                description: 'Automated tracking eliminates manual errors and asset losses.'
                            },
                            {
                                icon: Shield,
                                title: 'Audit Readiness',
                                description: 'Full lifecycle logs keep you compliance-ready at all times.'
                            },
                            {
                                icon: Zap,
                                title: 'Reduced Downtime',
                                description: 'Predictive alerts extend asset life and productivity.'
                            },
                            {
                                icon: BarChart3,
                                title: 'ROI Optimization',
                                description: 'Data-driven insights optimize utilization and reduce costs.'
                            },
                            {
                                icon: Globe,
                                title: 'Scalable Solution',
                                description: 'Grows seamlessly from single sites to enterprise-wide.'
                            }
                        ].map((impact, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <impact.icon className="w-5 h-5 text-[#5D1F73]" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    {impact.title}
                                </h3>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    {impact.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="relative overflow-hidden bg-white rounded-2xl p-12 lg:p-16 border-2 border-gray-200 shadow-xl">
                        <div className="relative text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                                Get Started With{' '}
                                <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                    FusionEdge
                                </span>
                            </h2>
                            <p className="text-lg sm:text-xl text-[#6B7280] mb-8">
                                Transform how your organisation manages assets — simplify processes, enforce compliance, and drive measurable operational value.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link href="/contact" className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                    Book a Demo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link href="/request-demo" className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 text-[#111827] rounded-xl font-semibold hover:border-[#5D1F73] hover:bg-purple-50 transition-all duration-300">
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

// Eye Icon Component
function Eye({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
        </svg>
    );
}