"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Blog {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
    content: string;
}

const Resources = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

    const blogs: Blog[] = [
        {
            id: 6,
            title: "Best Facility Management Software in the US: What Modern Enterprises Actually Need",
            excerpt: "Moving beyond spec sheets to discover what truly defines the best facility management software in 2026 - from predictive maintenance to employee experience.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
            slug: "best-facility-management-software-us",
            content: `
In the US, facility management has spent decades in the basement - literally and figuratively. It was the world of "fix it when it breaks" and "keep the lights on."

But today, the basement has moved to the boardroom. The best facility management software isn't just a digital toolbox; it's the heartbeat of the building and the guardian of the people inside it.

Here is what actually defines the "best" in 2026 - moving beyond the spec sheet to the soul of the operation.

### 1. It Predicts the "Ouch" Before It Happens
In the old days, we were reactive. A pipe burst; we mopped. Then we became preventative, changing filters every six months regardless of whether they were dirty.

The modern standard is predictive. The best software uses AI to act as a digital stethoscope for your building.

**The Difference:** It notices a microscopic vibration in a cooling tower or a 2% spike in energy draw. It whispers to you: "Hey, this motor is going to fail in three weeks. Fix it next Tuesday at 10 AM when the office is quiet."

**The Human Impact:** This isn't just about "uptime." It's about the technician who gets to stay at their kid's soccer game on Friday evening instead of rushing to an emergency equipment failure.

### 2. It Treats Employees Like Guests, Not Occupants
In the age of flexible work, the office is no longer a requirement; it's a destination. If the experience of being there is clunky, people simply won't come.

**The Experience:** Modern FM software has a "hospitality gene." Through a seamless mobile app, an employee can reserve a desk next to their team, nudge the temperature up a degree in their zone, and report a coffee spill in three taps.

**The Result:** When technology is intuitive, the building feels like it's looking out for you. When it's outdated, the building feels cold and indifferent.

### 3. Sustainability is an Instinct, Not a PDF
In the US, ESG (Environmental, Social, and Governance) goals are no longer "extra credit" - they are a business imperative. The best software doesn't just hand you a carbon report at the end of the year; it manages your footprint in real-time.

**The Smart Move:** The system sees that the fourth floor is only 10% occupied today. It automatically dims the lights and dials back the AC without a human ever touching a dial.

**The Business Case:** It turns "going green" from a vague corporate promise into a massive, automated savings engine.

### 4. It Finds the "One Truth" in the Data Soup
Most organizations are drowning in "software soup" - one app for security, another for cleaning, and a spreadsheet for leases. The best FM software acts as an Integrated Workplace Management System (IWMS).

**The Power:** It connects the dots. It might show you that you're paying for a lease on a wing of a building that data proves is never used.

**The Bottom Line:** This is how you make strategic real estate decisions that save millions. It moves the FM role from "head of maintenance" to "strategic business partner."

### Where FusionEdge Fits In
FusionEdge isn't just another entry in the crowded marketplace of "maintenance trackers." It was built for organizations that have outgrown the chaos of spreadsheets and "software soup" and are ready for clarity, control, and confidence.

Think of FusionEdge as the central nervous system of your building. By bringing asset management, maintenance, attendance, visitor workflows, inventory, approvals, and real-time analytics into one unified space, we allow your team to stop "firefighting" and start leading.

### Leading from the Front
The buildings we occupy are more than just steel, glass, and concrete. They are the stages where our company culture plays out, where our sustainability promises are kept, and where our biggest business expenses live.

In the US, the era of the "invisible" facility manager is over. Today's FM leaders are data-driven, employee-focused, and strategically vital. To do that job well, you need a partner that sees the big picture as clearly as you do.

The future of facility management isn't about working harder - it's about working smarter. It's about having the "Edge" to see what's coming before it happens.

👉 Book a FREE demo today and discover how FusionEdge can transform your facility management operations.
        `,
        },
        {
            id: 1,
            title: "How Smart Pantry Management Software Improves Employee Experience",
            excerpt: "Discover how smart pantry management software transforms workplace operations through real-time visibility, automation, and enhanced employee satisfaction.",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
            slug: "smart-pantry-management-software",
            content: `
In today's workplace, employee experience is shaped by more than just policies and perks. Everyday touchpoints - like how smoothly a pantry operates, play a powerful role in how employees feel at work.

When pantry operations are manual, organizations face frequent stockouts, delays, and complaints. What seems like a minor facility issue quickly impacts productivity, morale, and trust.

This is where smart pantry management software makes a real difference.

### 1. Eliminating Pantry Stockouts with Real-Time Visibility
One of the biggest frustrations for employees is finding essential pantry items unavailable during breaks.

With digital pantry management offered by FusionEdge, inventory levels are tracked in real time. Automated alerts notify facility teams before items run out, enabling timely replenishment.

**For employees, this results in:**
- Reliable availability of pantry essentials
- Stress-free breaks, even during peak hours
- A smoother and more predictable workplace experience

Reliable access to basic amenities directly improves employee satisfaction.

### 2. Faster Pantry Operations, Better Break Experiences
Manual pantry tracking often leads to long queues, delayed deliveries, and poor coordination.

Smart pantry management software provides a centralized dashboard that tracks orders, deliveries, and cancellations in real time. This helps facility teams manage demand efficiently and reduce delays.

**Employees benefit from:**
- Faster service
- Shorter waiting times
- Breaks that truly feel refreshing

A well-managed pantry supports productivity by allowing employees to recharge effectively.

### 3. Supporting Health and Well-Being Through Data
A modern pantry is also an opportunity to support healthier workplace habits.

By analyzing consumption data, pantry management software enables organizations to:
- Balance healthy options with popular snacks
- Monitor overconsumption
- Optimize product selection based on real demand

This data-driven approach enhances employee experience without restricting choice.

### 4. Transparency That Builds Trust
Lack of visibility in pantry operations often leads to confusion and dissatisfaction.

Smart pantry management ensures transparency by providing clear insights into inventory levels, orders, and usage patterns. When employees see consistent availability and fair consumption controls, trust in workplace facilities improves.

Transparency reduces complaints and strengthens overall employee confidence.

### 5. Reduced Admin Effort, Better Employee Support
Manual pantry management increases the administrative burden, leaving facility teams stuck in reactive problem-solving.

With pantry management software, repetitive tasks such as stock tracking, reporting, and alerts are automated. This allows admins to focus on improving service quality instead of firefighting issues.

The result is a more responsive and employee-focused facility management function.

### 6. Consistent Employee Experience Across Locations
For organizations with multiple offices, maintaining uniform pantry standards can be challenging.

Smart pantry management software centralizes operations across sites, ensuring:
- Consistent service levels
- Standardized pantry experiences
- Equal access to amenities for all employees

Consistency plays a crucial role in enhancing employee experience across the organization.

### Why Smart Pantry Management Matters
Employee experience is built through everyday interactions. A well-managed pantry may seem small, but its impact is significant.

By replacing manual processes with smart pantry management software, organizations create a workplace that feels organized, thoughtful, and employee-centric. The result is fewer complaints, higher satisfaction, and better operational efficiency.

FusionEdge Pantry Management Software helps organizations deliver a seamless pantry experience through real-time visibility, automation, and data-driven insights.

👉 Book a FREE demo today and see how smart pantry management can elevate your employee experience.
        `,
        },
        {
            id: 2,
            title: "What to Look for in an Attendance Management Software",
            excerpt: "A comprehensive guide on choosing the right attendance management software with real-time dashboards, flexible tracking, and multi-site visibility for modern workplaces.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
            slug: "attendance-management-software",
            content: `
Attendance tracking is no longer just about marking who came in and who didn't.
For growing organizations, it's about visibility, accountability, compliance, and control - especially across multiple sites, shifts, and work models.

If you're evaluating an attendance management software, here's what truly matters and what separates a basic tool from a system that actually works.

### 1. A Real-Time Dashboard That Tells the Full Story
The first thing you should see when you open your attendance system is clarity.

A good attendance management software should instantly show:
- Who is present and absent
- On-time and early arrivals
- Holidays and off-days
- Average working hours and overtime

FusionEdge's real-time dashboard brings all of this into one view, helping admins and managers understand workforce status at a glance, without digging through reports.

Because if you can't see what's happening now, you're already late.

### 2. Flexible Attendance Marking: App & Kiosk-Based
Different teams work differently. Your attendance system should adapt and not force uniformity.

Look for software that supports:
- App-based clock-ins for employees and field staff
- Kiosk-based attendance for sites and facilities
- Role-based access for admins and supervisors

This flexibility ensures accurate tracking across office, site-based, and distributed teams - without loopholes or confusion.

### 3. Built-In Shift & Roster Management
Attendance issues often start with unclear shifts.

An effective attendance management software should allow you to:
- Define shift types
- Assign rosters in advance
- Track attendance against scheduled shifts
- Eliminate shift confusion and disputes

With structured shift and roster management, workforce discipline improves naturally: no constant follow-ups required.

### 4. Accurate Break & Work Hour Tracking
Attendance isn't just about entry and exit times. Breaks and actual work hours matter just as much.

Smart systems track:
- Total working hours
- Multiple breaks taken during the day
- Average work hours per user
- Overtime hours - automatically

This level of detail ensures fair policies, accurate payroll inputs, and compliance readiness.

### 5. Leave, Absence & Overtime Visibility in One Place
Switching between tools to track attendance, leaves, and overtime creates gaps and errors.

Your attendance management software should provide:
- Centralized leave tracking
- Clear absence records
- Overtime calculations
- Approval workflows

FusionEdge brings all attendance-related data together, ensuring nothing slips through the cracks.

### 6. Admin Visibility Across Sites & Teams
For organizations managing multiple locations, visibility is everything.

A strong system enables site admins to:
- Monitor attendance by location
- Identify trends like absenteeism or late arrivals
- Track underutilization or overtime risks
- Make informed staffing decisions

Centralized visibility replaces guesswork with data-backed actions.

### 7. Announcements & Communication Built In
Attendance systems shouldn't operate in isolation.

Features like admin announcements - for break timings, policy updates, or shift notices: keep employees informed directly within the system.

Better communication leads to fewer misunderstandings and smoother daily operations.

### 8. Audit-Ready Reports & Logs
Compliance and audits are inevitable. Scrambling for records shouldn't be.

An effective attendance management software automatically maintains:
- Attendance logs
- Shift and break records
- Approval trails
- Historical reports

This ensures your organization is always audit-ready, without extra admin effort.

### Final Thoughts: Choose Control, Not Just Convenience
The right attendance management software does more than record punches.
It improves discipline, reduces disputes, strengthens compliance, and gives leaders real control over workforce operations.

FusionEdge Attendance Management Software delivers exactly that - through real-time dashboards, automation, multi-site visibility, and flexible tracking designed for modern workplaces.

👉 Book a FREE demo today and see how FusionEdge can transform attendance tracking into a strategic advantage.
        `,
        },
        {
            id: 3,
            title: "Managing Multiple Sites Without Losing Control: A Facility Manager's Guide",
            excerpt: "Learn how facility managers can regain control across multiple sites with centralized visibility, predictive maintenance, and data-driven decision-making.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
            slug: "managing-multiple-sites-facility-manager",
            content: `
At 9:00 AM, one site reports a breakdown.
By noon, another is chasing attendance corrections.
Before the day ends, approvals are stuck and reports are overdue.

Managing multiple facilities often feels like managing multiple crises at once.

The problem is not scale. The problem is visibility.

This guide explores how facility managers can regain control without micromanaging every site.

### 1. Control Starts With Seeing Everything at Once
When information lives in separate systems, emails, or registers, control is always delayed.

Facility managers need one place where every site speaks the same language. A centralized view turns scattered updates into a clear operational picture. Attendance, assets, approvals, and site activity become visible in real time, not after problems surface.

FusionEdge brings all locations onto one unified dashboard, giving managers instant clarity across facilities.

### 2. Consistency Without Killing Site Flexibility
Every site works differently, but chaos begins when rules are unclear.

Successful facility teams follow standard policies while allowing sites the flexibility to operate efficiently. When workflows, permissions, and responsibilities are clearly defined within a system, teams spend less time asking for approvals and more time getting work done.

FusionEdge allows organizations to standardize governance while adapting processes to each site's needs.

### 3. From Reactive Fixes to Predictable Maintenance
Multi-site operations magnify the cost of breakdowns.

When maintenance depends on manual follow-ups, issues go unnoticed until they become emergencies. A structured system ensures assets are tracked, services are scheduled, and maintenance is planned before failures occur.

With FusionEdge, preventive maintenance becomes a routine, not a reaction.

### 4. Knowing Where Your Workforce Really Is
Attendance gaps are not just HR problems. They affect productivity, compliance, and cost control.

When attendance data is unreliable or delayed, managers lose trust in reports and struggle to plan effectively. Real-time attendance visibility across sites ensures accurate work hours, better shift management, and audit-ready records.

FusionEdge delivers clear workforce visibility without manual intervention.

### 5. Faster Decisions Without Losing Oversight
Approvals should move operations forward, not slow them down.

In multi-site environments, delayed approvals can disrupt services and frustrate teams. A system that routes requests automatically and provides real-time status updates allows decisions to be made quickly while maintaining accountability.

FusionEdge keeps approvals flowing without compromising control.

### 6. Data That Builds Confidence, Not Confusion
Reports should answer questions, not raise new ones.

When data is fragmented, reporting becomes time-consuming and unreliable. A centralized platform transforms raw data into meaningful insights, helping facility managers compare site performance, track trends, and prepare confidently for audits.

FusionEdge turns operational data into decision-ready intelligence.

### Why Facility Teams Choose FusionEdge
FusionEdge is built for organizations managing multiple facilities. It combines attendance, assets, maintenance, approvals, safety, pantry, and compliance into one integrated platform.

Instead of juggling tools, managers gain one system that works across every site.

### Final Thought
Managing multiple sites does not have to feel overwhelming.
It requires the right visibility, structure, and support.

FusionEdge helps facility managers stay in control without constant follow-ups.

👉 Book a free demo today and experience smarter facility management with FusionEdge.
        `,
        },
        {
            id: 4,
            title: "Next-Gen Facility Services Management: How Asset Integration Redefines Building Efficiency & Eco-Performance",
            excerpt: "Explore the future of facility management where integrated asset ecosystems and smart analytics redefine energy performance and sustainability.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
            slug: "next-gen-facility-services-management",
            content: `
In the era of breakthroughs, businesses are evolving by adopting new technologies. They are transforming their way of managing buildings. Instead of routine maintenance, they are strategically employing advanced technology to deliver excellent results. This transformation is carried out by integrated asset management, allowing facility managers to manage operations efficiently while balancing cost and sustainability.

### The Changing Face of Facility Management
Earlier, facility management meant maintaining operations and comfort. Now, smart facility management embraces IoT intelligence, real-time insights, and data-driven automation to enhance performance. Integrated asset management simplifies complex systems like HVAC, lighting, and security into unified dashboards for seamless control.

### How Integrated Asset Management Is Transforming Operations
Integrated asset management centralizes energy tracking, performance insights, and asset maintenance.  
**Key benefits include:**  
- Early issue detection and predictive maintenance.  
- Real-time energy tracking and reduced waste.  
- Faster decision-making via a unified dashboard.  
- Data-driven improvements through performance analytics.

### Facility Services Management in the Era of Intelligence
FusionEdge integrates IoT sensors, AI, and cloud tools to automate monitoring, maintenance, and sustainability. AI analyses sensor data for predictive maintenance, while cloud dashboards allow managers to control facilities remotely.

### Partnering with Smart Service Providers
Modern facility service providers use advanced tools to digitize building operations, fostering green and efficient management. FusionEdge enables:  
- Real-time energy and asset monitoring.  
- Vendor collaboration on a shared dashboard.  
- Compliance and sustainability tracking.

### Building Efficiency: The New Sustainability Metric
FusionEdge ensures optimal indoor environments by adjusting HVAC and lighting based on occupancy and detecting leaks or inefficiencies — all autonomously.

### Toward an Eco-Efficient Future
As cities move toward sustainability, FusionEdge enables facility teams to manage systems remotely, track emissions, and make data-backed eco-decisions for a cleaner, greener world.

### Conclusion
Smart integration is the key to efficient, sustainable buildings. With FusionEdge, facility managers achieve smarter maintenance, optimized performance, and eco-friendly operations for a greener tomorrow.
        `,
        },
        {
            id: 5,
            title: "Sustainable Facility Management: Reducing Carbon Footprint through Smart Asset Integration",
            excerpt: "Learn how data-driven asset management and green technology integration are helping organizations achieve sustainability and lower emissions.",
            image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",
            slug: "sustainable-facility-management",
            content: `
Achieving sustainability is now a top priority for businesses. Buildings consume massive resources, and facility management ensures they operate efficiently and eco-consciously. Companies are shifting from traditional management to sustainability through integrated asset management.

### The Need for Sustainable Facility Management
Non-renewable resources are limited, and buildings overuse energy and water while generating waste. FusionEdge helps organizations achieve sustainability via predictive maintenance and energy monitoring — optimizing resources and reducing impact.

### How Integrated Asset Management Promotes Sustainability
FusionEdge tracks energy use and asset performance to support eco-friendly operations:  
- Smart sensors manage energy in real-time.  
- Predictive maintenance reduces downtime and costs.  
- Continuous monitoring optimizes resources and lifespan.  
- Automated insights reduce waste and carbon emissions.

### Facility Services Management for a Carbon-Neutral Future
By using renewable resources and waste-reduction practices, FusionEdge helps companies meet ESG goals. Facility managers can monitor sustainability metrics and make informed, data-driven decisions.

### The Role of Facilities Management Companies
Facilities management firms use FusionEdge to:  
- Track and control carbon emissions.  
- Optimize energy and resource use.  
- Report ESG performance transparently.  
- Adopt eco-friendly tools and practices.

### Carbon Footprint Reduction through Smart Building Management
FusionEdge ensures:  
- HVAC and lighting adjust automatically to occupancy.  
- Sensors prevent water wastage and detect leaks.  
- Motion sensors save energy in unused spaces.

### Benefits of Sustainable Facility Management
- Lower operational costs via reduced energy and water use.  
- Easier environmental compliance.  
- Strengthened stakeholder trust.  
- Reduced downtime and pollution.  
- Progress toward zero emissions.

### Moving Toward a Smarter and Greener Future
FusionEdge empowers sustainable management through automation and analytics, enabling green certifications and a cleaner planet.

### Conclusion
Sustainable facility management reduces carbon footprints while optimizing performance. FusionEdge's integrated platform enables organizations to create cleaner, greener, and smarter spaces for a sustainable future.
        `,
        },
    ];

    const blogsPerPage = 2;
    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const currentBlogs = blogs.slice(
        currentIndex * blogsPerPage,
        (currentIndex + 1) * blogsPerPage
    );

    const formatContent = (content: string) => {
        return content
            .trim()
            .replace(/\n/g, "<br/>")
            .replace(/### (.*?)<br\/>/g, '<h3 class="text-2xl font-bold text-[#5D1F73] mt-8 mb-4">$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
            .replace(/- (.*?)<br\/>/g, '<li class="ml-6 list-disc text-gray-700 mb-2">$1</li>');
    };

    // If a blog is selected, show the blog detail view
    if (selectedBlog) {
        return (
            <div className="bg-white min-h-screen">
                <Navbar />

                <article className="pt-24 pb-16 lg:pt-32">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl">
                            <div className="relative h-[400px] sm:h-[500px]">
                                <img
                                    src={selectedBlog.image}
                                    alt={selectedBlog.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                        {selectedBlog.title}
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100">
                            <div
                                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: formatContent(selectedBlog.content) }}
                            />

                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <button
                                    onClick={() => setSelectedBlog(null)}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back to Blogs
                                </button>
                            </div>
                        </div>
                    </div>
                </article>

                <style jsx>{`
                    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
                    
                    * {
                        font-family: 'Outfit', sans-serif;
                    }

                    .prose h3 {
                        scroll-margin-top: 100px;
                    }

                    .prose li {
                        margin-bottom: 0.5rem;
                    }
                `}</style>
            </div>
        );
    }

    // Default view: Blog listing
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-[#5D1F73]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#1ABC9C]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            FusionEdge <span className="text-[#5D1F73]">Insights</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Explore our latest blogs on IoT, sustainable facility management, and next-generation asset integration.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 items-start">
                        {/* Left Sidebar */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-[#5D1F73] mb-4">
                                    Our Latest Blogs
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                    Welcome to our blog section, where knowledge meets inspiration. Explore insightful articles, expert tips, and the latest trends in our field.
                                </p>
                            </div>

                            {/* Navigation */}
                            <div className="flex gap-4">
                                <button
                                    onClick={prevSlide}
                                    disabled={currentIndex === 0}
                                    className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${currentIndex === 0
                                        ? "border-gray-200 text-gray-300 cursor-not-allowed"
                                        : "border-gray-300 hover:border-[#5D1F73] hover:text-[#5D1F73] hover:bg-purple-50"
                                        }`}
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={currentIndex === totalPages - 1}
                                    className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${currentIndex === totalPages - 1
                                        ? "border-gray-200 text-gray-300 cursor-not-allowed"
                                        : "border-gray-300 hover:border-[#5D1F73] hover:text-[#5D1F73] hover:bg-purple-50"
                                        }`}
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Pagination Dots */}
                            <div className="hidden lg:flex gap-2 items-center">
                                {Array.from({ length: totalPages }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-[#5D1F73]" : "w-2 bg-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Blog Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {currentBlogs.map((blog, index) => (
                                <div
                                    key={blog.id}
                                    onClick={() => setSelectedBlog(blog)}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group h-full flex flex-col cursor-pointer"
                                    style={{
                                        animation: `fadeInUp 0.5s ease-out ${index * 0.15}s both`
                                    }}
                                >
                                    <div className="relative overflow-hidden h-64">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#5D1F73] transition-colors duration-300">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600 text-base line-clamp-3 mb-4 flex-1">
                                            {blog.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-[#5D1F73] font-semibold group-hover:gap-3 transition-all duration-300">
                                            Read more
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Pagination */}
                    <div className="flex lg:hidden gap-2 justify-center mt-12">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-[#5D1F73]" : "w-2 bg-gray-300"
                                    }`}
                            />
                        ))}
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
            `}</style>

            <Footer />
        </div>
    );
};

export default Resources;