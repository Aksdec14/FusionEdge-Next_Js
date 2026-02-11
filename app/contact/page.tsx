"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface FormData {
    name: string;
    email: string;
    phone: string;
    contactMethod: string;
    queryType: string;
    message: string;
}

const Contact = () => {
    const [result, setResult] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "5366c4c9-3f9a-4b3e-8653-efc0476aaf97");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully! We'll get back to you soon.");
                event.currentTarget.reset();

                // Clear success message after 5 seconds
                setTimeout(() => {
                    setResult("");
                }, 5000);
            } else {
                setResult("Oops! Something went wrong. Please try again.");
            }
        } catch (error) {
            setResult("Error submitting form. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Get in <span className="text-[#5D1F73]">Touch</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Have questions about FusionEdge? We're here to help. Reach out to our team and let's transform your facility management together.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* Left Side - Contact Information */}
                        <div className="space-y-6">

                            {/* Image Card */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <img
                                    src="https://images.unsplash.com/photo-1740560051533-3acef26ace95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Contact Us"
                                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent"></div>
                                <div className="absolute top-8 left-8">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                        Let's Talk
                                    </h2>
                                    <p className="text-white/90 text-lg">We're just a message away</p>
                                </div>
                            </div>

                            {/* Contact Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">

                                {/* Phone Card */}
                                <a
                                    href="tel:919015122212"
                                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5D1F73] to-[#1ABC9C] flex items-center justify-center flex-shrink-0">
                                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-medium text-gray-500 mb-1">Call Us</h3>
                                            <p className="text-lg font-semibold text-gray-900 group-hover:text-[#5D1F73] transition-colors">
                                                +91-9015122212
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">Mon-Fri 9AM - 6PM IST</p>
                                        </div>
                                    </div>
                                </a>

                                {/* Email Card */}
                                <a
                                    href="mailto:info@fusionedge.com"
                                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1ABC9C] to-[#5D1F73] flex items-center justify-center flex-shrink-0">
                                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-medium text-gray-500 mb-1">Email Us</h3>
                                            <p className="text-lg font-semibold text-gray-900 group-hover:text-[#5D1F73] transition-colors break-all">
                                                info@fusionedge.com
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">We reply within 24 hours</p>
                                        </div>
                                    </div>
                                </a>

                            </div>

                            {/* Location Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1ABC9C] to-[#5D1F73] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium text-gray-500 mb-1">Visit Us</h3>
                                        <p className="text-lg font-semibold text-gray-900">
                                            Noida, Uttar Pradesh
                                        </p>
                                        <p className="text-sm text-gray-600 mt-1">India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] rounded-2xl p-6 text-white">
                                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100">

                            <div className="mb-8">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                                    Send Us a <span className="text-[#5D1F73]">Message</span>
                                </h2>
                                <p className="text-gray-600">
                                    Fill out the form below and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            <form onSubmit={onSubmit} className="space-y-6">

                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent transition-all duration-200"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent transition-all duration-200"
                                    />
                                </div>

                                {/* Phone Input */}
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

                                {/* Contact Method Radio */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Preferred Contact Method <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex flex-wrap gap-4">
                                        <label className="flex items-center cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="contactMethod"
                                                value="Email"
                                                required
                                                className="hidden peer"
                                            />
                                            <span className="w-5 h-5 border-2 border-gray-300 rounded-full mr-3 peer-checked:border-[#5D1F73] peer-checked:bg-[#5D1F73] flex items-center justify-center transition-all duration-200">
                                                <span className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100"></span>
                                            </span>
                                            <span className="text-gray-700 group-hover:text-[#5D1F73] transition-colors">Email</span>
                                        </label>

                                        <label className="flex items-center cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="contactMethod"
                                                value="Phone"
                                                required
                                                className="hidden peer"
                                            />
                                            <span className="w-5 h-5 border-2 border-gray-300 rounded-full mr-3 peer-checked:border-[#5D1F73] peer-checked:bg-[#5D1F73] flex items-center justify-center transition-all duration-200">
                                                <span className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100"></span>
                                            </span>
                                            <span className="text-gray-700 group-hover:text-[#5D1F73] transition-colors">Phone</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Query Type Dropdown */}
                                <div>
                                    <label htmlFor="queryType" className="block text-sm font-medium text-gray-700 mb-2">
                                        How can we help you? <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="queryType"
                                            name="queryType"
                                            required
                                            className="w-full h-12 px-4 pr-10 rounded-xl border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Select your query type</option>
                                            <option value="Request a Demo">Request a Demo</option>
                                            <option value="Need Brochure">Need Brochure</option>
                                            <option value="Collaboration Queries">Collaboration Queries</option>
                                            <option value="Event Queries">Event Queries</option>
                                            <option value="Media Queries">Media Queries</option>
                                        </select>
                                        {/* Custom Dropdown Arrow */}
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Details Textarea */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Additional Details
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Tell us more about your requirements (optional)..."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D1F73] focus:border-transparent resize-none transition-all duration-200"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] transition-all duration-300 ${isSubmitting
                                        ? 'opacity-70 cursor-not-allowed'
                                        : 'hover:shadow-lg hover:shadow-purple-500/50 hover:scale-[1.02]'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            Send Message
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    )}
                                </button>

                                {/* Result Message */}
                                {result && (
                                    <div className={`p-4 rounded-xl text-center font-medium ${result.includes('Successfully')
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
                </div>
            </section>

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>

            <Footer />
        </>
    );
};

export default Contact;