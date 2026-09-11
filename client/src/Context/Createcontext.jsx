import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const context = createContext();
const Createcontext = ({ children }) => {
  const [comp, setComp] = useState("Home");
  const [allinvestments, setAllinvestments] = useState([]);
  const [filterdate, setFilterdate] = useState("all");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getinvestment = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setAllinvestments([]);
        return;
      }

      const response = await axios.get(
        "http://localhost:5000/api/all-investments",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("Investment data:", response.data);

      setAllinvestments(response.data.data || []);
    } catch (error) {
      console.log("Investment fetch error:", error);
      setAllinvestments([]);
    }
  };

  useEffect(() => {
    getinvestment();
  }, [user]);

  const upcomingInvDashboard = allinvestments
    .filter((investment) => {
      const remindeDate = new Date(investment.reminderDate);
      const today = new Date();
      const next30day = new Date();
      next30day.setDate(today.getDate() + 30);
      return (
        remindeDate >= today &&
        investment.status == "active" &&
        remindeDate <= next30day
      );
    })
    .sort((a, b) => {
      return new Date(a.reminderDate) - new Date(b.reminderDate);
    });

  const upcomingInvestments = allinvestments
    .filter((investment) => {
      const remindeDate = new Date(investment.reminderDate);

      const today = new Date();
      if (filterdate === "all") {
        return investment.status === "active" && remindeDate >= today;
      }
      const next30day = new Date();

      if (filterdate === "today") {
        next30day.setDate(today.getDate());
      }
      if (filterdate === "week") {
        next30day.setDate(today.getDate() + 7);
      }
      if (filterdate === "month") {
        next30day.setDate(today.getDate() + 30);
      }

      return (
        remindeDate >= today &&
        investment.status == "active" &&
        remindeDate <= next30day
      );
    })
    .sort((a, b) => {
      return new Date(a.reminderDate) - new Date(b.reminderDate);
    });

  const activestatus = allinvestments.filter((investment) => {
    return investment.status == "active";
  });

  const data = {
    user,
    setUser,
    getinvestment,
    setComp,
    comp,
    allinvestments,
    setAllinvestments,
    upcomingInvestments,
    activestatus,
    filterdate,
    setFilterdate,
    upcomingInvDashboard,
  };

  return <context.Provider value={data}>{children}</context.Provider>;
};

export default Createcontext;
