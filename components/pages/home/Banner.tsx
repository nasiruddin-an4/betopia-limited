"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateVisibility = () => {
      if (!video) return;
      const currentTime = video.currentTime;
      const duration = video.duration;

      if (isNaN(duration)) {
        setIsVisible(true);
        return;
      }

      if (currentTime < 3) {
        setIsVisible(true);
      } else if (currentTime < 79) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
 
    video.muted = true;

    video.addEventListener("timeupdate", updateVisibility);
    video.addEventListener("loadedmetadata", updateVisibility);
    video.addEventListener("loadeddata", updateVisibility);
    video.addEventListener("play", updateVisibility);
    video.addEventListener("seeked", updateVisibility);

    updateVisibility();

    return () => {
      video.removeEventListener("timeupdate", updateVisibility);
      video.removeEventListener("loadedmetadata", updateVisibility);
      video.removeEventListener("loadeddata", updateVisibility);
      video.removeEventListener("play", updateVisibility);
      video.removeEventListener("seeked", updateVisibility);
    };
  }, []);

  // sound on/off toggle function
  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <>
      <div className="lg:h-22 bg-[#212529] w-full mb-2"></div>
      <div
        className="relative [@media(max-width:320px)]:h-[150px] h-[175px] mt-20 lg:mt-0 md:h-[360px] lg:h-[450px] [@media(min-width:1250px)]:h-[75vh] [@media(min-width:1440px)]:h-[90vh] [@media(max-height:600px)]:h-[100vh] flex items-center justify-center text-center text-white overflow-hidden w-full md:w-[100%] mx-auto"
      >
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          playsInline
          muted={true}           
        >
          <source src="/videos/hero/website_video_11.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 50,
            height: isVisible ? "auto" : 0,
          }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="relative z-20 container px-4 overflow-hidden"
        >
          <div className="pb-[0%] lg:pt-[40%] xl:pt-[30%]">
            <h1 className="text-xl md:text-5xl 2xl:text-[70px] font-bold lg:leading-16 2xl:leading-28 gap-2">
              From <span className="text-[#FF9500]">Bangladesh to the World</span>{" "}
              Smarter Enterprise Technology
            </h1>

            <p className="text-xs md:text-xl xl:text-2xl md:w-[95%] mt-0 lg:mt-6">
              Making secure, cloud-ready, AI-powered platforms affordable for
              modern businesses.
            </p>

            <div className="flex justify-center gap-5 mt-10 -mb-20 lg:mb-96">
              <Link
                href="/meeting-scheduler"
                target="_blank"
                className="flex cursor-pointer items-center gap-3 bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-2 md:px-5 md:py-3 rounded-[10px]"
              >
                Book a Consultation{" "}
                <div className="mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                      stroke="white"
                      strokeWidth="1.95"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Sound toggle button - right bottom */}
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 focus:outline-none"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? ( 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            // Volume on icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>
 
        {isMuted && (
          <div className="absolute bottom-20 right-6 z-30 text-white/70 text-xs bg-black/40 px-3 py-1.5 rounded-full pointer-events-none">
            Click to enable sound
          </div>
        )}
      </div>
    </>
  );
};

export default Banner;