import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import { SidebarProvider } from "./components/ui/sidebar";
import SidebarLayout from "./components/shared/SidebarLayout";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route
          path="/"
          element={
            <SidebarProvider>
              <SidebarLayout />
              <Home />
            </SidebarProvider>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
