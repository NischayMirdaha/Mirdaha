// App.jsx
import React from "react";
import Homepage from "./Components/Home.jsx"; // adjust if path differs

function App() {
  return (
    <div className="font-sans antialiased">
      <Homepage />
    </div>
  );
}

export default App;
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Homepage from "./Components/hero";
// import AboutUs from "./Components/About";
// import Services from "./Components/service";
// import Navbar from "./Components/Nav";

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navbar should be outside Routes */}
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/services" element={<Services />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
