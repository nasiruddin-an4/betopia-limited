"use client";

import { useState, useRef, useEffect } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "next-share";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMdShareAlt } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FiLink } from "react-icons/fi";

interface ShareProps {
  shareUrl: string;
  shareTitle: string;
}

export default function ShareButton({ shareUrl, shareTitle }: ShareProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    alert("Link copied!");
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      {/* Share icon */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-10 h-10 rounded-full bg-[#ffcdd2] text-[#d60000] flex items-center justify-center hover:scale-110 transition cursor-pointer"
      >
        <IoMdShareAlt size={20} />
      </button>

      {/* Share popup */}
      {open && (
        <div className="absolute -right-5 md:right-0 top-12 w-[320px] bg-white rounded-xl shadow-xl p-4 z-[9999]">
          <p className="text-sm font-semibold text-gray-700 mb-3">Share</p>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <FacebookShareButton url={shareUrl} quote={shareTitle}>
              <ShareRow icon={<FaFacebookF />} text="Facebook" color="#1877F2" />
            </FacebookShareButton>

            <LinkedinShareButton url={shareUrl}>
              <ShareRow icon={<FaLinkedinIn />} text="LinkedIn" color="#0A66C2" />
            </LinkedinShareButton>

            <TwitterShareButton url={shareUrl} title={shareTitle}>
              <ShareRow icon={<FaXTwitter />} text="X (Twitter)" color="#000000" />
            </TwitterShareButton>

            <WhatsappShareButton url={shareUrl} title={shareTitle}>
              <ShareRow icon={<FaWhatsapp />} text="WhatsApp" color="#25D366" />
            </WhatsappShareButton>

            <EmailShareButton url={shareUrl} subject={shareTitle}>
              <ShareRow icon={<MdEmail />} text="Email" color="#555555" />
            </EmailShareButton>

            <button onClick={copyLink}>
              <ShareRow icon={<FiLink />} text="Copy link" color="#111111" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Reusable row ---------- */
function ShareRow({
  icon,
  text,
  color,
}: {
  icon: React.ReactNode;
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 hover:bg-gray-100 rounded-lg p-2 transition cursor-pointer">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-white"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}
