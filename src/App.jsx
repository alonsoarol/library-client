import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ReactQueryDevtools } from "react-query/devtools";
import { SignIn } from "./page/SignIn";
import { SignUp } from "./page/SignUp";
import { Customers } from "./page/Customers";
import { Providers } from "./page/Providers";
import { Sales } from "./page/Sales";
import { Inventory } from "./page/Inventory";
import { Nav } from "./components/Nav";
import { Logo } from "./components/Logo";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarProvider } from "notistack";
import { Home } from "./page/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <QueryClientProvider client={queryClient}>
          <Logo />
          <Nav />
          <Routes>
            <Route path="/" index element={<SignIn />} />
            <Route
              path="/home"
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/customers"
              element={
                <ProtectedRoute>
                  <Customers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/providers"
              element={
                <ProtectedRoute>
                  <Providers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sales"
              element={
                <ProtectedRoute>
                  <Sales />
                </ProtectedRoute>
              }
            />

            <Route
              path="/inventory"
              element={
                <ProtectedRoute>
                  <Inventory />
                </ProtectedRoute>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<h1>404 Not Found</h1>} />
          </Routes>
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
