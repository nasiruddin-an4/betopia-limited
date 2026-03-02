// "use client";
// import React, { useState } from "react";
// import {
//   Calendar,
//   Clock,
//   Globe,
//   Mail,
//   Phone,
//   User,
//   FileText,
//   Check,
// } from "lucide-react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import Link from "next/link";
// import Swal from "sweetalert2";

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// const MeetingScheduler = () => {
//   const [currentMonth, setCurrentMonth] = useState(new Date(2025, 11, 1));
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState<string>("");
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const timeSlots = [
//     "6:00am",
//     "6:30am",
//     "7:00am",
//     "7:30am",
//     "8:00am",
//     "8:30am",
//     "9:00am",
//   ];
//   const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

//   const getDaysInMonth = (date: Date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const days = [];
//     for (let i = 0; i < firstDay; i++) days.push(null);
//     for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
//     return days;
//   };

//   const formatDate = (date: Date) =>
//     date.toLocaleDateString("en-US", {
//       weekday: "long",
//       month: "long",
//       day: "numeric",
//     });

//   const handleDateClick = (d: Date) => {
//     setSelectedDate(d);
//     setSelectedTime("");
//   };
//   const handleTimeClick = (t: string) => setSelectedTime(t);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleScheduleClick = () => {
//     if (
//       !selectedDate ||
//       !selectedTime ||
//       !formData.name ||
//       !formData.email ||
//       !formData.phone
//     ) {
//       alert("Please fill in all required fields");
//       return;
//     }
//      Swal.fire({
//       icon: "success",
//       title: "Meeting Scheduled!",
//       text: `A confirmation email has been sent to ${formData.email}`,
//       confirmButtonColor: "#F66117",
//     });
//   };

 

//   const days = getDaysInMonth(currentMonth);
//   const isFormValid =
//     selectedDate &&
//     selectedTime &&
//     formData.name &&
//     formData.email &&
//     formData.phone;

//   return (
//     <div className="md:px-8 pb-10 bg-linear-to-r from-[#EFF6FF] via-[#EEF2FF] to-[#FAF5FF] px-2">
//       <div className="  h-28 mb-4" />
//       <div className="max-w-[1280px] mx-auto">
//         <div className="bg-linear-to-r from-[#F56218] via-[#F54900] to-[#FBAA02] rounded-2xl p-6 mb-5 shadow-lg">
//           <div className="text-white">
//             <div className="text-sm mb-1 bg-[#FFFFFF33] rounded-[34px] w-[122px] px-4 py-1">
//               BS23 Meeting
//             </div>
//             <h1 className="text-2xl md:text-3xl xl:text-[36px] font-semibold mb-2">30 Minute Meeting</h1>
//             <div className="flex flex-wrap gap-4 text-sm">
//               <div className="flex items-center gap-2 text-lg md:text-xl">
//                 <Clock size={16} /> <span>30 min</span>
//               </div>
//               <div className="flex items-center gap-2 text-lg md:text-xl">
//                 <FileText size={16} />{" "}
//                 <span>Web conferencing details provided upon confirmation</span>
//               </div>
//               <div className="flex items-center gap-2 text-lg md:text-xl">
//                 <Globe size={16} /> <span>Asia/Dhaka (11:54am)</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* MAIN GRID */}
//         <div className="grid gap-6 xl:grid-cols-[845px_410px]">
//           {/* LEFT: Calendar + Times */}
//           <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl p-6 shadow-md">
//             <div>
//               <h2 className="text-2xl md:text-3xl xl:text-[36px] font-semibold mb-2 text-[#1E2939]">
//                 Select a Date & Time
//               </h2>
//               <p className="text-[#6A7282] text-sm md:text-base mb-5">
//                 Choose your preferred date and time slot
//               </p>

//               <div className="mb-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <button
//                     onClick={() =>
//                       setCurrentMonth(
//                         new Date(
//                           currentMonth.getFullYear(),
//                           currentMonth.getMonth() - 1
//                         )
//                       )
//                     }
//                     className="p-2 hover:bg-gray-100 rounded-lg"
//                   >
//                     <IoIosArrowBack />
//                   </button>

//                   <span className="font-semibold text-[#1E2939]">
//                     {currentMonth.toLocaleDateString("en-US", {
//                       month: "long",
//                       year: "numeric",
//                     })}
//                   </span>

//                   <button
//                     onClick={() =>
//                       setCurrentMonth(
//                         new Date(
//                           currentMonth.getFullYear(),
//                           currentMonth.getMonth() + 1
//                         )
//                       )
//                     }
//                     className="p-2 hover:bg-gray-100 rounded-lg"
//                   >
//                     <IoIosArrowForward />
//                   </button>
//                 </div>

//                 <div className="grid grid-cols-7 gap-2 mb-2">
//                   {daysOfWeek.map((day) => (
//                     <div
//                       key={day}
//                       className="text-center text-xs font-semibold text-[#4F39F6] p-2"
//                     >
//                       {day}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="grid grid-cols-7 gap-2">
//                   {days.map((day, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => day && handleDateClick(day)}
//                       disabled={!day}
//                       className={`
//                         p-3 text-center rounded-lg transition-all
//                         ${!day ? "invisible" : ""}
//                         ${
//                           selectedDate?.toDateString() === day?.toDateString()
//                             ? "bg-linear-to-b from-[#F66117] to-[#FBAA02] text-white font-bold"
//                             : "hover:bg-gray-100"
//                         }
//                       `}
//                     >
//                       {day?.getDate()}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* TIME SLOTS */}
//             <div>
//               <h3 className="font-semibold mb-3 md:mt-[22%]">
//                 {selectedDate
//                   ? formatDate(selectedDate)
//                   : "Select a date first"}
//               </h3>

//               {selectedDate ? (
//                 <div className="space-y-2">
//                   {timeSlots.map((time) => (
//                     <button
//                       key={time}
//                       onClick={() => handleTimeClick(time)}
//                       className={`
//                         w-full p-3 rounded-lg text-left transition-all
//                         ${
//                           selectedTime === time
//                             ? "bg-[#F66117] text-white font-semibold"
//                             : "bg-gray-50 hover:bg-gray-100"
//                         }
//                       `}
//                     >
//                       {time}
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-18 text-gray-400">
//                   <div className="w-[48px] mx-auto mb-3">
//                     <svg
//                       width="48"
//                       height="48"
//                       viewBox="0 0 48 48"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <g opacity="0.5">
//                         <path
//                           d="M16 4V12"
//                           stroke="#99A1AF"
//                           strokeWidth="4"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M32 4V12"
//                           stroke="#99A1AF"
//                           strokeWidth="4"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M38 8H10C7.79086 8 6 9.79086 6 12V40C6 42.2091 7.79086 44 10 44H38C40.2091 44 42 42.2091 42 40V12C42 9.79086 40.2091 8 38 8Z"
//                           stroke="#99A1AF"
//                           strokeWidth="4"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M6 20H42"
//                           stroke="#99A1AF"
//                           strokeWidth="4"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </g>
//                     </svg>
//                   </div>
//                   <p>Please select a date to view available times</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* RIGHT: FORM */}
//           <div className="bg-white rounded-2xl p-6 shadow-md">
//             <h2 className="text-xl font-semibold mb-6">Enter Details</h2>

//             {selectedDate && selectedTime && (
//               <div className="bg-linear-to-r from-[#EEF2FF] to-[#FAF5FF] border border-blue-200 rounded-lg p-4 mb-[22px]">
//                 <div className="flex items-center gap-2 text-[#432DD7] mb-1">
//                   <Calendar size={16} />{" "}
//                   <span className="font-semibold">
//                     {formatDate(selectedDate)}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-2 text-[#8200DB]">
//                   <Clock size={16} />{" "}
//                   <span className="font-semibold">{selectedTime}</span>
//                 </div>
//               </div>
//             )}

//             <div className="space-y-2">
//               <div>
//                 <label className="flex items-center gap-2 text-sm font-medium mb-2">
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M12.6693 14V12.6667C12.6693 11.9594 12.3883 11.2811 11.8882 10.781C11.3881 10.281 10.7098 10 10.0026 10H6.0026C5.29536 10 4.61708 10.281 4.11699 10.781C3.61689 11.2811 3.33594 11.9594 3.33594 12.6667V14"
//                       stroke="#4F39F6"
//                       strokeWidth="1.33333"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M8.0026 7.33333C9.47536 7.33333 10.6693 6.13943 10.6693 4.66667C10.6693 3.19391 9.47536 2 8.0026 2C6.52984 2 5.33594 3.19391 5.33594 4.66667C5.33594 6.13943 6.52984 7.33333 8.0026 7.33333Z"
//                       stroke="#4F39F6"
//                       strokeWidth="1.33333"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="John Doe"
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F66117]"
//                 />
//               </div>

//               <div>
//                 <label className="flex items-center gap-2 text-sm font-medium mb-2">
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M13.3359 2.66797H2.66927C1.93289 2.66797 1.33594 3.26492 1.33594 4.0013V12.0013C1.33594 12.7377 1.93289 13.3346 2.66927 13.3346H13.3359C14.0723 13.3346 14.6693 12.7377 14.6693 12.0013V4.0013C14.6693 3.26492 14.0723 2.66797 13.3359 2.66797Z"
//                       stroke="#4F39F6"
//                       strokeWidth="1.33333"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M14.6693 4.66797L8.68927 8.46797C8.48345 8.59692 8.24548 8.66531 8.0026 8.66531C7.75973 8.66531 7.52176 8.59692 7.31594 8.46797L1.33594 4.66797"
//                       stroke="#4F39F6"
//                       strokeWidth="1.33333"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="john@example.com"
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F66117]"
//                 />
//               </div>

//               <div>
//                 <label className="flex items-center gap-2 text-sm font-medium mb-2">
//                   <svg
//                     width="15"
//                     height="15"
//                     viewBox="0 0 15 15"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M13.9228 10.6147V12.6147C13.9236 12.8004 13.8855 12.9841 13.8111 13.1543C13.7368 13.3244 13.6277 13.4771 13.4909 13.6026C13.354 13.7281 13.1925 13.8237 13.0166 13.8832C12.8408 13.9427 12.6544 13.9647 12.4695 13.948C10.418 13.7251 8.44747 13.0241 6.71614 11.9014C5.10536 10.8778 3.7397 9.51215 2.71614 7.90137C1.58946 6.16217 0.888302 4.18203 0.669474 2.12137C0.652814 1.93701 0.674724 1.75121 0.733807 1.57578C0.792891 1.40036 0.887854 1.23916 1.01265 1.10245C1.13745 0.965735 1.28934 0.856506 1.45867 0.781715C1.62799 0.706923 1.81103 0.668208 1.99614 0.668033H3.99614C4.31968 0.664849 4.63334 0.779419 4.87865 0.990389C5.12396 1.20136 5.28419 1.49433 5.32947 1.8147C5.41389 2.45474 5.57044 3.08318 5.79614 3.68803C5.88584 3.92665 5.90525 4.18598 5.85208 4.43529C5.79891 4.6846 5.67538 4.91344 5.49614 5.0947L4.64947 5.94137C5.59851 7.6104 6.98044 8.99233 8.64947 9.94137L9.49614 9.0947C9.6774 8.91546 9.90624 8.79193 10.1556 8.73876C10.4049 8.68559 10.6642 8.705 10.9028 8.7947C11.5077 9.0204 12.1361 9.17695 12.7761 9.26137C13.1 9.30705 13.3957 9.47017 13.6072 9.7197C13.8186 9.96922 13.9309 10.2878 13.9228 10.6147Z"
//                       stroke="#4F39F6"
//                       strokeWidth="1.33333"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   Phone *
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   placeholder="+1 (555) 000-0000"
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F66117]"
//                 />
//               </div>

//               <div>
//                 <label className="flex items-center gap-2 text-sm font-medium mb-2">
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z"
//                       stroke="#4F39F6"
//                       strokeWidth="1.33333"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   Additional message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows={2}
//                   placeholder="Please share anything that will help prepare for our meeting..."
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F66117] "
//                 />
//               </div>

//         <button
//   type="button"
//   onClick={handleScheduleClick}
//   disabled={!isFormValid}
//   className={`
//     w-full p-4 rounded-lg font-semibold
//     ${
//       isFormValid
//         ? "bg-linear-to-r from-[#F56116] to-[#FBA702] hover:bg-orange-600 text-white"
//         : "bg-[#E5E7EB] text-[#99A1AF] cursor-not-allowed"
//     }
//   `}
// >
//   Schedule Event
// </button>


//               <p className="text-xs text-gray-600 text-center">
//                 By proceeding, you confirm that you have read and agree to
//               </p>
//               <p className="text-xs text-gray-600 text-center">
//                <Link href="/terms-conditions" className=" text-[14px] text-[#4F39F6] "> Terms of Use </Link> and {" "}
//                <Link
//           href="/cookie-policy"
//           className=" text-[14px] text-[#4F39F6] "
//         >
//           Cookie policy
//         </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
 
 
//     </div>
//   );
// };

// export default MeetingScheduler;




"use client";
import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  Globe,
  FileText,
} from "lucide-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Swal from "sweetalert2";

interface Slot {
  start_local: string;
  end_local: string;
  start_utc: string;
  end_utc: string;
  is_booked: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const MeetingScheduler = () => {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  
  // State Management
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2, 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableSlots, setAvailableSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Inside your component
const [timezone, setTimezone] = useState<string>(() => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
});
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Automatically detect timezone on mount
useEffect(() => {
  if (selectedDate) {
    fetchSlots(selectedDate);
  }
  // Remove setTimezone from here to prevent infinite loops
}, [selectedDate, timezone]);

// HELPER: Extract "09:00" from "2026-01-21 09:00"
  // Converts "2026-01-21 14:30" to "2:30 PM"
  const formatTimeTo12Hour = (dateTimeStr: string) => {
    if (!dateTimeStr) return "";
    
    // 1. Get the time part "14:30"
    const timePart = dateTimeStr.split(" ")[1]; 
    let [hours, minutes] = timePart.split(":").map(Number);
    
    // 2. Determine AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";
    
    // 3. Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  };

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // --- DATE & TIME CONSTRAINTS ---
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isPastDate = (date: Date) => date <= today;

  // Checks if a slot is within 1 hour of the current actual time
  const isSlotTooSoon = (slotStartUtc: string) => {
    const slotTime = new Date(slotStartUtc);
    const oneHourFromNow = new Date();
    oneHourFromNow.setHours(oneHourFromNow.getHours() + 1);
    return slotTime < oneHourFromNow;
  };

  // --- AUTH LOGIC ---
  const getAuthToken = async () => {
    const existingToken = localStorage.getItem("auth_token");
    if (existingToken) return existingToken;

    try {
      const res = await fetch(`${API_BASE}/v1/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "superAdmin@gmail.com",
          password: "password",
        }),
      });
      const data = await res.json();
      const token = data.token || data.access_token || data.data?.token;
      
      if (token) {
        localStorage.setItem("auth_token", token);
        return token;
      }
      return null;
    } catch (error) {
      console.error("Login failed", error);
      return null;
    }
  };

  // --- API ACTIONS ---
  const fetchSlots = async (date: Date) => {
    setLoading(true);
    const token = await getAuthToken();
    
    if (!token) {
      Swal.fire("Error", "Authentication failed.", "error");
      setLoading(false);
      return;
    }

    // TIMEZONE FIX: Manual formatting to avoid ISOString shifting to previous day
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const dateStr = `${yyyy}-${mm}-${dd}`;

    try {
      const response = await fetch(`${API_BASE}/v1/meeting-schedule/check-schedule/${dateStr}?timezone=${timezone}`, {
        method: "GET",
        headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        cache: "no-store",
      });

      // Handle expired tokens automatically
      if (response.status === 401) {
        localStorage.removeItem("auth_token");
        return fetchSlots(date); // Retry once after clearing stale token
      }
      const data = await response.json();
      setAvailableSlots(data.slots || []);
    } catch (error) {
      console.error("Error fetching slots:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScheduleClick = async () => {
    if (!selectedSlot) return;
    setLoading(true);
    const token = await getAuthToken();

    const payload = {
      user_id: 1,
      availability_id: 5,
      visitor: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        timezone: timezone,
      },
      start: selectedSlot.start_local,
      end: selectedSlot.end_local,
      message: formData.message
    };

    try {
      const response = await fetch(`${API_BASE}/v1/meeting-schedule/book-schedule`, {
        method: "POST",
        headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Meeting Scheduled!",
          text: `A confirmation email has been sent to ${formData.email}`,
          confirmButtonColor: "#F66117",
        });
        // --- RESET FORM AFTER SUCCESS ---
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setSelectedDate(null);
        setSelectedSlot(null);
        setAvailableSlots([]);
      } else {
        throw new Error("Booking failed");
      }
    } catch (error: any) {
      Swal.fire("Error", "Failed to book meeting.", "error");
    } finally {
      setLoading(false);
    }
  };

  // --- HELPERS ---
  const handleDateClick = (d: Date) => {
    if (isPastDate(d)) return; // Prevent clicking past dates
    setSelectedDate(d);
    setSelectedSlot(null);
    fetchSlots(d);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
    return days;
  };

  const days = getDaysInMonth(currentMonth);
  const isFormValid = formData.name && formData.email && formData.phone && selectedSlot;
  const formatDateHeader = (date: Date) => date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  const isCurrentMonth = 
  currentMonth.getMonth() === new Date().getMonth() && 
  currentMonth.getFullYear() === new Date().getFullYear();

  return (
    <div className="md:px-8 pb-10 bg-linear-to-r from-[#EFF6FF] via-[#EEF2FF] to-[#FAF5FF] px-2 min-h-screen">
      <div className="h-28 mb-4" />
      <div className="max-w-[1280px] mx-auto">
        
        {/* HEADER SECTION */}
        <div className="bg-linear-to-r from-[#F56218] via-[#F54900] to-[#FBAA02] rounded-2xl p-6 mb-5 shadow-lg text-white">
          <div className="text-sm mb-1 bg-[#FFFFFF33] rounded-[34px] w-[170px] px-2 py-1 text-center">
            Betopia Meeting
          </div>
          <h1 className="text-2xl md:text-3xl xl:text-[36px] font-semibold mb-2">30 Minute Meeting</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-lg md:text-xl">
              <Clock size={16} /> <span>30 min</span>
            </div>
            <div className="flex items-center gap-2 text-lg md:text-xl">
              <FileText size={16} /> <span>Web conferencing details provided upon confirmation</span>
            </div>
            <div className="flex items-center gap-2 text-lg md:text-xl">
              <Globe size={16} /> <span>{timezone.replace("_", " ")}</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[845px_410px]">
          {/* LEFT: CALENDAR + TIME SLOTS */}
          <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl p-6 shadow-md">
            <div>
              <h2 className="text-2xl md:text-3xl xl:text-[36px] font-semibold mb-2 text-[#1E2939]">
                Select a Date & Time
              </h2>
              <p className="text-[#6A7282] text-sm md:text-base mb-5">
                Choose your preferred date and time slot
              </p>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  {/* <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="p-2 hover:bg-gray-100 rounded-lg">
                    <IoIosArrowBack />
                  </button> */}
                  <button
                    onClick={() => {
                      if (!isCurrentMonth) {
                        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
                      }
                    }}
                    disabled={isCurrentMonth}
                    className={`p-2 rounded-lg transition-colors ${
                      isCurrentMonth 
                        ? "text-gray-300 cursor-not-allowed" 
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <IoIosArrowBack />
                  </button>
                  <span className="font-semibold text-[#1E2939]">
                    {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </span>
                  <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="p-2 hover:bg-gray-100 rounded-lg">
                    <IoIosArrowForward />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-2">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="text-center text-xs font-semibold text-[#4F39F6] p-2">{day}</div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {days.map((day, idx) => {
                    const isPast = day ? isPastDate(day) : false;
                    return (
                      <button
                        key={idx}
                        disabled={!day || isPast}
                        onClick={() => day && handleDateClick(day)}
                        className={`p-3 text-center rounded-lg transition-all ${!day ? "invisible" : ""} ${
                          selectedDate?.toDateString() === day?.toDateString()
                            ? "bg-linear-to-b from-[#F66117] to-[#FBAA02] text-white font-bold"
                            : isPast ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100"
                        }`}
                      >
                        {day?.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* TIME SLOTS PANEL */}
            <div className=" md:pl-6">
              <h3 className="font-semibold mb-3 md:mt-[22%]">
                {selectedDate ? formatDateHeader(selectedDate) : "Select a date first"}
              </h3>

              {loading ? (
                <div className="animate-pulse space-y-2">
                   {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-12 bg-gray-100 rounded-lg w-full" />)}
                </div>
              ) : selectedDate ? (
                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                  {availableSlots.map((slot, i) => {
                    const isTooSoon = isSlotTooSoon(slot.start_utc);
                    const isDisabled = slot.is_booked || isTooSoon;
                    return (
                      <button
                        key={i}
                        disabled={isDisabled}
                        onClick={() => setSelectedSlot(slot)}
                        className={`w-full p-3 rounded-lg text-left transition-all ${
                          selectedSlot === slot 
                            ? "bg-[#F66117] text-white font-semibold" 
                            : isDisabled ? "bg-gray-50 text-gray-300 cursor-not-allowed" : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        {formatTimeTo12Hour(slot.start_local)} - {formatTimeTo12Hour(slot.end_local)}
                        {isTooSoon && " (Too early)"}
                      </button>
                    );
                  })}
                  {availableSlots.length === 0 && <p className="text-gray-400 text-center py-10">No slots available for this date.</p>}
                </div>
              ) : (
                <div className="text-center py-20 text-gray-400">
                   <div className="w-[48px] mx-auto mb-3 opacity-50"><Calendar size={48} /></div>
                  <p>Please select a date to view available times</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: FORM DETAILS */}
          <div className="bg-white rounded-2xl p-6 shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-6">Enter Details</h2>

            {selectedDate && selectedSlot && (
              <div className="bg-linear-to-r from-[#EEF2FF] to-[#FAF5FF] border border-blue-200 rounded-lg p-4 mb-[22px]">
                <div className="flex items-center gap-2 text-[#432DD7] mb-1">
                  <Calendar size={16} /> <span className="font-semibold">{formatDateHeader(selectedDate)}</span>
                </div>
                <div className="flex items-center gap-2 text-[#8200DB]">
                  {/* <Clock size={16} /> <span className="font-semibold">{selectedSlot.start_local}</span> */}
                  <Clock size={16} /> <span className="font-semibold">{formatTimeTo12Hour(selectedSlot.start_local)} - {formatTimeTo12Hour(selectedSlot.end_local)}</span>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6693 14V12.6667C12.6693 11.9594 12.3883 11.2811 11.8882 10.781C11.3881 10.281 10.7098 10 10.0026 10H6.0026C5.29536 10 4.61708 10.281 4.11699 10.781C3.61689 11.2811 3.33594 11.9594 3.33594 12.6667V14"
                    stroke="#4F39F6"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.0026 7.33333C9.47536 7.33333 10.6693 6.13943 10.6693 4.66667C10.6693 3.19391 9.47536 2 8.0026 2C6.52984 2 5.33594 3.19391 5.33594 4.66667C5.33594 6.13943 6.52984 7.33333 8.0026 7.33333Z"
                    stroke="#4F39F6"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Name *
              </label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F66117]" />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                   <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3359 2.66797H2.66927C1.93289 2.66797 1.33594 3.26492 1.33594 4.0013V12.0013C1.33594 12.7377 1.93289 13.3346 2.66927 13.3346H13.3359C14.0723 13.3346 14.6693 12.7377 14.6693 12.0013V4.0013C14.6693 3.26492 14.0723 2.66797 13.3359 2.66797Z"
                      stroke="#4F39F6"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6693 4.66797L8.68927 8.46797C8.48345 8.59692 8.24548 8.66531 8.0026 8.66531C7.75973 8.66531 7.52176 8.59692 7.31594 8.46797L1.33594 4.66797"
                      stroke="#4F39F6"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Email *
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F66117]" />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9228 10.6147V12.6147C13.9236 12.8004 13.8855 12.9841 13.8111 13.1543C13.7368 13.3244 13.6277 13.4771 13.4909 13.6026C13.354 13.7281 13.1925 13.8237 13.0166 13.8832C12.8408 13.9427 12.6544 13.9647 12.4695 13.948C10.418 13.7251 8.44747 13.0241 6.71614 11.9014C5.10536 10.8778 3.7397 9.51215 2.71614 7.90137C1.58946 6.16217 0.888302 4.18203 0.669474 2.12137C0.652814 1.93701 0.674724 1.75121 0.733807 1.57578C0.792891 1.40036 0.887854 1.23916 1.01265 1.10245C1.13745 0.965735 1.28934 0.856506 1.45867 0.781715C1.62799 0.706923 1.81103 0.668208 1.99614 0.668033H3.99614C4.31968 0.664849 4.63334 0.779419 4.87865 0.990389C5.12396 1.20136 5.28419 1.49433 5.32947 1.8147C5.41389 2.45474 5.57044 3.08318 5.79614 3.68803C5.88584 3.92665 5.90525 4.18598 5.85208 4.43529C5.79891 4.6846 5.67538 4.91344 5.49614 5.0947L4.64947 5.94137C5.59851 7.6104 6.98044 8.99233 8.64947 9.94137L9.49614 9.0947C9.6774 8.91546 9.90624 8.79193 10.1556 8.73876C10.4049 8.68559 10.6642 8.705 10.9028 8.7947C11.5077 9.0204 12.1361 9.17695 12.7761 9.26137C13.1 9.30705 13.3957 9.47017 13.6072 9.7197C13.8186 9.96922 13.9309 10.2878 13.9228 10.6147Z"
                      stroke="#4F39F6"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Phone *
                </label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 000-0000" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F66117]" />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z"
                      stroke="#4F39F6"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Additional Notes
                </label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={2} placeholder="Please share anything that will help prepare for our meeting..." className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F66117]" />
              </div>

              <button
                type="button"
                onClick={handleScheduleClick}
                disabled={!isFormValid || loading}
                className={`w-full p-4 rounded-lg font-semibold transition-all ${
                  isFormValid ? "bg-linear-to-r from-[#F56116] to-[#FBA702] text-white hover:opacity-90" : "bg-[#E5E7EB] text-[#99A1AF] cursor-not-allowed"
                }`}
              >
                {loading ? "Processing..." : "Schedule Event"}
              </button>

              <p className="text-xs text-gray-600 text-center">
                By proceeding, you confirm that you have read and agree to
              </p>
               <p className="text-xs text-gray-600 text-center">
                <Link href="/terms-conditions" className=" text-[14px] text-[#4F39F6] "> Terms of Use </Link> and {" "}
                <Link
                    href="/cookie-policy"
                    className=" text-[14px] text-[#4F39F6] "         >
                    Cookie policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingScheduler;