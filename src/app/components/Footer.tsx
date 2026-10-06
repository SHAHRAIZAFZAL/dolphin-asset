"use client";

import Image from "next/image";

import Link from "next/link";
import { Source_Serif_4, Montserrat } from "next/font/google";
import AnimatedSection from "./AnimatedSection";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <footer className={`w-full bg-[#01286D] text-[#FFFFFF] font-medium ${montserrat.className}`}>
      {/* Top CTA Bar */}
      <div className="flex flex-wrap justify-between items-center gap-4 px-6 xl:px-10 py-12 border-b border-[#FFFFFF33] bg-[linear-gradient(270.1deg,#0F2D5D_12.8%,#113978_45.26%,#0F2D5D_79.77%)]">
        <AnimatedSection direction="left" delay={0.1}>
          <div className="flex items-center gap-3 xl:ml-24">
            <Image
              src="/images/footer/trust.png"
              alt="Trust"
              width={28}
              height={28}
              unoptimized
              quality={100}
            />

            <div>
              <h3 className={`text-lg sm:text-2xl font-bold ${sourceSerif.className}`}>
                Trusted engineering support for safer operations
              </h3>

              <p className="text-xs sm:text-sm text-[#FFFFFF] mt-1">
                Technical Expertise | Safety | Accuracy | Reliability | Quality
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.2}>
          <a
            href="/quote"
            className="flex items-center gap-4 bg-[linear-gradient(269.77deg,#FF6221_3.66%,#D9480D_116.34%)] text-white text-[12px] font-semibold px-5 py-3 rounded-lg xl:mr-24 hover:opacity-90 transition whitespace-nowrap animate-pulse-glow"
          >
            REQUEST A QUOTE
            <Image
              src="/images/footer/arrow.png"
              alt="Arrow"
              width={4}
              height={4}
              unoptimized
              quality={100}
            />
          </a>
        </AnimatedSection>
      </div>

      {/* Main Footer Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 xl:px-[136px] pt-10 pb-24 bg-[linear-gradient(330.07deg,#0F2D5D_31.94%,#133772_150.32%)]">
        {/* Column 1 - About */}
        <AnimatedSection direction="up" delay={0.1}>
          <div>
            <h4 className={`text-xl font-bold ${sourceSerif.className}`}>Dolphin Asset Integrity Solutions</h4>
            <p className="text-[#FD550A] text-[12px] font-medium mt-2 tracking-[0.10em]">
              Ensuring Safety, Integrity, and Reliability
            </p>
            <p className="text-[11px] text-[#FFFFFF] mt-3 leading-relaxed">
              Engineering and asset integrity services ensuring the safety,
              integrity and reliability of industrial assets — inspection,
              calibration, testing and training.
            </p>

         <h3 className={`text-lg font-bold mt-6 ${sourceSerif.className}`}>Follow Us</h3>
<div className="flex items-center gap-4 mt-3">

    {/* Facebook Link */}
  <Link 
    href="https://www.facebook.com/dolphinais" 
    target="_blank"
    className="group flex h-8 w-8 items-center justify-center rounded-full bg-[#e9f3ff] transition-colors duration-300 hover:bg-[#fd550b]"
  >
    <Image
      src="/images/footer/facebook-icon.png"
      alt="Facebook"
      width={18}
      height={18}
      className="transition-all duration-300 [filter:sepia(1)_saturate(5000%)_hue-rotate(10deg)_brightness(95%)] group-hover:brightness-0 group-hover:invert"
    />
  </Link>
  {/* LinkedIn Link */}
  <Link 
    href="https://www.linkedin.com/company/dolphinais" 
    target="_blank"
    className="group flex h-8 w-8 items-center justify-center rounded-full bg-[#e9f3ff] transition-colors duration-300 hover:bg-[#fd550b]"
  >
    <Image
      src="/images/footer/linkedin-icon.png"
      alt="LinkedIn"
      width={18}
      height={18}
      className="transition-all duration-300 [filter:sepia(1)_saturate(5000%)_hue-rotate(10deg)_brightness(95%)] group-hover:brightness-0 group-hover:invert"
    />
  </Link>



            </div>
          </div>
        </AnimatedSection>

        {/* Column 2 - Service Domains */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="lg:ml-20">
            <h4 className={`text-xl font-medium ${sourceSerif.className}`}>Service Domains</h4>
            <ul className="mt-3 flex flex-col gap-3 text-xs text-[#FFFFFF]">
              <li>Inspection &amp; Integrity Assessment</li>
              <li>Calibration Services</li>
              <li>Testing Services</li>
              <li>Training Services</li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Column 3 - Head Office */}
        <AnimatedSection direction="up" delay={0.3}>
          <div>
            <h4 className={`text-xl font-bold ${sourceSerif.className}`}>Head Office</h4>
            <div className="mt-3 flex flex-col gap-5 text-xs text-[#FFFFFF]">
              <div className="flex items-start gap-2">
                <Image
                  src="/images/footer/location.png"
                  alt="Location"
                  width={12}
                  height={12}
                  className="mt-0.5"
                />
                <span>
                  First Floor, Plaza No. 29 Broadway, Paragon Housing Society,
                  Barki Road, Lahore, Pakistan.
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/images/footer/phone1.png"
                  alt="Phone"
                  width={16}
                  height={16}
                />
                <span>+92 4235305335</span>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/images/footer/phone2.png"
                  alt="Phone"
                  width={16}
                  height={16}
                />
                <span>+92 300 6624494</span>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/images/footer/email.png"
                  alt="Email"
                  width={16}
                  height={16}
                />
                <span>info@dolphinais.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/images/footer/internet.png"
                  alt="Website"
                  width={16}
                  height={16}
                />
                <span>dolphinais.com</span>
              </div>

              {/* <div className="flex items-center gap-2">
                <div className="w-4 h-4  flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FD550A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <span><Link href="https://www.linkedin.com/company/dolphinais" target="_blank">LinkedIn</Link></span>
              </div>


              
              <div className="flex items-center  ">
                <div className="w-6 h-4 pr-2 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FD550A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <span><Link href="https://www.facebook.com/dolphinais" target="_blank">Facebook</Link></span>
              </div> */}

            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom Bar */}
      <AnimatedSection direction="none" delay={0.2}>
        <div className="flex flex-wrap justify-between items-center gap-3 px-6 xl:px-[136px] pt-6 pb-4 border-t border-[#FFFFFF33] bg-[linear-gradient(330.07deg,#0F2D5D_31.94%,#133772_150.32%)] text-xs text-[#FFFFFF]">
          <p>© 2026.Dolphin Asset Integrity Solutions (Private) Limited-All rights reserved.</p>
          <p>Inspection | Calibration | Testing | Training</p>
        </div>
      </AnimatedSection>
    </footer>
  );
}