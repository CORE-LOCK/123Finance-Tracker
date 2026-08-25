import { Plus, ShieldCheck } from "lucide-react";
import { useContext } from "react";
import { context } from "../Context/Createcontext";

function InvestmentDetails() {
  const { setComp, allinvestments } = useContext(context);

  return (
    <div className="min-h-screen w-full bg-[#f8f8fc] font-sans text-[#1d2535]">
      {/* ================= PAGE CONTENT ================= */}

      <div className="px-[18px] pb-10 pt-[29px]">
        {/* ================= TITLE ================= */}

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[32px] font-bold leading-[1.1] tracking-[-1.2px]">
              Your Investments
            </h1>

            <p className="mt-[7px] text-[12px] text-[#555c69]">
              Manage and track all your recurring investments and premium
              schedules.
            </p>
          </div>

          <button
            onClick={() => {
              setComp("AddInvestment");
            }}
            className="
              mt-[12px]
              flex
              h-[37px]
              items-center
              gap-2
              rounded-[6px]
              bg-[#050914]
              px-[17px]
              text-[10px]
              font-medium
              text-white
              shadow-sm
              transition
              hover:bg-[#171b27]
              cursor-pointer
            "
          >
            <Plus size={14} strokeWidth={2} />
            Add Investment
          </button>
        </div>

        {/* <div className="mt-[29px] flex h-[67px] items-center gap-4 rounded-[7px] bg-[#eaf0ff] px-[17px]">

          <div className="flex h-[32px] flex-1 items-center gap-2 rounded-[6px] bg-white px-3">

            <Search
              size={14}
              className="text-[#424957]"
            />

            <input
              type="text"
              placeholder="Search investments..."
              className="w-full bg-transparent text-[10px] outline-none placeholder:text-[#9ca2ae]"
            />

          </div>
          
          <button
            className="
              flex
              h-[32px]
              min-w-[91px]
              cursor-pointer
              items-center
              justify-between
              gap-2
              rounded-[6px]
              bg-white
              px-3
              text-[10px]
              text-[#303746]
            "
          >

            <div className="flex items-center gap-2">

              <SlidersHorizontal
                size={12}
                strokeWidth={1.8}
              />

              <span>
                Status
              </span>

            </div>

            <ChevronDown size={12} />

          </button>

          <button
            className="
              flex
              h-[32px]
              min-w-[113px]
              cursor-pointer
              items-center
              justify-between
              gap-2
              rounded-[6px]
              bg-white
              px-3
              text-[10px]
              text-[#303746]
            "
          >

            <div className="flex items-center gap-2">

              <CalendarDays
                size={12}
                strokeWidth={1.8}
              />

              <span>
                Frequency
              </span>

            </div>

            <ChevronDown size={12} />

          </button>

          <button
            className="
              flex
              h-[32px]
              min-w-[81px]
              cursor-pointer
              items-center
              justify-between
              gap-2
              rounded-[6px]
              bg-white
              px-3
              text-[10px]
              text-[#303746]
            "
          >

            <div className="flex items-center gap-2">

              <SlidersHorizontal
                size={12}
                strokeWidth={1.8}
              />

              <span>
                Sort
              </span>

            </div>

            <ChevronDown size={12} />

          </button>

        </div> */}

        <div className="mt-[28px] grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {/* ================= LIC POLICY ================= */}

          {allinvestments.map((allinvestments) => (
            <div
              key={allinvestments._id}
              className="
              relative
              min-h-[271px]
              overflow-hidden
              rounded-[8px]
              border
              border-[#eeeeF2]
              bg-white
              px-[16px]
              py-[18px]
              shadow-[0_1px_3px_rgba(20,24,40,0.02)]
            "
            >
              {/* Green left border */}

              <span className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#42efb2]" />

              {/* Header */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-[27px] w-[27px] items-center justify-center rounded-full bg-[#e2fff5]">
                    <ShieldCheck size={15} className="text-[#2fdca1]" />
                  </div>

                  <div>
                    <h2 className="text-[16px] font-semibold leading-none">
                      {allinvestments.investmentName}
                    </h2>
                  </div>
                </div>

                <span className="flex items-center gap-1 rounded-full bg-[#e8fff6] px-[7px] py-[4px] text-[8px] font-medium text-[#16b77f]">
                  <span className="h-[4px] w-[4px] rounded-full bg-[#39dca5]" />

                  {allinvestments.status}
                </span>
              </div>

              {/* Premium / Frequency */}

              <div className="mt-[19px] grid grid-cols-2">
                <div>
                  <p className="text-[10px] text-[#777d89]">Premium</p>

                  <p className="mt-[3px] text-[12px] font-semibold">
                    {allinvestments.amount}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-[#777d89]">Frequency</p>

                  <p className="mt-[3px] text-[12px]">
                    {allinvestments.premiumFrequency}
                  </p>
                </div>
              </div>

              {/* Dates */}

              <div className="mt-[17px] rounded-[6px] bg-[#e9efff] px-[11px] py-[10px]">
                <div className="flex justify-between">
                  <span className="text-[10px] text-[#555d6c]">Start Date</span>

                  <strong className="text-[10px]">{new Date(allinvestments.startDate).toLocaleDateString(
                    "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      },
                  )}</strong>
                </div>

                <div className="mt-[10px] flex justify-between">
                  <span className="text-[10px] text-[#555d6c]">Next Due</span>

                  <strong className="text-[10px]"> {new Date(allinvestments.reminderDate).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })}</strong>
                </div>

                <div className="mt-[10px] flex justify-between">
                  <span className="text-[10px] text-[#555d6c]">Maturity</span>

                  <strong className="text-[10px] text-[#687080]">
                    {new Date(allinvestments.endDate).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      },
                    )}
                  </strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InvestmentDetails;
