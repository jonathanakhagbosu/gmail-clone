import { StarBorderOutlined } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmailRow.css";

const EmailRow = ({ id, sender, subject, description, time }) => {
  const navigate = useNavigate();

  return (
    <div className="emailRow" onClick={() => navigate("/mail")}>
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <h3 className="emailRow__sender"> {sender} </h3>
      </div>

      <div className="emailRow__message">
        <h4>
          {" "}
          {subject}{" "}
          <span className="emailRow__description"> - {description} </span>{" "}
        </h4>
      </div>

      <div className="emailRow__time">{time}</div>
    </div>
  );
};

export default EmailRow;
