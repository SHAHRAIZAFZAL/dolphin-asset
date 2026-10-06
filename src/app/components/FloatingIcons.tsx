import React from "react";
import Image from "next/image";

export default function FloatingIcons() {
  return (
    <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+923006624494"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f3ff] shadow-sm  shadow-[0_8px_24px_rgba(37,211,102,0.35)] "
        aria-label="Contact us on WhatsApp"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] transition-all duration-300 group-hover:scale-110">
          <Image
            src="/images/floatingIcons/whatsapp-icon.png"
            alt="WhatsApp"
            width={26}
            height={26}
            className="transition-all duration-300 brightness-0 invert group-hover:brightness-0 group-hover:invert"
          />
        </div>
      </a>

      {/* Email Button */}
      <a
        href="mailto:info@dolphinais.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f3ff] shadow-sm  shadow-[0_8px_24px_rgba(37,211,102,0.35)] "
        aria-label="Email us"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#01286d] transition-all duration-300 group-hover:scale-110">
          <Image
            src="/images/floatingIcons/mail-icon.png"
            alt="Email"
            width={26}
            height={26}

            className="transition-all duration-300 brightness-0 invert group-hover:brightness-0 group-hover:invert"
          />
        </div>
      </a>
    </div>
  );
}
