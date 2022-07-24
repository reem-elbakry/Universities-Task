import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUniversity } from "../features/university/universitySlice";

const MoreOptions = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const MyOptions = ["Show Details", "Update", "Delete"];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); //<button></button>
  };

  const open = Boolean(anchorEl); //if null return false

  const handleClose = (event) => {
    const option = event.currentTarget.innerHTML.split("<")[0];
    setAnchorEl(null);

    if (option === "Show Details") {
      navigate(`${id}`);
    } else if (option === "Update") {
      navigate(`edit/${id}`);
    } else if (option === "Delete") {
      dispatch(deleteUniversity(id));
    }
  };

  return (
    <div className="inline-block">
      <IconButton
        aria-label="more"
        onClick={handleClick}
        aria-haspopup="true"
        aria-controls="long-menu"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted onClose={handleClose} open={open}>
        {MyOptions.map((option, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MoreOptions;
