import React from 'react';
import Image from 'next/image';
import {
    Calendar,
    Bell,
    FileText,
    TrendingDown,
    DollarSign,
    CheckCircle2,
    Clock,
    AlertTriangle,
    Wrench,
    BarChart3,
    Shield,
    ArrowRight,
    Zap,
    Users,
    Building2,
    Factory,
    Hospital,
    ShoppingCart,
    Settings
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function PreventiveMaintenancePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Hero Section - Left Right Format */}
            <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24 mt-15">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-teal-50 border border-purple-200 mb-6">
                                <span className="w-2 h-2 bg-[#1ABC9C] rounded-full animate-pulse"></span>
                                <span className="text-sm font-medium text-[#5D1F73]">Preventive Maintenance</span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                                <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                    Reduce Downtime.
                                </span>
                                <br />
                                Extend Asset Life.
                                <br />
                                Stay Ahead of Failures.
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                                FusionEdge Preventive Maintenance is assisting companies in transitioning from reactive firefighting to more proactive control. With automated maintenance schedules, alerts, and service histories, we guarantee that any asset is serviced at the correct time.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center">
                                    Request a Demo
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
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&q=80&fit=crop"
                                alt="Maintenance technician performing preventive maintenance"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Preventive Maintenance Matters */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            Why Preventive Maintenance{' '}
                            <span className="text-[#5D1F73]">Matters</span>
                        </h2>
                        <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                            Unplanned equipment failures lead to serious operational challenges. FusionEdge replaces manual monitoring and missed schedules with an organized, data-oriented PM system designed to keep operations running perfectly.
                        </p>
                    </div>

                    {/* Problems Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: TrendingDown,
                                title: 'Costly Downtime',
                                description: 'Production stops and revenue loss'
                            },
                            {
                                icon: AlertTriangle,
                                title: 'Safety & Compliance Risks',
                                description: 'Regulatory violations and hazards'
                            },
                            {
                                icon: Clock,
                                title: 'Shortened Asset Lifespan',
                                description: 'Premature equipment failure'
                            },
                            {
                                icon: DollarSign,
                                title: 'Emergency Repair Expenses',
                                description: 'Higher costs for urgent fixes'
                            }
                        ].map((problem, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-[#1ABC9C] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <problem.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                                    {problem.title}
                                </h3>
                                <p className="text-sm text-[#6B7280]">
                                    {problem.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What FusionEdge Delivers */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            What FusionEdge{' '}
                            <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                Preventive Maintenance
                            </span>
                            {' '}Delivers
                        </h2>
                    </div>

                    {/* Features with Images */}
                    <div className="space-y-20">
                        {/* Feature 1 - Automated Scheduling */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-4">
                                    <Calendar className="w-4 h-4 text-[#5D1F73]" />
                                    <span className="text-sm font-medium text-[#5D1F73]">Automated Scheduling</span>
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
                                    Automated Maintenance Scheduling
                                </h3>
                                <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                                    Create maintenance plans based on time intervals, usage, or asset criticality. No manual reminders. No missed servicing.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Time intervals (daily, weekly, monthly, annually)',
                                        'Usage or runtime tracking',
                                        'Asset criticality prioritization',
                                        'Automatic task generation'
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
                                    src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=700&h=500&q=80&fit=crop"
                                    alt="Maintenance scheduling calendar"
                                    width={700}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Feature 2 - Smart Alerts */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&h=500&q=80&fit=crop"
                                    alt="Mobile notifications and alerts"
                                    width={700}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 mb-4">
                                    <Bell className="w-4 h-4 text-[#1ABC9C]" />
                                    <span className="text-sm font-medium text-[#1ABC9C]">Smart Notifications</span>
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
                                    Smart Alerts & Notifications
                                </h3>
                                <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                                    Stay informed before issues arise. Maintenance teams always know what needs attention — and when.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Upcoming maintenance alerts',
                                        'Overdue task notifications',
                                        'Escalation triggers for critical assets',
                                        'Real-time status updates'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                                            <span className="text-[#374151]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Feature 3 - Service History */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-4">
                                    <FileText className="w-4 h-4 text-[#5D1F73]" />
                                    <span className="text-sm font-medium text-[#5D1F73]">Complete Records</span>
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
                                    Complete Service & Maintenance History
                                </h3>
                                <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                                    Maintain a centralized log of all maintenance activities. Every asset has a traceable, audit-ready maintenance record.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Past maintenance activities',
                                        'Parts replaced and costs',
                                        'Vendor or technician details',
                                        'Downtime incidents logged'
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
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=500&q=80&fit=crop"
                                    alt="Maintenance records and documentation"
                                    width={700}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features at a Glance */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            Key Features at a{' '}
                            <span className="text-[#5D1F73]">Glance</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Preventive maintenance calendars',
                            'Asset-level maintenance rules',
                            'Automated task creation',
                            'Maintenance status tracking',
                            'Downtime logging',
                            'Historical service reports',
                            'Compliance-ready documentation'
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-6 bg-gradient-to-br from-purple-50/50 to-teal-50/50 rounded-xl border border-purple-200 hover:border-[#1ABC9C] transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
                                </div>
                                <p className="text-[#374151] font-medium">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who It's Built For */}
            <section className="py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                            Who It's{' '}
                            <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                Built For
                            </span>
                        </h2>
                        <p className="text-lg text-[#6B7280]">
                            FusionEdge Preventive Maintenance is ideal for organizations of all sizes and industries
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Building2,
                                title: 'Large Enterprises',
                                description: 'Managing extensive asset inventories'
                            },
                            {
                                icon: Factory,
                                title: 'Manufacturing & Industrial',
                                description: 'Production facilities and equipment'
                            },
                            {
                                icon: Building2,
                                title: 'Corporate Offices',
                                description: 'Campus and facility management'
                            },
                            {
                                icon: Hospital,
                                title: 'Healthcare Facilities',
                                description: 'Hospitals and medical equipment'
                            },
                            {
                                icon: ShoppingCart,
                                title: 'Retail & Warehouses',
                                description: 'Distribution and storage facilities'
                            },
                            {
                                icon: Settings,
                                title: 'Infrastructure Teams',
                                description: 'Facility and asset management'
                            }
                        ].map((industry, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-[#1ABC9C] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <industry.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                                    {industry.title}
                                </h3>
                                <p className="text-[#6B7280]">
                                    {industry.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Impact Table */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Business Impact
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                icon: TrendingDown,
                                outcome: 'Lower Downtime',
                                value: 'Planned maintenance prevents disruptions'
                            },
                            {
                                icon: Zap,
                                outcome: 'Higher Asset Availability',
                                value: 'Assets remain operational longer'
                            },
                            {
                                icon: BarChart3,
                                outcome: 'Operational Efficiency',
                                value: 'Teams work on scheduled, not emergency tasks'
                            },
                            {
                                icon: Shield,
                                outcome: 'Compliance Readiness',
                                value: 'Maintenance records always audit-ready'
                            },
                            {
                                icon: DollarSign,
                                outcome: 'Cost Control',
                                value: 'Fewer breakdowns, reduced repair expenses'
                            }
                        ].map((impact, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3">
                                    <impact.icon className="w-5 h-5 text-[#5D1F73]" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    {impact.outcome}
                                </h3>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    {impact.value}
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
                                Stop reacting to failures.{' '}
                                <span className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] bg-clip-text text-transparent">
                                    Start preventing them.
                                </span>
                            </h2>
                            <p className="text-lg sm:text-xl text-[#6B7280] mb-8">
                                With FusionEdge Preventive Maintenance, maintenance becomes predictable, measurable, and efficient.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link href="/contact" className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                    Request a Demo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link href="/request-demo" className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 text-[#111827] rounded-xl font-semibold hover:border-[#5D1F73] hover:bg-purple-50 transition-all duration-300">
                                    Talk to an Asset Management Expert
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