"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import icon from "../assets/Images/FusionEdge_logo.png";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const COLUMNS = [
  {
    title: "By Use Case",
    links: [
      { label: "Fixed Assets Management", href: "/404" },
      { label: "Fixed Asset Register Management", href: "/404" },
      { label: "Physical Tracking Of Assets", href: "/404" },
    ],
  },
  {
    title: "By Technology",
    links: [
      { label: "Barcode Based Asset Management", href: "/404" },
      { label: "RFID Based Asset Tracking", href: "/404" },
      { label: "IoT Based Asset Tracking", href: "/404" },
    ],
  },
  {
    title: "By Services",
    links: [
      { label: "Fixed Asset Management Services", href: "/404" },
      { label: "Physical Asset Verification & Tagging Services", href: "/404" },
      { label: "Fixed Asset Register Services", href: "/404" },
    ],
  },
];

const SOCIALS = [
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/fusionedgeservices/", label: "LinkedIn" },
  { Icon: FaXTwitter, href: "#", label: "X Twitter" },
];

// ---------------------------------------------------------------------------
// useReveal – adds .visible class when element scrolls into view
// ---------------------------------------------------------------------------
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
export default function Footer() {
  // each column gets its own reveal ref
  const logoRef = useReveal();
  const col0Ref = useReveal();
  const col1Ref = useReveal();
  const col2Ref = useReveal();
  const contactRef = useReveal();

  const colRefs = [col0Ref, col1Ref, col2Ref];

  return (
    <>
      {/* ─── Injected styles ─────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .footer-root {
          font-family: 'Outfit', sans-serif;
          position: relative;
          background: #FFFFFF;
          overflow: hidden;
        }

        /* ── ambient orbs ── */
        .footer-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(100px);
        }
        .footer-orb-1 {
          width: 380px; height: 380px;
          background: #5D1F73;
          top: -120px; left: -100px;
          opacity: 0.05;
        }
        .footer-orb-2 {
          width: 280px; height: 280px;
          background: #1ABC9C;
          bottom: -80px; right: -60px;
          opacity: 0.06;
        }
        .footer-orb-3 {
          width: 180px; height: 180px;
          background: #5D1F73;
          top: 40%; right: 15%;
          opacity: 0.04;
        }

        /* ── watermark text ── */
        .footer-watermark {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          font-size: clamp(60px, 12vw, 160px);
          font-weight: 800;
          white-space: nowrap;
          background: linear-gradient(135deg, rgba(93,31,115,0.06), rgba(26,188,156,0.06));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          pointer-events: none;
          letter-spacing: -2px;
          user-select: none;
        }

        /* ── staggered reveal ── */
        .footer-col {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
        }
        .footer-col.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .footer-col:nth-child(1) { transition-delay: 0s; }
        .footer-col:nth-child(2) { transition-delay: 0.08s; }
        .footer-col:nth-child(3) { transition-delay: 0.16s; }
        .footer-col:nth-child(4) { transition-delay: 0.24s; }
        .footer-col:nth-child(5) { transition-delay: 0.32s; }

        /* ── column heading ── */
        .footer-col-title {
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #1ABC9C;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }
        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 28px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #5D1F73, #1ABC9C);
        }

        /* ── links ── */
        .footer-link {
          display: inline-block;
          color: #6B7280;
          font-size: 14px;
          text-decoration: none;
          position: relative;
          padding-bottom: 3px;
          transition: color 0.3s ease;
          cursor: pointer;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1.5px;
          border-radius: 2px;
          background: linear-gradient(90deg, #5D1F73, #1ABC9C);
          transition: width 0.35s cubic-bezier(.22,1,.36,1);
        }
        .footer-link:hover {
          color: #5D1F73;
        }
        .footer-link:hover::after {
          width: 100%;
        }

        /* ── social icons ── */
        .footer-social {
          width: 38px; height: 38px;
          border-radius: 10px;
          border: 1.5px solid #E5E7EB;
          background: #F3F4F6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6B7280;
          text-decoration: none;
          font-size: 15px;
          transition: all 0.35s cubic-bezier(.22,1,.36,1);
          position: relative;
          overflow: hidden;
        }
        .footer-social::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #5D1F73, #1ABC9C);
          opacity: 0;
          transition: opacity 0.35s;
          z-index: 0;
        }
        .footer-social:hover::before { opacity: 1; }
        .footer-social:hover {
          color: #fff;
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(26,188,156,0.25);
        }
        .footer-social svg, .footer-social span {
          position: relative;
          z-index: 1;
        }

        /* ── bottom bar ── */
        .footer-bar {
          position: relative;
          z-index: 1;
          margin-top: 56px;
          padding-top: 24px;
          border-top: 1px solid #E5E7EB;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-bar-text {
          color: #9CA3AF;
          font-size: 13px;
        }
        .footer-bar-links {
          display: flex;
          gap: 20px;
        }
        .footer-bar-link {
          color: #9CA3AF;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-bar-link:hover { color: #1ABC9C; }

        /* ── divider between columns area and bar ── */
        .footer-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1.2fr 1fr 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ─── Footer body ─────────────────────────────────────────────── */}
      <footer className="footer-root" style={{ padding: "72px 24px 48px" }}>
        {/* Orbs */}
        <div className="footer-orb footer-orb-1" />
        <div className="footer-orb footer-orb-2" />
        <div className="footer-orb footer-orb-3" />

        {/* Watermark */}
        <div className="footer-watermark">FUSIONEDGE</div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="footer-grid">

            {/* ── Col 0 : Logo + copyright + socials ── */}
            <div className="footer-col" ref={logoRef}>
              <Image
                src={icon}
                alt="FusionEdge"
                height={44}
                width={66}
                className="mb-5"
                style={{ height: "44px", width: "auto" }}
              />
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B7280" }}>
                Empowering businesses with
                next-gen asset tracking &
                management solutions.
              </p>
              <div className="flex gap-3">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label} className="footer-social">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Cols 1-3 : link columns ── */}
            {COLUMNS.map((col, i) => (
              <div key={col.title} className="footer-col" ref={colRefs[i]}>
                <h6 className="footer-col-title">{col.title}</h6>
                <ul className="flex flex-col gap-3">
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="footer-link">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* ── Col 4 : Contact + Policies ── */}
            <div className="footer-col" ref={contactRef}>
              <h6 className="footer-col-title">Contact Us</h6>
              <ul className="flex flex-col gap-3 mb-6">
                <li>
                  <a href="mailto:info@fusionEdge.com" className="footer-link">info@fusionEdge.com</a>
                </li>
                <li>
                  <a href="tel:+919015122212" className="footer-link">+91-9015122212</a>
                </li>
              </ul>

              <h6 className="footer-col-title">Content</h6>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/404" className="footer-link">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/404" className="footer-link">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="footer-bar">
            <span className="footer-bar-text">
              © {new Date().getFullYear()} FusionEdge. All rights reserved.
            </span>
            <div className="footer-bar-links">
              <Link href="/404" className="footer-bar-link">Terms of Service</Link>
              <Link href="/404" className="footer-bar-link">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}