import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop.jsx";
import PlantCare from "./pages/PlantCare/PlantCare.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Homee from "./components/Homee/Homee.jsx";
import { BadgeProvider } from "./components/context/Context.jsx";
import AddCard from "./pages/AddCard/AddCard.jsx";
import Login from "./pages/Login/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Pay from "./pages/Pay/Pay.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Shop2 from "./pages/Shop/Shop2.jsx";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BadgeProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <Router>
            <App />
            <Routes>
              <Route path="/" element={<Homee />} />
              <Route path="/Shop/:slug" element={<Shop />} />
              <Route path="/Shop" element={<Shop2 />} />
              <Route path="/Plant Care" element={<PlantCare />} />
              <Route path="/Blogs" element={<Blogs />} />
              <Route path="/AddCard" element={<AddCard />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/AddCard/Pay" element={<Pay />} />
              
            </Routes>
          </Router>
        </ClerkProvider>
      </BadgeProvider>
    </Provider>
  </React.StrictMode>
);
