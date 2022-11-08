import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import { router } from "./routes/routes";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
