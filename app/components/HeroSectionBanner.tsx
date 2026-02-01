"use client";

import { useState, useEffect, useRef } from "react";
import { Zap } from "lucide-react";
import Image from "next/image";
import img from "../assets/Images/BannerImage.jpeg";

// ---------------------------------------------------------------------------
// useCountUp – triggers a numeric count-up animation when the element scrolls
// into view.  Returns the current count and a ref to attach to the container.
// ---------------------------------------------------------------------------
function useCountUp(
    endValue: number,
    duration: number = 2000
): [number, React.RefObject<HTMLDivElement>] {
    const [count, setCount] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null!);
    const hasAnimated = useRef<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;

                        let start = 0;
                        const increment = endValue / (duration / 16);

                        const step = () => {
                            start += increment;
                            if (start < endValue) {
                                setCount(Math.floor(start));
                                requestAnimationFrame(step);
                            } else {
                                setCount(endValue);
                            }
                        };

                        step();
                    }
                });
            },
            { threshold: 0.5 }
        );

        const node = ref.current;
        if (node) observer.observe(node);

        return () => observer.disconnect();
    }, [endValue, duration]);

    return [count, ref];
}

// ---------------------------------------------------------------------------
// HeroSectionBanner – main section component
// ---------------------------------------------------------------------------
const HeroSectionBanner = () => {
    const [count1, ref1] = useCountUp(200);
    const [count2, ref2] = useCountUp(99.9);
    const [count3, ref3] = useCountUp(5);
    const [count4, ref4] = useCountUp(24);

    return (
        <section id="integrations" className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ---------------------------------------------------------- */}
                {/* Custom Integration CTA                                      */}
                {/* ---------------------------------------------------------- */}
                <div className="relative bg-gradient-to-br from-purple-50 to-teal-50 rounded-3xl p-12 text-center shadow-xl overflow-hidden mb-20">
                    {/* Decorative Vector Background */}
                    <div className="absolute inset-0">
                        <Image
                            src={img}
                            alt="abstract vector"
                            fill
                            sizes="100vw"
                            priority={false}
                            className="w-full h-full object-cover opacity-5"
                        />
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10">
                        {/* Icon with subtle glow */}
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-20 h-20 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                                <Zap className="w-10 h-10 text-white" />
                            </div>
                        </div>

                        {/* Heading & Description */}
                        <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                            Need a Custom Integration?
                        </h3>
                        <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                            Seamlessly connect your systems with our flexible API & webhook
                            framework. Our team can help craft tailored integrations for your
                            unique business needs.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-[#5D1F73] border border-purple-200 px-8 py-3 rounded-xl font-semibold hover:bg-[#5D1F73] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
                                View API Documentation
                            </button>
                            <button className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                                Request Custom Integration
                            </button>
                        </div>
                    </div>
                </div>

                {/* ---------------------------------------------------------- */}
                {/* Stats with Count-Up                                         */}
                {/* ---------------------------------------------------------- */}
                <div className="mt-16 mb-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center" ref={ref1}>
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                            {count1}+
                        </div>
                        <div className="text-gray-600">Pre-built Integrations</div>
                    </div>

                    <div className="text-center" ref={ref2}>
                        <div className="text-3xl font-bold text-teal-600 mb-2">
                            {count2.toFixed(1)}%
                        </div>
                        <div className="text-gray-600">API Uptime</div>
                    </div>

                    <div className="text-center" ref={ref3}>
                        <div className="text-3xl font-bold text-yellow-600 mb-2">
                            &lt; {count3}min
                        </div>
                        <div className="text-gray-600">Average Setup Time</div>
                    </div>

                    <div className="text-center" ref={ref4}>
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                            {count4}/7
                        </div>
                        <div className="text-gray-600">Integration Support</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionBanner;