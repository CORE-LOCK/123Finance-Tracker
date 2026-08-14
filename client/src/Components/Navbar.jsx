import {
  Search,
  Bell,
} from "lucide-react";

export const Navbar = () => {
  return (
          <header className="h-[42px] border-b border-[#eeeeF4] bg-white px-[18px] flex items-center justify-between">

        {/* Search */}

        <div className="w-[263px] h-[23px] flex items-center gap-2 rounded-full border border-[#d8dbe7] bg-[#f1f3fa] px-2.5">

          <Search
            size={16}
            className="text-[#4b5565]"
          />

          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full bg-transparent text-[10px] text-[#303747] outline-none placeholder:text-[#8d94a4]"
          />

        </div>


        {/* Right */}

        <div className="flex items-center gap-[18px]">

          <button className="relative text-[#5e6573]">

            <Bell size={19} />

            <span className="absolute right-0 top-0 h-[5px] w-[5px] rounded-full bg-red-600" />

          </button>


          <div className="h-6 w-6 overflow-hidden rounded-full">

            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Profile"
              className="h-full w-full object-cover"
            />

          </div>

        </div>

      </header>
  )
}
