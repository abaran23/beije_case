import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "./CustomLink.module.css";
function CustomLink(props) {
  const {
    style,
    title,
    fontStyle = {
      fontFamily: "Gordita-Regular",
      fontSize: "16px",
    },
  } = props;

  return (
    <Link style={style} to={props.path}>
      {props.children}
      <Typography
        sx={{
          marginLeft: style.marginLeft,
          fontSize: fontStyle.fontSize,
          fontFamily: fontStyle.fontFamily,
        }}
      >
        {title}
      </Typography>
    </Link>
  );
}
export default CustomLink;
