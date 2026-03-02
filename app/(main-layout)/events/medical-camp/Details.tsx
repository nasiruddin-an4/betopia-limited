import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";

const Details = () => {
  return (
    <section className="py-10 md:py-20 bg-linear-to-r from-[#FFF7ED] to-[#FFFFFF]">
      <Container>
        {/* Left Content */}
        <div className="space-y-6 ">
          <PageSubtitle
            text="Take a step toward a healthier lifestyle!"
            className="text-[#414042] "
          />
          <PageSubtitle
            text=" Surecell Medical Bangladesh, in collaboration with Betopia Group, is organizing a Free Medical Camp & Awareness Program 2026, offering expert health consultations and medical guidance completely free of charge."
            className="text-[#414042] "
          />

          <PageSubtitle
            text="This initiative aims to promote health awareness and provide easy access to qualified medical professionals for everyone."
            className="text-[#414042] "
          />

          {/* Services */}
          <div className="space-y-6 mt-10">
            <h3 className="text-xl xl:text-[30px] font-bold flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2V4"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 2V4"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V9C2 10.5913 2.63214 12.1174 3.75736 13.2426C4.88258 14.3679 6.4087 15 8 15C9.5913 15 11.1174 14.3679 12.2426 13.2426C13.3679 12.1174 14 10.5913 14 9V5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3H11"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 15C8 16.5913 8.63214 18.1174 9.75736 19.2426C10.8826 20.3679 12.4087 21 14 21C15.5913 21 17.1174 20.3679 18.2426 19.2426C19.3679 18.1174 20 16.5913 20 15V12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 12C21.1046 12 22 11.1046 22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10C18 11.1046 18.8954 12 20 12Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Available Services & Specialist Timings
            </h3>

            <div className="space-y-6 ">
              <PageSubtitle
                text="⏰ 10:00 AM – 4:00 PM"
                className="text-[#414042] "
              />

              <ul className="list-disc ml-12 text-base md:text-lg lg:text-2xl space-y-4">
                <li>Dental Care – Oral health screening & hygiene guidance</li>
                <li>
                  Nutrition Consultation – Healthy eating & lifestyle advice
                </li>
              </ul>
              <PageSubtitle
                text="⏰ 10:00 AM – 12:00 PM"
                className="text-[#414042] "
              />
              <ul className="list-disc ml-12 text-base md:text-lg lg:text-2xl">
                <li>
                  Physiotherapy – Pain management, posture correction & mobility
                  support
                </li>
              </ul>
              <PageSubtitle
                text="⏰ 12:00 PM – 4:00 PM"
                className="text-[#414042] "
              />
              <ul className="list-disc ml-12 text-base md:text-lg lg:text-2xl">
                <li>
                  General Medicine – Health check-ups & medical consultation
                </li>
              </ul>
              <PageSubtitle
                text="🎁 Bonus: Every participant will receive a special gift."
                className="text-[#414042] mt-4 mb-8"
              />
            </div>
            <div>
              <h3 className="text-xl xl:text-[30px] font-bold flex items-center gap-2 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 22C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21072 5.46957 2 6 2H14C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H20"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 9H8"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 13H8"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17H8"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Registration
              </h3>
              <PageSubtitle
                text="You can register in two simple ways:"
                className="text-[#414042] mb-4"
              />

              <ul className="list-decimal ml-6 text-base md:text-lg lg:text-2xl text-[#414042] space-y-4">
                <li>
                  On-Spot Registration – Register directly at the venue on the
                  event day
                </li>
                <li>
                  Online Pre-Registration – Message us on our Facebook page
                </li>
              </ul>
            </div>

            {/* Event Details */}
            <div>
              <h3 className="text-xl xl:text-[30px] font-bold flex items-center gap-2 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Event Details
              </h3>

              <ul className="text-base md:text-lg lg:text-2xl text-[#414042] space-y-4 list-disc ml-12">
                <li>Date: 29 January 2026</li>
                <li>Time: 10:00 AM – 4:00 PM</li>
                <li>Venue: Aqua Tower, Level 9</li>
              </ul>
            </div>
            <PageSubtitle
              text="Don’t miss this opportunity to consult with experienced specialists and
        invest in your health. We look forward to welcoming you!"
              className="text-[#414042] "
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Details;
