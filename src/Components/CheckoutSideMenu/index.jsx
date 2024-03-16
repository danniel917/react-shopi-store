import { useContext } from "react";
import "./CheckoutSideMenu.css";
import { CloseIcon } from "../CloseIcon";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";

function CheckoutSideMenu() {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
    setSearchByTitle
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      data: "03.12.24",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setSearchByTitle(null);
  };
  

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed z-20 right-0 border border-black rounded bg-white overflow-y-scroll`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div
          className="cursor-pointer"
          onClick={() => {
            closeCheckoutSideMenu();
          }}
        >
          <CloseIcon />
        </div>
      </div>
      <div className="px-6 flex-1">
        {cartProducts?.map((product, i) => (
          <OrderCard key={i} {...product} handleDelete={handleDelete} />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-3">
          <span className="font-medium">Total:</span>
          <span className="font-bold text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to='/my-orders/last'>
        <button className="bg-black py-3 text-white w-full rounded-lg"
          onClick={() => {
            handleCheckout();
          }}
        >
          Checkout
        </button>
        
        </Link>
      </div>
    </aside>
  );
}

export { CheckoutSideMenu };
