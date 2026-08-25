import { AlertCircle } from "lucide-react";
import { useContext } from "react";
import { context } from "../Context/Createcontext";

function UpcomingPremiums() {
  const { upcomingInvestments, filterdate, setFilterdate } =
    useContext(context);
  return (
    <div className="min-h-screen w-full bg-[#f8f9fd] font-sans text-[#1d2535]">
      <div className="w-full px-4 pb-10 pt-3">
        <div className="flex items-center justify-between">
          <h1 className="text-[30px] font-bold tracking-[-1.2px] text-[#171e2d]">
            Upcoming Premiums
          </h1>

          <div className="flex h-[29px] items-center rounded-full bg-[#e9eefc] p-[2px]">
            <button
              onClick={() => setFilterdate("all")}
              className={`h-[25px] min-w-[55px] rounded-full px-3 text-[9px] transition ${
                filterdate === "all"
                  ? "bg-[#050914] font-medium text-white shadow-sm"
                  : "text-[#4d5564] hover:bg-white"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilterdate("today")}
              className={`h-[25px] min-w-[55px] rounded-full px-3 text-[9px] transition ${
                filterdate === "today"
                  ? "bg-[#050914] font-medium text-white shadow-sm"
                  : "text-[#4d5564] hover:bg-white"
              }`}
            >
              Today
            </button>

            <button
              onClick={() => setFilterdate("week")}
              className={`h-[25px] min-w-[55px] rounded-full px-3 text-[9px] transition ${
                filterdate === "week"
                  ? "bg-[#050914] font-medium text-white shadow-sm"
                  : "text-[#4d5564] hover:bg-white"
              }`}
            >
              This Week
            </button>

            <button
              onClick={() => setFilterdate("month")}
              className={`h-[25px] min-w-[55px] rounded-full px-3 text-[9px] transition ${
                filterdate === "month"
                  ? "bg-[#050914] font-medium text-white shadow-sm"
                  : "text-[#4d5564] hover:bg-white"
              }`}
            >
              This Month
            </button>
          </div>
        </div>
        <p className="mt-[7px] text-[12px] text-[#555c69]">
          Manage and track all your recurring investments and premium schedules.
        </p>
{upcomingInvestments.length > 0 ? (
        upcomingInvestments.map((investment) => {
          const daysLeft = Math.ceil(
            (new Date(investment.reminderDate) - new Date()) /
              (1000 * 60 * 60 * 24),
          );
          return (
            <div className="mt-2 flex flex-col gap-4" key={investment._id}>
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
                    {investment.investmentName}
                  </h2>
                  <p className="text-[10px] pt-1 text-[#59606c]">#987654321</p>
                </div>

                {/* Amount */}

                <div className="w-[145px]">
                  <p className="text-[8px] font-medium uppercase tracking-[0.8px] text-[#606673]">
                    Amount
                  </p>

                  <p className="mt-1 text-[21px] font-semibold tracking-[-0.5px] text-[#202735]">
                    ₹{investment.amount}
                  </p>
                </div>

                {/* Due Date */}

                <div className="w-[125px]">
                  <p className="text-[8px] font-medium uppercase tracking-[0.8px] text-[#606673]">
                    Due Date
                  </p>

                  <p className="mt-1 text-[11px] text-[#2f3643]">
                    {new Date(investment.reminderDate).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      },
                    )}
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
                      {daysLeft} Days Left
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })
) : (<div className="mt-11 flex min-h-[180px] w-full items-center justify-center rounded-[10px] bg-white border border-gray-200">
    <div className="text-center">
      <p className="text-[16px] font-semibold text-[#242b39]">
        No Upcoming Premiums
      </p>

      <p className="mt-2 text-[11px] text-[#777d89]">
        You don't have any upcoming premium payments.
      </p>
    </div>
  </div>)}
  
      </div>
    </div>
  );
}

export default UpcomingPremiums;
