import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to={"/"}>Inicio</NavLink>
        <NavLink to={"/services"}>Servicios</NavLink>
        <NavLink to={"/about"}>Acerca de</NavLink>
        <NavLink to={"/contact"}>Contacto</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
