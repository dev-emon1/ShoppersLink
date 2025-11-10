/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const IconButton = ({ link, icon: Icon, bgColor, hoverBgColor }) => {
  return (
    <Link
      to={link}
      className={`text-white dark:text-white hover:underline p-2 ${bgColor} hover:${hoverBgColor} hover:shadow-md rounded`}
    >
      <Icon />
    </Link>
  );
};

export default IconButton;
