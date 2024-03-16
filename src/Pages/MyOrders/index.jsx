import { useContext } from "react";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <div className="flex justify-center mt-32 ">
      <div className="flex flex-col items-center p-6 border border-slate-300 w-96 rounded-lg">
        <div className="mb-4">
          <span>My Orders</span>
        </div>
        <div className="w-full">
          {order.map((order, i) => (
            <Link key={i} to={`/my-orders/${i}`} className="mb-2 block">
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export { MyOrders };
