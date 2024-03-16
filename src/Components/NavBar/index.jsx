import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { left_items, right_items } from "./PathLinks";
import { ShoppingCartContext } from "../../Context";

function NavBar() {
  const { cartProducts, setSearchByCategory } = useContext(ShoppingCartContext);

  const activeStyle = "underline underline-offset-4";
  const handleActive = ({ isActive }) => (isActive ? activeStyle : undefined);

  const checkPathName = (link, name) => {
    if (name == "All" || name == "Shopi") {
      setSearchByCategory();
    } else {
      setSearchByCategory(link);
    }
  };

  return (
    <nav className="hidden grid-flow-col justify-between fixed z-2 top-0 w-full px-8 py-5 lg:grid">
      <ul className="grid grid-flow-col gap-x-4 items-center">
        {left_items.map(({ path_link, path_name }, index) => (
          <li key={index}>
            <NavLink
              to={path_link}
              className={handleActive}
              onClick={() => {
                checkPathName(path_link, path_name);
              }}
            >
              {path_name}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="grid grid-flow-col gap-x-4 items-center">
        {right_items.map(({ path_link, path_name }, index) => (
          <li key={index}>
            <NavLink to={path_link} className={handleActive}>
              {path_name}
            </NavLink>
          </li>
        ))}
        <li>Cart {cartProducts.length}</li>
      </ul>
    </nav>
  );
}

export { NavBar };
