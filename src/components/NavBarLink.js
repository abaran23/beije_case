import { NavLink } from "react-router-dom";
import classes from "./NavBarLink.module.css";
function NavBarLink(props) {
  return (
    <NavLink
      to={props.path}
      className={({ isActive }) =>
        isActive ? classes.link + " " + classes.active : classes.link
      }
    >
      {props.title}
    </NavLink>
  );
}
export default NavBarLink;
