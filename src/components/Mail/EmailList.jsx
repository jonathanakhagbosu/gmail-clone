import {
  ArrowDropDownOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  Inbox,
  LocalOfferOutlined,
  MoreVertOutlined,
  PeopleOutlined,
  RefreshOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import Section from "./Section";

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownOutlined />
          </IconButton>
          <IconButton>
            <RefreshOutlined />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftOutlined />
          </IconButton>
          <IconButton>
            <ChevronRightOutlined />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section icon={<Inbox />} title="Primary" color="blue" selected />
        <Section
          icon={<LocalOfferOutlined />}
          title="Promotions"
          color="purple"
        />
        <Section icon={<PeopleOutlined />} title="Social" color="green" />
      </div>

      <div className="emailList__list">
        <EmailRow
          sender="Jonathan Akhagbosu"
          subject="Credit Alert"
          description="Here, I've got some funds for you"
          time="10:30PM"
        />
        <EmailRow
          sender="Jonathan Akhagbosu"
          subject="Credit Alert"
          description="Here, I've got some funds for you Here, I've got some funds for youHere, I've got some funds for youHere, I've got some funds for you"
          time="10:30PM"
        />
      </div>
    </div>
  );
};

export default EmailList;
