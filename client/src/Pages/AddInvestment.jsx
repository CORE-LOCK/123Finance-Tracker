import { useState } from "react";

import {
  Plus,
  FileText,
  WalletCards,
  RotateCw,
  CalendarDays,
  Clock3,
  BellRing,
  Mail,
  ArrowRight,
  Info,
} from "lucide-react";
import {Navbar} from '../Components/Navbar'

function AddInvestment() {
  const [investmentName, setInvestmentName] = useState("");
  const [amount, setAmount] = useState("");
  const [premiumFrequency, setPremiumFrequency] = useState("Monthly");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [reminderDaysBefore, setReminderDaysBefore] = useState(2);
  const [email, setEmail] = useState("alex@example.com");

  return (
    <div className="min-h-screen w-full bg-[#f8f9fd] font-sans text-[#1d2535]">

      {/* ================= TOP BAR ================= */}

      <div className=" h-[43px] items-center justify-between border-b border-[#e8eaf0] bg-white px-5">

        {/* Search */}

      <Navbar/>

      </div>


      {/* ================= PAGE CONTENT ================= */}

      <div className="w-full px-7 pb-10 pt-9">

        {/* ================= HEADER ================= */}

        <div className="flex items-center gap-2">

          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#55efb5]">

            <Plus
              size={13}
              strokeWidth={2.5}
              className="text-[#087250]"
            />

          </div>

          <h1 className="text-[22px] font-semibold tracking-[-0.5px]">
            Add New Investment
          </h1>

        </div>


        <p className="mt-2 max-w-[700px] text-[11px] leading-[1.5] text-[#555d6c]">
          Add your investment details and set your premium reminder schedule.
          We'll ensure you never miss a payment.
        </p>


        {/* ================= MAIN ================= */}

        <div className="mt-9 grid w-full grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(300px,0.8fr)]">


          {/* ================= DETAILS CARD ================= */}

          <div className="rounded-[10px] bg-white px-6 py-6 shadow-[0_2px_8px_rgba(30,40,70,0.02)]">

            {/* Header */}

            <div className="flex items-center justify-between border-b border-[#e7e8ed] pb-3">

              <h2 className="text-[15px] font-semibold">
                Details
              </h2>

              <span className="rounded-full bg-[#171d29] px-3 py-1.5 text-[8px] text-white">
                Step 1 of 1
              </span>

            </div>


            {/* Investment Name */}

            <div className="mt-6">

              <label className="mb-1.5 block text-[9px] font-medium text-[#464d5b]">
                Investment Name
              </label>

              <div className="flex h-9 items-center gap-2 rounded-md border border-[#dfe2e9] bg-[#f8f9fd] px-3">

                <FileText
                  size={14}
                  className="text-[#9da3ae]"
                />

                <input
                  type="text"
                  value={investmentName}
                  onChange={(e) => setInvestmentName(e.target.value)}
                  placeholder="e.g. LIC Policy"
                  className="w-full bg-transparent text-[10px] outline-none placeholder:text-[#a4a9b4]"
                />

              </div>

            </div>


            {/* Amount + Frequency */}

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Amount */}

              <div>

                <label className="mb-1.5 block text-[9px] font-medium text-[#464d5b]">
                  Amount (₹)
                </label>

                <div className="flex h-9 items-center gap-2 rounded-md border border-[#dfe2e9] bg-[#f8f9fd] px-3">

                  <WalletCards
                    size={14}
                    className="text-[#9da3ae]"
                  />

                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="5000"
                    className="w-full bg-transparent text-right text-[10px] outline-none placeholder:text-[#a4a9b4]"
                  />

                </div>

              </div>


              {/* Frequency */}

              <div>

                <label className="mb-1.5 block text-[9px] font-medium text-[#464d5b]">
                  Premium Frequency
                </label>

                <div className="relative">

                  <RotateCw
                    size={13}
                    className="absolute left-3 top-[11px] text-[#9299a6]"
                  />

                  <select
                    value={premiumFrequency}
                    onChange={(e) =>
                      setPremiumFrequency(e.target.value)
                    }
                    className="h-9 w-full appearance-none rounded-md border border-[#dfe2e9] bg-[#f8f9fd] pl-8 pr-8 text-[10px] outline-none"
                  >

                    <option value="Monthly">
                      Monthly
                    </option>

                    <option value="Quarterly">
                      Quarterly
                    </option>

                    <option value="Half-yearly">
                      Half-yearly
                    </option>

                    <option value="Yearly">
                      Yearly
                    </option>

                  </select>

                  <span className="pointer-events-none absolute right-3 top-[10px] text-[10px]">
                    ▾
                  </span>

                </div>

              </div>

            </div>


            {/* Start Date + Duration */}

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* Start Date */}

              <div>

                <label className="mb-1.5 block text-[9px] font-medium text-[#464d5b]">
                  Start Date
                </label>

                <div className="flex h-9 items-center gap-2 rounded-md border border-[#dfe2e9] bg-[#f8f9fd] px-3">

                  <CalendarDays
                    size={14}
                    className="text-[#9da3ae]"
                  />

                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-transparent text-[10px] outline-none"
                  />

                </div>

              </div>


              {/* Duration */}

              <div>

                <label className="mb-1.5 block text-[9px] font-medium text-[#464d5b]">
                  Duration (Years)
                </label>

                <div className="flex h-9 items-center gap-2 rounded-md border border-[#dfe2e9] bg-[#f8f9fd] px-3">

                  <Clock3
                    size={14}
                    className="text-[#9da3ae]"
                  />

                  <input
                    type="number"
                    min="1"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="5"
                    className="w-full bg-transparent text-right text-[10px] outline-none placeholder:text-[#a4a9b4]"
                  />

                </div>

              </div>

            </div>


            {/* ================= REMINDER SETTINGS ================= */}

            <div className="mt-6 rounded-lg border border-[#e4e6ec] bg-[#fafbfe] p-3">

              <div className="flex items-center gap-2">

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e9e9ed]">

                  <BellRing
                    size={14}
                    className="text-[#c38b19]"
                  />

                </div>

                <span className="text-[10px] font-medium">
                  Reminder Settings
                </span>

              </div>


              <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">

                {/* Days */}

                <div>

                  <label className="mb-1.5 block text-[9px] text-[#555c69]">
                    Days Before
                  </label>

                  <div className="flex h-9 items-center gap-2 rounded-md border border-[#dfe2e9] bg-white px-3">

                    <Clock3
                      size={13}
                      className="text-[#9da3ae]"
                    />

                    <input
                      type="number"
                      min="0"
                      value={reminderDaysBefore}
                      onChange={(e) =>
                        setReminderDaysBefore(e.target.value)
                      }
                      className="w-full bg-transparent text-right text-[10px] outline-none"
                    />

                  </div>

                </div>


                {/* Email */}

                <div>

                  <label className="mb-1.5 block text-[9px] text-[#555c69]">
                    Email Address
                  </label>

                  <div className="flex h-9 items-center gap-2 rounded-md border border-[#dfe2e9] bg-white px-3">

                    <Mail
                      size={13}
                      className="shrink-0 text-[#9da3ae]"
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-[10px] outline-none"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================= SCHEDULE PREVIEW ================= */}

          <div className="w-full">

            <div className="min-h-[270px] rounded-[10px] bg-gradient-to-br from-[#070b16] via-[#050a13] to-[#06231f] px-4 py-4 text-white shadow-md">

              {/* Header */}

              <div className="flex items-center gap-2 border-b border-white/10 pb-3">

                <CalendarDays
                  size={15}
                  className="text-[#48edb2]"
                />

                <h2 className="text-[15px] font-semibold">
                  Schedule Preview
                </h2>

              </div>


              {/* Timeline */}

              <div className="relative mt-5">

                <div className="absolute left-[6px] top-2 h-[145px] w-px bg-white/20" />


                {/* Next Premium */}

                <div className="relative flex gap-3">

                  <div className="z-10 flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full bg-white">

                    <span className="h-[5px] w-[5px] rounded-full bg-[#070b16]" />

                  </div>

                  <div className="mt-[-2px]">

                    <p className="text-[8px] tracking-[1px] text-[#969da9]">
                      NEXT PREMIUM
                    </p>

                    <p className="mt-1 text-[11px]">
                      15 Oct 2024
                    </p>

                    <p className="mt-1 text-[9px] text-[#9ca2ae]">
                      ₹0
                    </p>

                  </div>

                </div>


                {/* Reminder */}

                <div className="relative mt-6 flex gap-3">

                  <div className="z-10 flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full bg-[#18b77f]">

                    <span className="text-[7px] font-bold text-white">
                      ↕
                    </span>

                  </div>

                  <div className="mt-[-2px]">

                    <p className="text-[8px] tracking-[1px] text-[#969da9]">
                      REMINDER STARTS
                    </p>

                    <p className="mt-1 text-[11px] text-[#55efb7]">
                      13 Oct 2024
                    </p>

                  </div>

                </div>


                {/* End Date */}

                <div className="relative mt-6 flex gap-3">

                  <div className="z-10 flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full bg-[#343943]">

                    <span className="h-[4px] w-[4px] rounded-full bg-[#9196a1]" />

                  </div>

                  <div className="mt-[-2px]">

                    <p className="text-[8px] tracking-[1px] text-[#969da9]">
                      END DATE
                    </p>

                    <p className="mt-1 text-[11px] text-[#d9dbe0]">
                      15 Sep 2029
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* Info */}

            <div className="mt-4 rounded-lg border border-[#dce2f0] bg-[#edf2ff] px-3 py-3">

              <div className="flex gap-2">

                <Info
                  size={14}
                  className="mt-0.5 shrink-0 text-[#444b59]"
                />

                <p className="text-[9px] leading-[1.5] text-[#555d6b]">

                  Reminders will be sent to{" "}

                  <span className="font-medium text-[#303746]">
                    {email || "your email address"}
                  </span>

                  . You can modify notification preferences later in
                  Settings.

                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM BUTTONS ================= */}

        <div className="mt-12 flex items-center justify-end gap-7 border-t border-[#e7e8ee] pt-6">

          <button
            className="cursor-pointer text-[10px] font-medium text-[#151b28] hover:text-[#555d6c]"
          >
            Cancel
          </button>


          <button
            className="
              flex
              h-10
              min-w-[190px]
              cursor-pointer
              items-center
              justify-center
              gap-3
              rounded-md
              bg-[#050914]
              text-[10px]
              font-medium
              text-white
              shadow-sm
              transition
              hover:bg-[#171d29]
            "
          >

            Create Investment

            <ArrowRight size={14} />

          </button>

        </div>

      </div>

    </div>
  );
}

export default AddInvestment;