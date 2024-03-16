// import { CloseIcon } from "../CloseIcon";

function OrdersCard(props) {
  const { totalPrice, totalProducts } = props;

  let article = "Article";
  if (totalProducts > 1) article += "s";

  const finalPrice = Math.ceil(totalPrice * 100) / 100;

  return (
    
      <div className="flex justify-center items-center py-6 border border-slate-500 rounded-lg p-4">
        <p className="flex flex-col w-full">
          <span>Date: 12.03.24</span>
          <span>
            {totalProducts} {article}
          </span>
          <span className="font-bold">Total: ${finalPrice}</span>
        </p>
      </div>
  );
}

export { OrdersCard };
