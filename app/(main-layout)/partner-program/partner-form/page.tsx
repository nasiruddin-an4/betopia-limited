/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const RegistrationForm = () => {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    whatsapp: "",
    country: "",
    city: "",
    partnership_details: "",
    area: "",
    company_name: "",
    id_confirmed: true,
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!agreed) return;

    const payload = {
      ...formData,
    };

    console.log(payload);

    try {
      setLoading(true);

      // const res = await fetch(
      //   "https://partners.betopialimited.com/api/partner/onboard",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(payload),
      //   },
      // );

      // const data = await res.json();

      // if (!res.ok) {
      //   throw new Error(data?.message || "Submission failed");
      // }

      console.log(payload);
      // console.log("Form Submission Successful! ✅", data);

      Swal.fire({
        title: "Success",
        text: "Thank you, One of our partner success manager will contact you within 24 hours.",
        icon: "success",
        confirmButtonColor: "#F54900",
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
      {/* <div className="relative w-full h-[450px] lg:h-[800px] 2xl:h-[900px]   overflow-hidden">
        <Image
          alt="media"
          className="absolute top-0 left-0 w-full h-[450px] lg:h-[800px] 2xl:h-[900px]  object-cover"
          src="/partner/co-branded/hero.png"
          width={1660}
          height={900}
        />
 
 
        <div className="relative z-10 flex flex-col mt-10 lg:-mt-10  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-[1600px] mx-auto w-full text-center">
            <h1
              className="font-bold text-white 
          text-3xl md:text-4xl lg:text-[64px]  "
            >
              Partner with <span className="text-[#FF9500]">Betopia </span>
            </h1>

            <p
              className={`text-lg md:text-xl xl:text-2xl mt-4 md:mt-7  text-[#CAD5E2]  mx-auto `}
            >
              Leverage Betopia’s enterprise technology under our trusted brand
              while <br /> earning maximum revenue on every project.
            </p>
           
          </div>
        </div>
      </div> */}

      {/* <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center"> 
          <h2 className="text-3xl md:text-[52px] font-bold text-[#1A1A1A] mb-6">
            Why Partner with <span className="text-[#F97316]">Betopia</span>
          </h2>
 
          <p className="text-[#6B7280] text-lg md:text-xl leading-relaxed font-normal max-w-4xl mx-auto">
            Betopia helps businesses grow by turning challenges into
            opportunities. We provide smart Cloud, AI, and Cybersecurity
            solutions that fit your exact needs. In a world that's always
            changing, we make sure you're not just keeping up, you're staying
            ahead. Every solution we create is made by experts and built around
            your goals, never copied from a template.
          </p>
        </div>
      </section> */}

      <div className=" mt-16 xl:mt-20 bg-linear-to-br from-[#FFF5F0] via-[#FDEEE5] to-[#FCE3D4] p-8 lg:p-12 font-sans text-[#000000]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 xl:mb-14 text-center leading-8 md:leading-10 xl:leading-16">
            Join Our <span className="text-[#F59E0B]">Partner Program </span> &
            Unlock New Opportunities
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-10">
            {/* Your Details */}
            <section className="space-y-3 lg:space-y-6">
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
                  required
                  label="WhatsApp Number"
                  name="whatsapp"
                  placeholder="+971 50 000 0000"
                  onChange={handleChange}
                />
                <FormGroup
                  required
                  label="Company Name"
                  name="company_name"
                  placeholder="Enter Company Name"
                  onChange={handleChange}
                />
                <FormGroup
                  required
                  label="Partnership Details"
                  name="partnership_details"
                  placeholder="Enter Partnership Details"
                  onChange={handleChange}
                />
              </div>
            </section>

            {/* Address */}
            <section className="space-y-3 lg:space-y-6">
              <h3 className="font-bold text-xl">Your Address</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormGroup
                  required
                  label="Country"
                  name="country"
                  placeholder="Country"
                  onChange={handleChange}
                />
                <FormGroup
                  required
                  label="City"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                />
                <FormGroup
                  required
                  label="Area"
                  name="area"
                  placeholder="Area"
                  onChange={handleChange}
                />

                {/* <FormGroup
                required
label="State"
                  name="state"
                  placeholder="State"
                  onChange={handleChange}
                />
                <FormGroup
                required
                  label="ZIP Code"
                  name="zip"
                  placeholder="ZIP Code"
                  onChange={handleChange}
                /> */}
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              </div> */}
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
                  I agree to the Partner Program terms and consent to being
                  contacted regarding this partnership.
                </span>
                {/* <span className="text-sm text-gray-600">
                  I confirmed that I uploaded a valid government-issued photo
                  ID.
                </span> */}
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
  <div className="flex flex-col gap-1 xl:gap-2">
    <label className="text-sm font-medium">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="bg-white rounded-lg border border-gray-100 px-4 py-2 xl:py-3 text-sm outline-none
        focus:ring-1 focus:ring-[#F59E0B] placeholder:text-gray-300"
    />
  </div>
);

export default RegistrationForm;
