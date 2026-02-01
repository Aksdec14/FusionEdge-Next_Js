"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Facebook,
    Linkedin,
    Instagram,
    CheckCircle,
    AlertCircle,
    Loader2,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
    subject: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    message?: string;
}

// ---------------------------------------------------------------------------
// Toast – slide-in notification
// ---------------------------------------------------------------------------
function Toast({
    show,
    success,
    message,
}: {
    show: boolean;
    success: boolean;
    message: string;
}) {
    return (
        <div
            className="fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl border transition-all duration-500"
            style={{
                backgroundColor: success ? "#f0fdf4" : "#fef2f2",
                borderColor: success ? "#10B981" : "#ef4444",
                transform: show ? "translateX(0)" : "translateX(120%)",
                opacity: show ? 1 : 0,
                maxWidth: "360px",
            }}
        >
            {success ? (
                <CheckCircle size={22} color="#10B981" className="shrink-0" />
            ) : (
                <AlertCircle size={22} color="#ef4444" className="shrink-0" />
            )}
            <p
                className="text-sm font-medium"
                style={{ color: success ? "#065f46" : "#991b1b" }}
            >
                {message}
            </p>
        </div>
    );
}

// ---------------------------------------------------------------------------
// ContactForm
// ---------------------------------------------------------------------------
export default function ContactForm() {
    // -----------------------------------------------------------------------
    // State
    // -----------------------------------------------------------------------
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        subject: "General Inquiry",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<{
        show: boolean;
        success: boolean;
        message: string;
    }>({ show: false, success: true, message: "" });

    const MESSAGE_MAX = 500;

    // -----------------------------------------------------------------------
    // Validation helpers
    // -----------------------------------------------------------------------
    const validate = (data: FormData): FormErrors => {
        const e: FormErrors = {};
        if (!data.firstName.trim()) e.firstName = "First name is required";
        if (!data.lastName.trim()) e.lastName = "Last name is required";
        if (!data.phone.trim()) {
            e.phone = "Phone number is required";
        } else if (!/^[\d\s\-+()]{7,15}$/.test(data.phone)) {
            e.phone = "Enter a valid phone number";
        }
        if (!data.email.trim()) {
            e.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            e.email = "Enter a valid email";
        }
        if (!data.message.trim()) {
            e.message = "Message is required";
        } else if (data.message.length < 10) {
            e.message = "Message must be at least 10 characters";
        }
        return e;
    };

    // -----------------------------------------------------------------------
    // Handlers
    // -----------------------------------------------------------------------
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Live validation once a field has been touched
        if (touched[name]) {
            const current = { ...formData, [name]: value };
            const newErrors = validate(current);
            setErrors((prev) => ({
                ...prev,
                [name]: newErrors[name as keyof FormErrors],
            }));
        }
    };

    const handleBlur = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const newErrors = validate(formData);
        setErrors((prev) => ({
            ...prev,
            [name]: newErrors[name as keyof FormErrors],
        }));
    };

    const showToast = (success: boolean, message: string) => {
        setToast({ show: true, success, message });
        setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
    };

    // -----------------------------------------------------------------------
    // Submit  →  Web3Forms
    //   1. Set your Web3Forms access_key in the hidden input below.
    //   2. Optionally set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local and read it
    //      via process.env.NEXT_PUBLIC_WEB3FORMS_KEY (see comment in JSX).
    // -----------------------------------------------------------------------
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const allTouched = Object.fromEntries(
            Object.keys(formData).map((k) => [k, true])
        );
        setTouched(allTouched);
        const validationErrors = validate(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    // Replace with your actual Web3Forms access key
                    // or use: access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                    access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
                    ...formData,
                }),
            });

            const result = await response.json();

            if (result.success) {
                showToast(true, "Message sent successfully! We'll get back to you soon.");
                setFormData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    message: "",
                    subject: "General Inquiry",
                });
                setErrors({});
                setTouched({});
            } else {
                showToast(false, "Submission failed. Please try again.");
            }
        } catch {
            showToast(false, "Network error. Please check your connection and retry.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // -----------------------------------------------------------------------
    // Shared input class builder
    // -----------------------------------------------------------------------
    const inputClass = (field: keyof FormErrors) =>
        [
            "w-full py-2.5 px-0 bg-transparent text-sm sm:text-base text-gray-800 placeholder-gray-400",
            "border-b-2 focus:outline-none transition-all duration-300",
            errors[field] && touched[field]
                ? "border-red-400 focus:border-red-500"
                : "border-gray-300 focus:border-[#5D1F73]",
        ].join(" ");

    // -----------------------------------------------------------------------
    // Render
    // -----------------------------------------------------------------------
    return (
        <>
            <Toast show={toast.show} success={toast.success} message={toast.message} />

            <section id="contact" className="py-10 px-4 sm:px-6 lg:px-8">
                <div
                    className="max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 border-2"
                    style={{ backgroundColor: "white", borderColor: "#5D1F73" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* -------------------------------------------------------- */}
                        {/* Left – Contact Info Panel                                 */}
                        {/* -------------------------------------------------------- */}
                        <div
                            className="p-8 sm:p-10 text-white relative flex flex-col justify-between"
                            style={{ backgroundColor: "#5D1F73" }}
                        >
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                                    Contact Information
                                </h2>
                                <p className="mb-6 text-sm sm:text-base text-gray-200">
                                    Have some big idea or brand to develop and need help? We'd
                                    love to hear from you.
                                </p>

                                <ul className="space-y-5 mb-8 text-sm sm:text-base">
                                    {[
                                        { icon: Mail, label: "info@fusionEdge.com" },
                                        { icon: Phone, label: "+91-9015122212" },
                                        { icon: MapPin, label: "Noida, India" },
                                    ].map(({ icon: Icon, label }) => (
                                        <li
                                            key={label}
                                            className="flex items-center gap-3 group cursor-pointer"
                                        >
                                            <span
                                                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                                style={{
                                                    backgroundColor: "rgba(255,255,255,0.12)",
                                                }}
                                            >
                                                <Icon size={17} color="#1ABC9C" />
                                            </span>
                                            <span className="group-hover:text-[#1ABC9C] transition-colors duration-300">
                                                {label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-3 mt-4">
                                {[
                                    { Icon: Facebook, href: "#" },
                                    { Icon: Linkedin, href: "#" },
                                    { Icon: Instagram, href: "#" },
                                ].map(({ Icon, href }, idx) => (
                                    <a
                                        key={idx}
                                        href={href}
                                        className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                        style={{ backgroundColor: "white", color: "#5D1F73" }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1ABC9C";
                                            (e.currentTarget as HTMLAnchorElement).style.color = "white";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "white";
                                            (e.currentTarget as HTMLAnchorElement).style.color = "#5D1F73";
                                        }}
                                    >
                                        <Icon size={17} />
                                    </a>
                                ))}
                            </div>

                            {/* Decorative circle */}
                            <div
                                className="absolute bottom-0 right-0 w-28 sm:w-32 h-28 sm:h-32 rounded-tl-full opacity-60"
                                style={{ backgroundColor: "#1ABC9C" }}
                            />
                        </div>

                        {/* -------------------------------------------------------- */}
                        {/* Right – Form                                              */}
                        {/* -------------------------------------------------------- */}
                        <div className="p-8 sm:p-10">
                            <form onSubmit={handleSubmit} noValidate>
                                {/* Hidden field required by Web3Forms */}
                                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />

                                {/* First & Last Name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
                                    <div>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={inputClass("firstName")}
                                        />
                                        {errors.firstName && touched.firstName && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.firstName}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={inputClass("lastName")}
                                        />
                                        {errors.lastName && touched.lastName && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.lastName}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Phone & Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
                                    <div>
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Phone No."
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={inputClass("phone")}
                                        />
                                        {errors.phone && touched.phone && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.phone}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={inputClass("email")}
                                        />
                                        {errors.email && touched.email && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Message + character counter */}
                                <div className="mb-5">
                                    <textarea
                                        name="message"
                                        placeholder="Write Message"
                                        rows={3}
                                        maxLength={MESSAGE_MAX}
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`${inputClass("message")} resize-none`}
                                    />
                                    <div className="flex justify-between items-center mt-1">
                                        {errors.message && touched.message ? (
                                            <p className="text-red-500 text-xs flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.message}
                                            </p>
                                        ) : (
                                            <span />
                                        )}
                                        <span
                                            className="text-xs transition-colors duration-300"
                                            style={{
                                                color:
                                                    formData.message.length > MESSAGE_MAX - 50
                                                        ? "#ef4444"
                                                        : "#9CA3AF",
                                            }}
                                        >
                                            {formData.message.length}/{MESSAGE_MAX}
                                        </span>
                                    </div>
                                </div>

                                {/* Subject Radio Buttons */}
                                <div className="mb-6">
                                    <label className="block mb-2.5 font-semibold text-sm sm:text-base text-gray-700">
                                        Select Subject
                                    </label>
                                    <div className="flex gap-4 sm:gap-6 flex-wrap text-sm sm:text-base">
                                        {["General Inquiry", "Technical Support", "Website Feedback"].map(
                                            (label) => (
                                                <label
                                                    key={label}
                                                    className="flex items-center gap-2 cursor-pointer group"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="subject"
                                                        value={label}
                                                        checked={formData.subject === label}
                                                        onChange={handleChange}
                                                        className="w-4 h-4 cursor-pointer"
                                                        style={{ accentColor: "#5D1F73" }}
                                                    />
                                                    <span className="text-gray-600 group-hover:text-[#5D1F73] transition-colors duration-200">
                                                        {label}
                                                    </span>
                                                </label>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center justify-center gap-2 text-white px-7 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105 hover:shadow-xl"
                                    style={{
                                        background:
                                            "linear-gradient(to right, #5D1F73, #1ABC9C)",
                                    }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={17} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}