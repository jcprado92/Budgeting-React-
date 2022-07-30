import React from "react";
import EditTransaction from "./Components/EditTransaction";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import NewTransaction from "./Components/NewTransaction";
import Transactions from "./Components/Transactions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionDetails from "./Components/TransactionDetails";
import FourOFour from "./Components/FourOFour";

const App = () => {
  return (
    <div>
      <Router>
        <Nav className="nav" />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transactions/new" element={<NewTransaction />} />
            <Route path="/transactions/:index" element={<TransactionDetails />} />
            <Route path="/transactions/:index/edit" element={<EditTransaction/>} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
