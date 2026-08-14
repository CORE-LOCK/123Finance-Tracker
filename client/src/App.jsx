import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import AddInvestment from './Pages/AddInvestment'
import InvestmentDetails from './Pages/InvestmentDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/AddInvestment" element={<AddInvestment />} />
      <Route path="/InvestmentDetails" element={<InvestmentDetails />} />
    </Routes>
  );
}

export default App;
