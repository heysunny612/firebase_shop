import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
