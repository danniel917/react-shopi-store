import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../../Routes";
import { NavBar } from "../../Components/NavBar";
import "./App.css";
import { Layout } from "../../Components/Layout";
import { ShoppingCartProvider } from "../../Context";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";


function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <Layout>
          <AppRoutes />
          <CheckoutSideMenu />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export { App };
