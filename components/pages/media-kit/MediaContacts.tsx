"use client";

import { Mail, Phone } from "lucide-react";

const contacts = [
  {
    region: "Dhaka",
    items: [ 
      { type: "email", value: "media@betopialimited.com" },
      { type: "phone", value: "+8801332840871" },
    ],
  },
  {
    region: "USA ",
    items: [
      { type: "email", value: "media@betopialimited.com" },
      { type: "phone", value: "+1 (404) 936-3567" },
    ],
  },
  {
    region: "UAE",
    items: [
      { type: "email", value: "media@betopialimited.com" },
      { type: "phone", value: "+971524157275" },
    ],
  },
  {
    region: "Philippines",
    items: [
      { type: "email", value: "media@betopialimited.com" },
      { type: "phone", value: "+1 (312) 877-3570 (WA)" },
    ],
  },
];

export default function MediaContacts() {
  return (
    <section className="max-w-[1675px] w-11/12 mx-auto   py-14 space-y-10">
      <h2 className="text-3xl md:text-4xl xl:text-[52px] font-semibold ">
        Betopia media contacts
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {contacts.map((block) => (
          <div key={block.region} className="space-y-4">
            <h3 className="text-3xl md:text-[36px]  text-[#FF9500]">
              {block.region}
            </h3>

            <ul className="space-y-3">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  {item.type === "email" ? (
                    <Mail className="text-[#FF9500]" />
                  ) : (
                    <Phone className="text-[#FF9500]" />
                  )}

                  <a
                    href={
                      item.type === "email"
                        ? `mailto:${item.value}`
                        : `tel:${item.value.replace(/\s+/g, "")}`
                    }
                    className="underline hover:text-[#FF9500] text-lg md:text-2xl"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
