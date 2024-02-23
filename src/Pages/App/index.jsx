import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../../Routes";
import { NavBar } from "../../Components/NavBar";
import "./App.css";
import { Layout } from "../../Components/Layout";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export { App };
