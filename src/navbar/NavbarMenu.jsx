import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div>
      <Link to={"/"}>Inicio</Link>
      <Link to={"/services"}>Servicios</Link>
      <Link to={"/about"}>Acerca de</Link>
      <Link to={"/contact"}>Contacto</Link>
    </div>
  );
};

export default NavbarMenu;
