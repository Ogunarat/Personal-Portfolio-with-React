import React from "react";
import { PiListBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const ToggleButton = ({ setOpen, open }) => {
  return (
    <button className="toggleButton" onClick={() => setOpen((prev) => !prev)}>
      {open ? <IoClose /> : <PiListBold />}
    </button>
  );
};

export default ToggleButton;
