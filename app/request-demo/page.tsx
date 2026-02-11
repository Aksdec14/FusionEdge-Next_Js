"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    jobTitle: string;
    industry: string;
    employeeCount: string;
    queryType: string;
    message: string;
}

const RequestDemo = () => {
    const [result, setResult] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<number>(1);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Scheduling your demo...");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "5366c4c9-3f9a-4b3e-8653-efc0476aaf97");
        formData.append("subject", "New Demo Request - FusionEdge");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Demo Requested Successfully! Our team will contact you within 24 hours to schedule your personalized demo.");
                event.currentTarget.reset();
                setCurrentStep(1);

                // Clear success message after 7 seconds
                setTimeout(() => {
                    setResult("");
                }, 7000);
            } else {
                setResult("Oops! Something went wrong. Please try again or contact us directly.");
            }
        } catch (error) {
            setResult("Error submitting request. Please try again later or reach out via email.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = () => {
        if (currentStep < 2) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-teal-50">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-[#5D1F73]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#1ABC9C]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 shadow-lg mb-6">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-sm font-medium text-gray-700">Book Your Free Demo Today</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            See FusionEdge in <span className="text-[#5D1F73]">Action</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Experience how FusionEdge transforms facility management. Get a personalized demo tailored to your industry and requirements.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">30-Minute Demo</h3>
                            <p className="text-gray-600 text-sm">Quick and comprehensive walkthrough of all features</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tailored to You</h3>
                            <p className="text-gray-600 text-sm">Customized demo based on your industry needs</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                            <p className="text-gray-600 text-sm">Live Q&A with our product specialists</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

                        {/* Progress Bar */}
                        <div className="bg-gradient-to-r from-purple-50 to-teal-50 p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${currentStep >= 1 ? 'bg-[#5D1F73] text-white' : 'bg-gray-200 text-gray-500'
                                        }`}>
                                        {currentStep > 1 ? '✓' : '1'}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Personal Info</p>
                                        <p className="text-xs text-gray-500">Your contact details</p>
                                    </div>
                                </div>

                                <div className="hidden sm:block flex-1 h-1 bg-gray-200 mx-4 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] transition-all duration-500"
                                        style={{ width: currentStep >= 2 ? '100%' : '0%' }}
                                    ></div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${currentStep >= 2 ? 'bg-[#5D1F73] text-white' : 'bg-gray-200 text-gray-500'
                                        }`}>
                                        2
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Company Info</p>
                                        <p className="text-xs text-gray-500">About your business</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={onSubmit} className="p-8 lg:p-10">

                            {/* Step 1: Personal Information */}
                            {currentStep === 1 && (
                                <div className="space-y-6 animate-fadeIn">
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                            Let's Get Started
                                        </h2>
                                        <p className="text-gray-600">Tell us a bit about yourself</p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {/* First Name */}
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                placeholder="John"
                                                className="w-full h-12 px-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        {/* Last Name */}
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                placeholder="Doe"
                                                className="w-full h-12 px-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent transition-all duration-200"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Business Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="john@company.com"
                                            className="w-full h-12 px-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent transition-all duration-200"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            placeholder="+91 9876543210"
                                            className="w-full h-12 px-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent transition-all duration-200"
                                        />
                                    </div>

                                    <div className="flex justify-end pt-4">
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="px-8 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                                        >
                                            Next Step
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Company Information */}
                            {currentStep === 2 && (
                                <div className="space-y-6 animate-fadeIn">
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                            About Your Organization
                                        </h2>
                                        <p className="text-gray-600">Help us personalize your demo experience</p>
                                    </div>

                                    {/* Company Name */}
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                            Company Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            required
                                            placeholder="Your Company Ltd."
                                            className="w-full h-12 px-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent transition-all duration-200"
                                        />
                                    </div>

                                    {/* Job Title */}
                                    <div>
                                        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                                            Job Title <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="jobTitle"
                                            name="jobTitle"
                                            required
                                            placeholder="e.g., Facility Manager, Operations Director"
                                            className="w-full h-12 px-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent transition-all duration-200"
                                        />
                                    </div>

                                    {/* Industry */}
                                    <div>
                                        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                                            Industry <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="industry"
                                                name="industry"
                                                required
                                                className="w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select your industry</option>
                                                <option value="Construction">Construction</option>
                                                <option value="Manufacturing">Manufacturing</option>
                                                <option value="Food & Beverages">Food & Beverages</option>
                                                <option value="Hospitality">Hospitality</option>
                                                <option value="Healthcare">Healthcare</option>
                                                <option value="Education">Education</option>
                                                <option value="Real Estate">Real Estate</option>
                                                <option value="Retail">Retail</option>
                                                <option value="Technology">Technology</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Employee Count */}
                                    <div>
                                        <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-2">
                                            Company Size <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="employeeCount"
                                                name="employeeCount"
                                                required
                                                className="w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select company size</option>
                                                <option value="1-50">1-50 employees</option>
                                                <option value="51-200">51-200 employees</option>
                                                <option value="201-500">201-500 employees</option>
                                                <option value="501-1000">501-1000 employees</option>
                                                <option value="1000+">1000+ employees</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Query Type Dropdown */}
                                    <div>
                                        <label htmlFor="queryType" className="block text-sm font-medium text-gray-700 mb-2">
                                            What are you interested in? <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="queryType"
                                                name="queryType"
                                                required
                                                className="w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select your interest</option>
                                                <option value="Request a Demo">Request a Demo</option>
                                                <option value="Need Brochure">Need Brochure</option>
                                                <option value="Collaboration Queries">Collaboration Queries</option>
                                                <option value="Event Queries">Event Queries</option>
                                                <option value="Media Queries">Media Queries</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Details */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Additional Details
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            placeholder="Tell us about your facility management challenges or specific features you'd like to see (optional)..."
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent resize-none transition-all duration-200"
                                        ></textarea>
                                    </div>

                                    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="px-8 py-3 text-gray-700 font-semibold rounded-xl border-2 border-gray-300 hover:border-[#5D1F73] hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                            Previous
                                        </button>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`px-8 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] transition-all duration-300 ${isSubmitting
                                                ? 'opacity-70 cursor-not-allowed'
                                                : 'hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105'
                                                }`}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Scheduling Demo...
                                                </span>
                                            ) : (
                                                <span className="flex items-center justify-center gap-2">
                                                    Request Demo
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </span>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Result Message */}
                            {result && (
                                <div className={`mt-6 p-4 rounded-xl text-center font-medium animate-fadeIn ${result.includes('Successfully')
                                    ? 'bg-green-50 text-green-700 border border-green-200'
                                    : result.includes('Error') || result.includes('Oops')
                                        ? 'bg-red-50 text-red-700 border border-red-200'
                                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                                    }`}>
                                    {result}
                                </div>
                            )}

                        </form>
                    </div>

                </div>
            </section>

            {/* What to Expect Section */}
            <section className="py-16 bg-gradient-to-br from-purple-50 to-teal-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            What to Expect from Your Demo
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our product specialists will guide you through a personalized walkthrough
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">1</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Platform Overview</h3>
                            <p className="text-sm text-gray-600">Comprehensive tour of FusionEdge's core features and capabilities</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">2</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Industry Solutions</h3>
                            <p className="text-sm text-gray-600">Tailored features specific to your industry requirements</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">3</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Live Q&A</h3>
                            <p className="text-sm text-gray-600">Ask questions and get expert answers in real-time</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">4</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Next Steps</h3>
                            <p className="text-sm text-gray-600">Discuss implementation, pricing, and customization options</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">

                        <details className="group bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-gray-900">
                                How long does the demo take?
                                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-gray-600">
                                Our standard demo takes approximately 30 minutes, but we can adjust based on your needs and questions.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-gray-900">
                                Is the demo really free?
                                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-gray-600">
                                Yes! Our demo is completely free with no obligations. We want you to see if FusionEdge is the right fit for your organization.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-gray-900">
                                Can I request a demo for my specific industry?
                                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-gray-600">
                                Absolutely! We tailor each demo to your industry and specific use cases to show you the most relevant features.
                            </p>
                        </details>

                        <details className="group bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-gray-900">
                                What happens after the demo?
                                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-gray-600">
                                After the demo, we'll provide you with resources and documentation. If you're interested, we can discuss pricing, implementation, and next steps at your pace.
                            </p>
                        </details>

                    </div>
                </div>
            </section>

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Outfit', sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
        </>
    );
};

export default RequestDemo;