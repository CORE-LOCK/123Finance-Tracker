import Home from "../Pages/Home";
import AddInvestment from "../Pages/AddInvestment";
import InvestmentDetails from "../Pages/InvestmentDetails";
import UpcomingPremiums from "../Pages/UpcomingPremiums";
import { useContext } from "react";
import  {context}  from "../Context/Createcontext";

function Dashboard() {
const {comp, setComp } = useContext(context)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* ================= SIDEBAR ================= */}

      <div
        className="
          flex
          h-screen
          w-[202px]
          shrink-0
          flex-col
          items-center
          gap-1
          border-r
          border-[#121722]
          bg-[#030711]
          font-sans
          p-3
        "
      >
        {/* ================= LOGO ================= */}

        <div
          className="
            flex
            h-[65px]
            w-full
            items-center
            gap-2
            px-2
            text-white
          "
        >
          <img
            className="h-7 w-7 object-cover"
            src="/ChatGPT Image Aug 12, 2026, 12_41_58 PM.png"
            alt="Finance Tracker"
          />

          <h1 className="whitespace-nowrap text-[16px] font-semibold tracking-[-0.3px]">
            Finance Tracker
          </h1>
        </div>

        {/* ================= DASHBOARD ================= */}

        <button
          onClick={() => {
            setComp("Home");
          }}
          className={`
            flex
            h-[35px]
            w-full
            cursor-pointer
            items-center
            gap-4
            rounded-[5px]
            ${comp == "Home" ? "bg-[#454956] text-blue-500" : ""}
            px-3
            text-left
            text-[#a8acb7]
            transition-all
            duration-150
            hover:bg-[#505461]
            hover:text-white
          `}
        >
          <img
            src="/Dashboard-Icon.png"
            className="h-[16px] w-[16px] object-contain"
            alt=""
          />

          <span className="text-[11px] font-medium tracking-[0.2px]">
            Dashboard
          </span>
        </button>

        {/* ================= INVESTMENTS ================= */}

        <button
          onClick={() => {
            setComp("InvestmentDetails");
          }}
          className={`
            flex
            h-[35px]
            w-full
            cursor-pointer
            items-center
            gap-4
            rounded-[5px]
            px-3
            text-left
            text-[#a8acb7]
            transition-all
            duration-150
             ${comp == "InvestmentDetails" ? "bg-[#454956] text-white" : ""}
            hover:bg-[#454956]
            hover:text-white
          `}
        >
          <img
            src="/Investments.png"
            className="h-[16px] w-[16px] object-contain opacity-80"
            alt=""
          />

          <span className="text-[11px] font-medium tracking-[0.2px]">
            Investments
          </span>
        </button>

        {/* ================= UPCOMING PREMIUMS ================= */}

        <button
          onClick={() => {
            setComp("UpcomingPremiums");
          }}
          className="
            flex
            h-[35px]
            w-full
            cursor-pointer
            items-center
            gap-4
            rounded-[5px]
            px-3
            text-left
            text-[#a8acb7]
            transition-all
            duration-150
            hover:bg-[#171b26]
            hover:text-white
          "
        >
          <img
            src="/upcoming investment.png"
            className="h-[16px] w-[16px] object-contain opacity-80"
            alt=""
          />

          <span className="whitespace-nowrap text-[11px] font-medium tracking-[0.2px]">
            Upcoming Premiums
          </span>
        </button>

        {/* ================= COMPLETED ================= */}

        {/* <button
          onClick={() => {
            setComp("Completed");
          }}
          className="
            flex
            h-[35px]
            w-full
            cursor-pointer
            items-center
            gap-4
            rounded-[5px]
            px-3
            text-left
            text-[#a8acb7]
            transition-all
            duration-150
            hover:bg-[#171b26]
            hover:text-white
          "
        >

          <img
            src="/Complete.png"
            className="h-[16px] w-[16px] object-contain opacity-80"
            alt=""
          />

          <span className="text-[11px] font-medium tracking-[0.2px]">
            Completed
          </span>

        </button> */}

        {/* ================= ADD INVESTMENT ================= */}

        <button
          onClick={() => {
            setComp("AddInvestment");
          }}
          className="
            flex
            h-[35px]
            w-full
            cursor-pointer
            items-center
            gap-4
            rounded-[5px]
            px-3
            text-left
            text-[#a8acb7]
            transition-all
            duration-150
            hover:bg-[#171b26]
            hover:text-white
          "
        >
          <img
            src="/add investment.png"
            className="h-[16px] w-[16px] object-contain opacity-80"
            alt=""
          />

          <span className="text-[11px] font-medium tracking-[0.2px]">
            Add Investment
          </span>
        </button>

        {/* ================= SPACER ================= */}

        <div className="flex-1" />

        {/* ================= USER SECTION ================= */}

        <div className="w-full border-t border-[#121722] pt-4">
          <div className="flex items-center gap-3 px-2">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="User"
              className="h-7 w-7 rounded-full object-cover"
            />

            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium text-white">
                Alex Sterling
              </p>

              <p className="mt-[2px] text-[9px] text-[#8c919e]">
                Premium Member
              </p>
            </div>
          </div>

          {/* Logout */}

          <button
            className="
              mt-3
              flex
              h-[35px]
              w-full
              cursor-pointer
              items-center
              gap-4
              rounded-[5px]
              px-5
              text-left
              text-[#a8acb7]
              transition-all
              duration-150
              hover:bg-[#171b26]
              hover:text-white
            "
          >
            <span className="text-[16px]">⇥</span>

            <span className="text-[11px] font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* ================= RIGHT SIDE DATA AREA ================= */}

      <div
        className="
          flex
          h-screen
          min-w-0
          flex-1
          overflow-y-auto
          bg-[#f8f8fc]
          font-sans
        "
      >
        {comp == "Home" ? <Home /> : ""}

        {comp == "AddInvestment" ? <AddInvestment /> : ""}

        {comp == "InvestmentDetails" ? <InvestmentDetails /> : ""}
        {comp == "UpcomingPremiums" ? <UpcomingPremiums /> : ""}
      </div>
    </div>
  );
}

export default Dashboard;
