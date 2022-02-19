import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactSales from "./components/contact-sales";
import Home from "./components/home";
import Navbar from "./components/Navbar/navbar";
import NotFound from "./components/not-found";
import Pricing from "./components/pricing";
import ShipmentDetails from "./components/Shipment/shipment-details";
import SignIn from "./components/sign-in";
import TrackingShipment from "./components/TrackingShipment/tracking-shipment";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/_variables.css";
import "./styles/_global.css";

function App() {
  return (
    <Router>
      <header style={{ borderBottom: "var(--primary-border)" }}>
        <Navbar />
      </header>
      <section className="py-5" style={{ textAlign: "start" }}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contact-sales" element={<ContactSales />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route
            path="/tracking-shipment"
            element={<TrackingShipment />}
          ></Route>
          <Route path="/shipment/:id" element={<ShipmentDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </section>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
