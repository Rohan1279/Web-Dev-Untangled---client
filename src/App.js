import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/AuthProvider";
import { router } from "./routes/routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <AuthProvider>
        <HelmetProvider>
          <Helmet>
            <title>Web Dev Untangled</title>
          </Helmet>
          <RouterProvider router={router} />
          <Toaster />
        </HelmetProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
