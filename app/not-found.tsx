'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-6">

                <div className="max-w-xl w-full text-center">

                    {/* 404 */}
                    <h1 className="text-8xl sm:text-9xl font-extrabold text-[#5D1F73] hover:scale-105 transition-transform duration-300">
                        404
                    </h1>

                    <div className="w-14 h-1 bg-[#1ABC9C] mx-auto my-6 rounded-full"></div>

                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                        Page Not Found
                    </h2>

                    <p className="mt-4 text-gray-600">
                        The page you're looking for doesn’t exist or has been moved.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                        <Link
                            href="/"
                            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#5D1F73] text-white rounded-lg font-medium transition-all duration-200 hover:bg-[#4b165d] hover:scale-105"
                        >
                            <Home className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back Home
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded-lg font-medium transition-all duration-200 hover:bg-gray-100 hover:scale-105"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Go Back
                        </button>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
