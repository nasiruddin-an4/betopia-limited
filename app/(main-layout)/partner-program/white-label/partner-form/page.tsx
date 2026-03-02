/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

const RegistrationForm = () => {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    whatsapp: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    area: "",
    building: "",
    street: "",
    block: "",
    program_type: "white",
    id_confirmed: true,
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!agreed) return;

    const payload = {
      ...formData,
    };

    console.log(payload);

    try {
      setLoading(true);

      const res = await fetch(
        "https://partners.betopialimited.com/api/partner/onboard",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Submission failed");
      }
      
      console.log("Form Submission Successful! ✅", data);
      // Swal.fire("Success", "Form submitted successfully ✅", "success"); 
      Swal.fire({
        title: "Success",
        text: data.message, // This will show "Partner onboarding successful"
        icon: "success",
        confirmButtonColor: "#F54900"
      });
    } catch (error) {
      console.error(error);
      Swal.fire("Something went wrong ❌");  
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative w-full h-[450px] lg:h-[800px] 2xl:h-[900px]  overflow-hidden">
        <Image
          alt="media"
          className="absolute top-0 left-0 w-full h-[450px] lg:h-[800px] 2xl:h-[900px] object-cover"
          src="/partner/white-label/hero.png"
          width={1660}
          height={900}
        />

        {/* Overlay */}

        {/* Content */}
        <div className="relative z-10 flex flex-col mt-10 lg:-mt-10  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="  xl:min-w-[1600px] xl:mx-auto mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
            <Link
              className="text-sm md:text-xl lg:text-2xl font-semibold"
              href="/adaptability"
            >
              What We Do{" "}
            </Link>
            <div className="text-xl lg:text-3xl font-semibold">/</div>
            <Link
              className="text-sm md:text-xl lg:text-2xl font-semibold"
              href="/partner-program"
            >
              Partnership
            </Link>
            <div className="text-xl lg:text-3xl font-semibold">/</div>
            <Link
              className="text-sm md:text-xl lg:text-2xl font-semibold"
              href="/partner/white-label/partner-form"
            >
              Partner Form
            </Link>
          </div>
          <div className="max-w-[1600px] mx-auto w-full">
            <h1
              className="font-bold text-white 
          text-3xl md:text-4xl lg:text-[64px]  "
            >
              Explore our platform with{" "}
              <span className="text-[#FF9500]">
                Betopia White-Label
                <br /> Solutions
              </span>{" "}
              solutions designed to fit <br /> your brand perfectly.
            </h1>

            <p
              className={`text-lg md:text-xl xl:text-2xl mt-4 md:mt-7 text-start text-[#CAD5E2]  mx-auto `}
            >
              Take the first step towards a rewarding partnership.
            </p>
          </div>
        </div>
      </div>

      {/* Partner section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-[52px] font-bold text-[#1A1A1A] mb-6">
            Why Partner with <span className="text-[#F97316]">Betopia</span>
          </h2>

          {/* Paragraph */}
          <p className="text-[#6B7280] text-lg md:text-xl leading-relaxed font-normal max-w-4xl mx-auto">
            Betopia helps businesses grow by turning challenges into
            opportunities. We provide smart Cloud, AI, and Cybersecurity
            solutions that fit your exact needs. In a world that's always
            changing, we make sure you're not just keeping up, you're staying
            ahead. Every solution we create is made by experts and built around
            your goals, never copied from a template.
          </p>
        </div>
      </section>

      <div className=" m bg-linear-to-br from-[#FFF5F0] via-[#FDEEE5] to-[#FCE3D4] p-8 lg:p-12 font-sans text-[#4A4A4A]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">
            Towards <span className="text-[#F59E0B]">First Step</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Your Details */}
            <section className="space-y-6">
              <h3 className="font-bold text-xl">Your Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormGroup
                  required
                  label="Full Name"
                  name="full_name"
                  placeholder="Enter Full Name"
                  onChange={handleChange}
                />

                <FormGroup
                  required
                  label="Email Address"
                  name="email"
                  placeholder="Enter Company Email"
                  onChange={handleChange}
                />

                <FormGroup
                  label="WhatsApp Number"
                  name="whatsapp"
                  placeholder="+971 50 000 0000"
                  onChange={handleChange}
                />
              </div>
            </section>

            {/* Address */}
            <section className="space-y-4">
              <h3 className="font-bold text-xl">Your Address</h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <FormGroup
                  label="Country"
                  name="country"
                  placeholder="Country"
                  onChange={handleChange}
                />
                <FormGroup
                  label="State"
                  name="state"
                  placeholder="State"
                  onChange={handleChange}
                />
                <FormGroup
                  label="City"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                />
                <FormGroup
                  label="ZIP Code"
                  name="zip"
                  placeholder="ZIP Code"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <FormGroup
                  label="Area"
                  name="area"
                  placeholder="Area"
                  onChange={handleChange}
                />
                <FormGroup
                  label="Community / Building"
                  name="building"
                  placeholder="Building"
                  onChange={handleChange}
                />
                <FormGroup
                  label="Street"
                  name="street"
                  placeholder="Street"
                  onChange={handleChange}
                />
                <FormGroup
                  label="Block No."
                  name="block"
                  placeholder="Block"
                  onChange={handleChange}
                />
              </div>
            </section>

            {/* Agreement */}
            <div className="space-y-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setAgreed(checked);
                    setFormData((prev) => ({
                      ...prev,
                      id_confirmed: checked,
                    }));
                  }}
                  className="mt-1 w-4 h-4 accent-orange-500"
                />
                <span className="text-sm text-gray-600">
                  I confirmed that I uploaded a valid government-issued photo
                  ID.
                </span>
              </label>

              <button
                type="submit"
                disabled={!agreed || loading}
                className={`w-full md:w-80 mx-auto block py-4 rounded-xl font-bold text-white
            ${
              agreed
                ? "bg-linear-to-r from-[#FF9500] to-[#F54900]"
                : "bg-gray-300 cursor-not-allowed"
            }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// Helper Components for clean code

type FormGroupProps = {
  label: string;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
};

const FormGroup = ({
  label,
  placeholder,
  name,
  onChange,
  type = "text",
  required = false,
}: FormGroupProps) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="bg-white rounded-lg border border-gray-100 px-4 py-3 text-sm outline-none
        focus:ring-1 focus:ring-[#F59E0B] placeholder:text-gray-300"
    />
  </div>
);

export default RegistrationForm;
