import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../../Routes";
import { NavBar } from "../../Components/NavBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  );
}

export { App };
