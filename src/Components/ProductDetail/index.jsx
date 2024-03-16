import { useContext } from "react";
import "./ProductDetail.css";
import { CloseIcon } from "../CloseIcon";
import { ShoppingCartContext } from "../../Context";

function ProductDetail() {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed z-10 right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div
          className="cursor-pointer"
          onClick={() => {
            closeProductDetail();
          }}
        >
          <CloseIcon />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <div className="flex flex-col p-6">
        <span className="font-bold text-2xl mb-2">${productToShow.price}</span>
        <span className="font-medium text-xl">{productToShow.title}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </div>
    </aside>
  );
}

export { ProductDetail };
