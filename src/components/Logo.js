import { NavLink } from "react-router-dom";
import classes from "./Logo.module.css";
function Logo(props) {
  return (
    <NavLink to="/" className={classes.logo}>
      <img src={props.logo} alt={props.alt} />
    </NavLink>
  );
}
export default Logo;
