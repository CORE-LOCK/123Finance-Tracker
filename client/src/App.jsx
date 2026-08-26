import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import AddInvestment from './Pages/AddInvestment'
import InvestmentDetails from './Pages/InvestmentDetails'
import Registerform from './Pages/Registerform'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/AddInvestment" element={<AddInvestment />} />
      <Route path="/InvestmentDetails" element={<InvestmentDetails />} />
      <Route path="/Register" element={<Registerform />} />
    </Routes>
  );
}

export default App;
