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


const upcomingPremiums = [
  {
    name: "LIC Policy",
    amount: "₹5,000",
    frequency: "Monthly",
    dueDate: "15 Aug",
    reminderDate: "13 Aug",
    daysRemaining: "3 days remaining",
    upcoming: true,
  },
  {
    name: "HDFC Insurance",
    amount: "₹12,000",
    frequency: "Quarterly",
    dueDate: "20 Sep",
    reminderDate: "18 Sep",
    daysRemaining: "39 days remaining",
    upcoming: false,
  },
];

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
  const {allinvestments} = useContext(context);

  const allamount = allinvestments.reduce((total,investment)=>total + Number(investment.amount),0);
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
            value="3"
            icon={<CalendarClock size={19} />}
          />

          <StatCard
            title="ACTIVE INVESTMENTS"
            value="6"
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

            <div className="flex flex-col gap-3">

              {upcomingPremiums.map(
                (premium, index) => (
                  <PremiumItem
                    key={index}
                    premium={premium}
                  />
                )
              )}

            </div>

          </div>


          {/* Next Premium */}

          <div>

            <h2 className="mb-[17px] text-[18px] font-semibold tracking-[-0.3px]">
              Next Premium
            </h2>


            <div className="min-h-[280px] rounded-lg bg-gradient-to-br from-[#080b17] via-[#070914] to-[#071c20] p-[17px] text-white shadow-md">

              {/* Top */}

              <div className="flex items-center justify-between">

                <span className="text-[9px] tracking-[1px] text-[#d3d5dc]">
                  LIC POLICY
                </span>

                <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white/10">

                  <Bell size={15} />

                </div>

              </div>


              {/* Amount */}

              <div className="mt-[29px] text-[35px] font-bold tracking-[-1.3px]">
                ₹5,000
              </div>

              <div className="mt-0.5 text-[10px] text-[#d0d2d9]">
                Due in 3 days (15 Aug 2026)
              </div>


              {/* Reminder */}

              <div className="mt-[26px] flex min-h-[57px] items-start gap-2 rounded-md bg-white/10 p-2.5">

                <Clock3
                  size={16}
                  className="mt-px shrink-0"
                />

                <span className="text-[10px] leading-[1.35] text-[#d8dae0]">
                  Reminder active from
                  <br />
                  13 Aug to ensure
                  <br />
                  timely payment.
                </span>

              </div>


              {/* Button */}

              <button className="mt-[26px] flex h-[35px] w-full items-center justify-center gap-1.5 rounded-md bg-white text-[10px] font-medium text-[#161b27] transition hover:-translate-y-px">

                View Investment

                <ArrowRight size={15} />

              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}


/* ================= STAT CARD ================= */

function StatCard({
  title,
  value,
  icon,
  green = false,
}) {

  return (
    <div className="min-h-[104px] rounded-[9px] border border-[#ececf2] bg-white p-[18px_16px] shadow-[0_1px_3px_rgba(20,24,40,0.02)]">

      <div className="flex items-start justify-between">

        <span className="max-w-[110px] text-[10px] leading-[1.4] tracking-[0.7px] text-[#414756]">
          {title}
        </span>

        <div className="text-[#7a808b]">
          {icon}
        </div>

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


/* ================= PREMIUM ITEM ================= */

function PremiumItem({ premium }) {

  return (
    <div className="relative flex min-h-[81px] items-center justify-between overflow-hidden rounded-[9px] border border-[#eeeeF3] bg-white px-[17px] py-[15px] pl-5">

      {/* Left border */}

      <span
        className={`absolute left-0 top-0 bottom-0 w-[3px] ${
          premium.upcoming
            ? "bg-[#d82424]"
            : "bg-[#d5d6db]"
        }`}
      />


      {/* Information */}

      <div>

        <div className="flex items-center gap-2">

          <h3 className="text-[13px] font-semibold">
            {premium.name}
          </h3>

          {premium.upcoming && (
            <span className="rounded-[10px] bg-[#fff0f0] px-[7px] py-1 text-[9px] font-semibold text-[#d82424]">
              Upcoming
            </span>
          )}

        </div>

        <p className="mt-2 text-[11px] text-[#555c68]">

          {premium.frequency}
          {" • "}
          Due: {premium.dueDate}
          {" • "}
          Reminder: {premium.reminderDate}

        </p>

      </div>


      {/* Right */}

      <div className="flex min-w-[130px] flex-col items-end gap-2">

        <strong className="text-[16px] font-semibold">
          {premium.amount}
        </strong>

        <span
          className={`rounded-[15px] px-[11px] py-1.5 text-[10px] whitespace-nowrap ${
            premium.upcoming
              ? "bg-[#fff1f1] text-[#d82424]"
              : "bg-[#e9efff] text-[#506eb3]"
          }`}
        >
          {premium.daysRemaining}
        </span>

      </div>

    </div>
  );
}

export default Dashboard;