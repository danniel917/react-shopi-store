import { useContext } from "react";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const { setSearchByTitle, filteredItems } = useContext(ShoppingCartContext);

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return filteredItems?.map((item) => <Card key={item.id} {...item} />);
    } else {
      return <>El producto no existe!</>;
    }
  };

  return (
    <>
      <div className="my-20">
        <h1 className="text-center font-bold text-2xl mb-6">
          Exlusive Products
        </h1>
        <input
          className="border border-slate-700 p-4 rounded-lg w-80 block mr-auto ml-auto focus:outline-none"
          type="text"
          placeholder="Search products"
          onChange={(e) => {
            setSearchByTitle(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-row flex-wrap gap-8 items-center justify-center justify-items-center w-full max-w-screen-lg my-0 mx-auto">
        {renderView()}
        <ProductDetail />
      </div>
    </>
  );
}

export { Home };
