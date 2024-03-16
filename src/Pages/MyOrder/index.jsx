import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { LeftIcon } from "../../Components/LeftIcon";



function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if(index === 'last') index = order?.length - 1

  return (
    <div className="flex justify-center mt-32">
      <div className="flex items-center flex-col p-6 border border-slate-300 w-96 rounded-lg">
      <div className="flex gap-8 justify-between w-full border-b pb-4">
        <span className="cursor-pointer">
          <Link to='/my-orders'>
          <LeftIcon/>
          </Link>
        </span>
        <span>My Order</span>
      </div>
      <div className="flex flex-col w-full">
        {order?.[index]?.products.map((product, i) => (
          <OrderCard key={i} {...product} />
        ))}
      </div>
      </div>
    </div>
  );
}

export { MyOrder };
