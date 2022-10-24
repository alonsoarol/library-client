import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./page/Home";
import { Customers } from "./page/Customers";
import { Providers } from "./page/Providers";
import { Sales } from "./page/Sales";
import { Inventory } from "./page/Inventory";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
