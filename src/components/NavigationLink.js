import { NavLink } from "react-router-dom";

function NavigationLink(props) {
  return (
    <NavLink to={props.path} style={props.style}>
      {props.title}
    </NavLink>
  );
}
export default NavigationLink;
