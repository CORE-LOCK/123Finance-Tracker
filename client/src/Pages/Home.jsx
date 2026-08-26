import {
  Bell,
  Landmark,
  Wallet,
  CalendarClock,
  ChartNoAxesColumnIncreasing,
  Clock3,
  ArrowRight,
} from "lucide-react";
import { useContext } from "react";
import { context } from "../Context/Createcontext";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
};

function Dashboard() {
  const {
    allinvestments,
    upcomingInvestments,
    activestatus,
    upcomingInvDashboard,
    setComp,
  } = useContext(context);

  const allamount = allinvestments.reduce(
    (total, investment) => total + Number(investment.amount),
    0,
  );
  return (
    <div className="min-h-screen w-full bg-[#f8f8fc] text-[#1c2434]">
      <main className="p-[17px]">
        {/* Greeting */}

        <section className="mb-[37px]">
          <h1 className="text-[34px] font-bold tracking-[-1.3px] leading-tight">
            {getGreeting()}, Sonu Sharma
          </h1>

          <p className="mt-2.5 text-[13px] text-[#555d6d]">
            Here's an overview of your investments and upcoming premiums.
          </p>
        </section>

        {/* ================= STATS ================= */}

        <section className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="TOTAL INVESTMENTS"
            value={allinvestments.length}
            icon={<Landmark size={19} />}
          />

          <StatCard
            title="TOTAL INVESTED"
            value={allamount}
            icon={<Wallet size={19} />}
            green
          />

          <StatCard
            title="UPCOMING PREMIUMS"
            value={upcomingInvestments.length}
            icon={<CalendarClock size={19} />}
          />

          <StatCard
            title="ACTIVE INVESTMENTS"
            value={activestatus.length}
            icon={<ChartNoAxesColumnIncreasing size={19} />}
          />
        </section>

        {/* ================= PREMIUM SECTION ================= */}

        <section className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,2fr)_minmax(250px,0.95fr)]">
          {/* Upcoming */}

          <div>
            <h2 className="mb-[17px] text-[18px] font-semibold tracking-[-0.3px]">
              Upcoming Premiums
            </h2>
            {upcomingInvDashboard.length > 0 ? (
              upcomingInvDashboard.map((upinvestment) => {
                const daysLeft = Math.ceil(
                  (new Date(upinvestment.reminderDate) - new Date()) /
                    (1000 * 60 * 60 * 24),
                );
                return (
                  <div
                    className="mt-2 flex flex-col gap-4"
                    key={upinvestment._id}
                  >
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
                          {upinvestment.investmentName}
                        </h2>
                        <p className="text-[10px] pt-1 text-[#59606c]">
                          #987654321
                        </p>
                      </div>

                      {/* Amount */}

                      <div className="w-[145px]">
                        <p className="text-[8px] font-medium uppercase tracking-[0.8px] text-[#606673]">
                          Amount
                        </p>

                        <p className="mt-1 text-[21px] font-semibold tracking-[-0.5px] text-[#202735]">
                          ₹{upinvestment.amount}
                        </p>
                      </div>

                      {/* Due Date */}

                      <div className="w-[125px]">
                        <p className="text-[8px] font-medium uppercase tracking-[0.8px] text-[#606673]">
                          Due Date
                        </p>

                        <p className="mt-1 text-[11px] text-[#2f3643]">
                          {new Date(
                            upinvestment.reminderDate,
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>

                      {/* Status */}

                      <div className="ml-auto">
                        <div className="flex items-center gap-2 rounded-full bg-[#f7dadd] px-3 py-1.5">
                          {/* <AlertCircle
                      size={12}
                      strokeWidth={2.5}
                      className="text-[#c8172b]"
                    /> */}

                          <span className="text-[9px] font-medium text-[#b71c2c]">
                            {daysLeft} Days Left
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="mt-11 flex min-h-[180px] w-full items-center justify-center rounded-[10px] bg-white border border-gray-200">
                <div className="text-center">
                  <p className="text-[16px] font-semibold text-[#242b39]">
                    No Upcoming Premiums
                  </p>

                  <p className="mt-2 text-[11px] text-[#777d89]">
                    You don't have any upcoming premium payments.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Next Premium */}

          {upcomingInvDashboard.length > 0 ?   <div>
            <h2 className="mb-[17px] text-[18px] font-semibold tracking-[-0.3px]">
              Next Premium
            </h2>

            <div className="rounded-lg bg-gradient-to-br from-[#080b17] via-[#070914] to-[#071c20] p-[17px] text-white shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-[9px] tracking-[1px] text-[#d3d5dc]">
                    <h2>{upcomingInvDashboard[0].investmentName}</h2>
                </span>

                <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white/10">
                  <Bell
                    className="cursor-pointer"
                    size={15}
                    onClick={() => {
                      setComp("UpcomingPremiums");
                    }}
                  />
                </div>
              </div>

              <div className="text-[35px] font-bold tracking-[-1.3px]">
               <h2>₹{upcomingInvDashboard[0].amount}</h2>
              </div>

              <div className="mt-0.5 text-[10px] text-[#d0d2d9]">
                Date ( {new Date(
                            upcomingInvDashboard[0].reminderDate,
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })})
              </div>

              {/* Reminder */}

              <div className="mt-[10px] flex items-start gap-2 rounded-md bg-white/10 p-2.5">
                <Clock3 size={16} className="mt-px shrink-0" />

                <span className="text-[10px] leading-[1.35] text-[#d8dae0]">
                  Reminder active pay timely.
                </span>
              </div>

              {/* Button */}

              <button
                onClick={() => {
                  setComp("InvestmentDetails");
                }}
                className="mt-[26px] flex h-[35px] w-full items-center justify-center gap-1.5 rounded-md bg-white text-[10px] font-medium text-[#161b27] transition hover:-translate-y-px"
              >
                View Investment
                <ArrowRight size={15} />
              </button>
            </div>
          </div> : <div>
    <h2 className="mb-[17px] text-[18px] font-semibold tracking-[-0.3px]">
      Next Premium
    </h2>

    <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-[#080b17] via-[#070914] to-[#071c20] p-[17px] text-white shadow-md">
      <div className="text-center">
        <p className="text-[16px] font-semibold">
          No Upcoming Premium
        </p>

        <p className="mt-2 text-[10px] text-gray-400">
          You have no premium due in the next 30 days.
        </p>
      </div>
    </div>
  </div>}

        
        </section>
      </main>
    </div>
  );
}

/* ================= STAT CARD ================= */

function StatCard({ title, value, icon, green = false }) {
  return (
    <div className="min-h-[104px] rounded-[9px] border border-[#ececf2] bg-white p-[18px_16px] shadow-[0_1px_3px_rgba(20,24,40,0.02)]">
      <div className="flex items-start justify-between">
        <span className="max-w-[110px] text-[10px] leading-[1.4] tracking-[0.7px] text-[#414756]">
          {title}
        </span>

        <div className="text-[#7a808b]">{icon}</div>
      </div>

      <div
        className={`mt-[15px] text-[24px] font-semibold tracking-[-0.5px] ${
          green ? "text-[#087c5a]" : "text-[#1c2434]"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

export default Dashboard;
