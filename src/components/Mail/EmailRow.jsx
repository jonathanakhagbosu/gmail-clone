import { StarBorderOutlined } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmailRow.css";
import { useDispatch } from "react-redux";
import { selectMail } from "../../app/features/mailSlice";

const EmailRow = ({ sender, subject, description, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({ sender, subject, description, time }));
    navigate("/mail");
  };

  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>

        <h3 className="emailRow__sender"> {sender} </h3>
      </div>

      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description"> - {description} </span>{" "}
        </h4>
      </div>

      <div className="emailRow__time">{time}</div>
    </div>
  );
};

export default EmailRow;
