import { NavLink } from "react-router-dom";
import { left_items, right_items } from "./PathLinks";

function NavBar() {

  const activeStyle = "underline underline-offset-4";
  const handleActive = ({ isActive }) => (isActive ? activeStyle : undefined);

  return (
    <nav className="grid grid-flow-col justify-between fixed z-2 w-full px-8 px-5">
      <ul className="grid grid-flow-col gap-x-4 items-center">
        {left_items.map(({ path_link, path_name}, index) => (
          <li key={index}>
            <NavLink to={path_link} className={handleActive}>
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
      </ul>
    </nav>
  );
}

export { NavBar };
