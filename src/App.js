import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/AuthProvider";
import { router } from "./routes/routes";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </div>
  );
}

export default App;
