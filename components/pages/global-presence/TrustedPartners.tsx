/* eslint-disable @next/next/no-img-element */
import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";

export default function TrustedPartners() {
  const partners = [
    {
      img: "/global/zahirul.png",
      name: "Zahirul Bhuiyan",
      role: "CEO",
      address: "3651 Peachtree PKWY STE.E 116,Suwanee, GA 30024, USA",
      phone: "+1 (404) 936-3567",
      company: "ZHB Solutions LLC",
    },
    {
      img: "/global/ronald.png",
      name: "Ronald Vergara",
      role: "CMO",
      address: "Angeles, Philippines",
      phone: "+1 (312) 877-3570 (WA)",
      company: "Beyond AI",
    },
    {
      img: "/global/nehir.png",
      name: "Nehir Can Buyukyazi",
      role: "CEO",
      address: "Donnersbergring 45, 64295 Darmstadt, Germany",
      phone: "+49 171 5661073",
      company: "TasteHub",
    },
  ];

  return (
    <section className="bg-[#F0F0F0] py-10 lg:py-20">
      <Container>
        {/* Heading */}
        <div className="space-y-3 text-center pb-10 lg:pb-16">
          <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold">
            <span className="text-[#FF9500]">Our Trusted</span> Partners
          </h2>
          <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-4  mb-5" />
          <PageSubtitle
            text="A network of international partners powering technology excellence
            across regions."
            className="text-[#364153] md:w-[60%] mx-auto"
          />
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 justify-center gap-6">
          {partners.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 md:flex items-center gap-4 shadow-md hover:shadow-xl transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="lg:w-[205px] w-full md:w-[120px] h-[254px] mb-6 md:mb-0 md:object-contain rounded-lg"
              />

              <div className="lg:space-y-2 self-center">
                <h3 className=" md:text-2xl xl:text-4xl font-semibold">
                  {p.name}
                </h3>
                <p>{p.role}</p>

                {/* <div className="lg:mt-3">
                  <p className="font-semibold md:text-xl lg:text-2xl">
                    Address
                  </p>
                  <p className="text-[#414042] whitespace-pre-line md:text-lg md:w-[75%]">
                    {p.address}
                  </p>
                </div> */}

                {/* <div className="lg:mt-3">
                  <p className="font-semibold  md:text-2xl">Contact</p>
                  <p className="text-[#414042]">{p.phone}</p>
                </div> */}
                <div className="lg:mt-3">
                  <p className="font-semibold  md:text-xl">Company</p>
                  <p className="text-[#414042]">{p.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
