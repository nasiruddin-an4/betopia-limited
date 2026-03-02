"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          subject: "Betopia Alliance - Partnership Application",
          message: `Partnership application received for: ${email}`,
          type: "partnership",
        }),
      });

      if (response.ok) {
        setMessage(
          "✓ Application submitted! We'll review and get back to you soon.",
        );
        setEmail("");
      } else {
        setMessage("× Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("× Error submitting application. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
      {/* Content */}
      <div className=" bg-gradient-to-br p-16 from-slate-900 via-blue-900 to-slate-900 rounded-2xl text-center">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-4 leading-tight">
            Join the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Betopia Alliance
            </span>{" "}
            Today
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            Scale your business with enterprise-grade delivery, zero technical
            liability, and three compounding revenue streams. Apply with your
            work email to get started.
          </p>
          <a
            href="/partner-program/partner-form"
            className="px-6 py-3 rounded-xl bg-white hover:bg-gray-200 text-amber-700 font-semibold transition duration-300 inline-block"
          >
            Become a Betopia Partners
          </a>
        </div>
      </div>
    </section>
  );
}
