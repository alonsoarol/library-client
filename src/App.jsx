import { Route, Routes, BrowserRouter } from "react-router-dom";
import { SignIn } from "./page/SignIn";
import { Customers } from "./page/Customers";
import { Providers } from "./page/Providers";
import { Sales } from "./page/Sales";
import { Inventory } from "./page/Inventory";
import { SignUp } from "./page/SignUp";
import { Nav } from "./components/Nav";
import { Logo } from "./components/Logo";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Logo />
        <Nav />
        <Routes>
          <Route path="/" index element={<SignIn />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
