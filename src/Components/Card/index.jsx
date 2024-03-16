import { useContext } from "react";
import { AddIcon } from "../AddIcon";
import { ShoppingCartContext } from "../../Context";
import { EyeIcon } from "../EyeICon";
import { CheckIcon } from "../CheckIcon";

function Card(props) {
  
  const { id, title, price, category, image, description } = props;
  const {
    count,
    setCount,
    openProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
    closeProductDetail,
    closeCheckoutSideMenu,
  } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    setProductToShow(productDetail);
    openProductDetail();
    closeCheckoutSideMenu();
  };

  const addProductsToCart = (productData) => {
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
    closeProductDetail();
  };

  const renderIcon = (productId) => {
    const isInCart = cartProducts.some((product) => product.id === productId);
    return isInCart ? (
      <div className="grid place-content-center w-6 h-6 rounded-lg mt-6 p-1 bg-white/50 transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:scale-150 hover:origin-bottom-left hover:trans">
        <CheckIcon />
      </div>
    ) : (
      <div
        className="grid place-content-center w-6 h-6 rounded-lg mt-6 p-1 bg-white/50 transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:scale-150 hover:origin-bottom-left hover:trans"
        onClick={() => {
          addProductsToCart({ id, title, price, category, image });
        }}
      >
        <AddIcon />
      </div>
    );
  };
  return (
    <article className="bg-black w-80 h-80 rounded-3xl overflow-hidden">
      <figure className="grid content-between relative mb-2 w-full h-full p-8 before:block before:absolute before:z-10 before:inset-0 before:w-full before:h-full before:bg-gradient-to-r from-black/90 to-black/25">
        <img
          className="absolute w-full h-full object-cover rounded-lg"
          src={image}
        />
        <span className="relative z-20 text-white text-xs font-medium justify-self-end text-right">
          Price<span className="block font-bold text-xl">${price}</span>
        </span>

        <div className="grid relative z-20">
          <span className="text-white text-xl font-black leading-6 mb-2">
            {title}
          </span>
          <span className="text-white text-xs">{category}</span>
          <div className="grid grid-flow-col gap-4 justify-start">
            {renderIcon(id)}
            <div
              className="grid place-content-center w-6 h-6 rounded-lg mt-6 p-1 bg-white/50 transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:scale-150 hover:origin-bottom-left hover:trans"
              onClick={() => {
                showProduct({ title, price, category, image, description });
              }}
            >
              <EyeIcon />
            </div>
          </div>
        </div>
      </figure>
    </article>
  );
}

export { Card };
