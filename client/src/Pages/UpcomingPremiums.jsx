import {
  Bell,
  AlertCircle,
  TriangleAlert,
  CalendarDays,
} from "lucide-react";

import {Navbar} from '../Components/Navbar'

function UpcomingPremiums() {
  return (
    <div className="min-h-screen w-full bg-[#f8f9fd] font-sans text-[#1d2535]">

      {/* ================= TOP BAR ================= */}

      <div className="flex h-[43px] items-center justify-between border-b border-[#e8eaf0] bg-white px-5">

        {/* Search */}

        <Navbar/>


        {/* Right side */}

        <div className="flex items-center gap-5">

          <div className="relative cursor-pointer">

            <Bell
              size={17}
              strokeWidth={1.7}
              className="text-[#444b58]"
            />

            <span className="absolute right-[-1px] top-[-1px] h-[5px] w-[5px] rounded-full bg-[#d7192f]" />

          </div>

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Profile"
            className="h-6 w-6 rounded-full object-cover"
          />

        </div>

      </div>


      {/* ================= PAGE CONTENT ================= */}

      <div className="w-full px-4 pb-10 pt-3">

        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between">

          <h1 className="text-[30px] font-semibold tracking-[-1.2px] text-[#171e2d]">
            Upcoming Premiums
          </h1>


          {/* Filters */}

          <div className="flex h-[29px] items-center rounded-full bg-[#e9eefc] p-[2px]">

            <button
              className="
                h-[25px]
                min-w-[43px]
                rounded-full
                bg-[#050914]
                px-3
                text-[9px]
                font-medium
                text-white
                shadow-sm
              "
            >
              All
            </button>

            <button
              className="
                h-[25px]
                min-w-[55px]
                rounded-full
                px-3
                text-[9px]
                text-[#4d5564]
                transition
                hover:bg-white
              "
            >
              Today
            </button>

            <button
              className="
                h-[25px]
                min-w-[75px]
                rounded-full
                px-3
                text-[9px]
                text-[#4d5564]
                transition
                hover:bg-white
              "
            >
              This Week
            </button>

            <button
              className="
                h-[25px]
                min-w-[75px]
                rounded-full
                px-3
                text-[9px]
                text-[#4d5564]
                transition
                hover:bg-white
              "
            >
              This Month
            </button>

          </div>

        </div>


        {/* ================= PREMIUM LIST ================= */}

        <div className="mt-11 flex flex-col gap-4">


          {/* ================= LIC POLICY ================= */}

          <div className="flex min-h-[82px] w-full items-center rounded-[10px] bg-[#f9ebee] px-4">

            {/* Logo */}

            <div className="flex h-[41px] w-[41px] shrink-0 items-center justify-center rounded-[8px] bg-white">

              <span className="text-[8px] font-bold text-[#4c9c91]">
                LIC
              </span>

            </div>


            {/* Investment */}

            <div className="ml-4 w-[170px]">

              <h2 className="text-[16px] font-semibold text-[#242b39]">
                LIC Policy
              </h2>

              <p className="mt-[1px] text-[10px] text-[#59606c]">
                Policy
              </p>

              <p className="text-[10px] text-[#59606c]">
                #987654321
              </p>

            </div>


            {/* Amount */}

            <div className="w-[145px]">

              <p className="text-[8px] font-medium uppercase tracking-[0.8px] text-[#606673]">
                Amount
              </p>

              <p className="mt-1 text-[21px] font-semibold tracking-[-0.5px] text-[#202735]">
                ₹5,000
              </p>

            </div>


            {/* Due Date */}

            <div className="w-[125px]">

              <p className="text-[8px] font-medium uppercase tracking-[0.8px] text-[#606673]">
                Due Date
              </p>

              <p className="mt-1 text-[11px] text-[#2f3643]">
                15 Aug
              </p>

            </div>


            {/* Status */}

            <div className="ml-auto">

              <div className="flex items-center gap-2 rounded-full bg-[#f7dadd] px-3 py-1.5">

                <AlertCircle
                  size={12}
                  strokeWidth={2.5}
                  className="text-[#c8172b]"
                />

                <span className="text-[9px] font-medium text-[#b71c2c]">
                  3 days left
                </span>

              </div>

            </div>

          </div>


          {/* ================= HDFC INSURANCE ================= */}

          <div className="flex min-h-[82px] w-full items-center rounded-[10px] bg-white px-4 shadow-[0_1px_3px_rgba(20,30,50,0.02)]">

            {/* Logo */}

            <div className="flex h-[41px] w-[41px] shrink-0 items-center justify-center rounded-[8px] bg-[#fafbfc]">

              <span className="text-[6px] font-bold text-[#3778a7]">
                HDFC
              </span>

            </div>


            {/* Investment */}

            <div className="ml-4 w-[170px]">

              <h2 className="max-w-[120px] text-[16px] font-semibold leading-[1.25] text-[#242b39]">
                HDFC Insurance
              </h2>

              <p className="mt-1 text-[10px] text-[#59606c]">
                Policy #123456789
              </p>

            </div>


            {/* Amount */}

            <div className="w-[145px]">

              <p className="text-[8px] font-medium uppercase tracking-[0.8px] text-[#606673]">
                Amount
              </p>

              <p className="mt-1 text-[21px] font-semibold tracking-[-0.5px] text-[#202735]">
                ₹12,000
              </p>

            </div>


            {/* Due Date */}

            <div className="w-[125px]">

              <p className="text-[8px] font-medium uppercase tracking-[0.8px] text-[#606673]">
                Due Date
              </p>

              <p className="mt-1 text-[11px] text-[#2f3643]">
                20 Aug
              </p>

            </div>


            {/* Status */}

            <div className="ml-auto">

              <div className="flex items-center gap-2 rounded-full bg-[#eeece8] px-3 py-1.5">

                <TriangleAlert
                  size={12}
                  strokeWidth={2.5}
                  className="text-[#574524]"
                />

                <span className="text-[9px] font-medium text-[#44371f]">
                  8 days left
                </span>

              </div>

            </div>

          </div>


          {/* ================= TATA AIA ================= */}

          <div className="flex min-h-[82px] w-full items-center rounded-[10px] bg-white px-4 shadow-[0_1px_3px_rgba(20,30,50,0.02)]">

            {/* Logo */}

            <div className="flex h-[41px] w-[41px] shrink-0 items-center justify-center rounded-[8px] bg-[#fafbfc]">

              <span className="text-[6px] font-bold text-[#4788ba]">
                TATA AIA
              </span>

            </div>


            {/* Investment */}

            <div className="ml-4 w-[170px]">

              <h2 className="text-[16px] font-semibold text-[#242b39]">
                Tata AIA
              </h2>

              <p className="mt-[1px] text-[10px] text-[#59606c]">
                Policy
              </p>

              <p className="text-[10px] text-[#59606c]">
                #555555555
              </p>

            </div>


            {/* Amount */}

            <div className="w-[145px]">

              <p className="text-[8px] font-medium uppercase tracking-[0.8px] text-[#606673]">
                Amount
              </p>

              <p className="mt-1 text-[21px] font-semibold tracking-[-0.5px] text-[#555c68]">
                ₹15,000
              </p>

            </div>


            {/* Due Date */}

            <div className="w-[125px]">

              <p className="text-[8px] font-medium uppercase tracking-[0.8px] text-[#606673]">
                Due Date
              </p>

              <p className="mt-1 text-[11px] text-[#2f3643]">
                10 Jan 2025
              </p>

            </div>


            {/* Status */}

            <div className="ml-auto">

              <div className="flex items-center gap-2 rounded-full bg-[#e8edfb] px-3 py-1.5">

                <CalendarDays
                  size={12}
                  strokeWidth={2}
                  className="text-[#5b6478]"
                />

                <span className="text-[9px] font-medium text-[#596278]">
                  Upcoming
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UpcomingPremiums;