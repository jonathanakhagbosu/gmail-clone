import React from "react";
import {
  CreateOutlined,
  Inbox,
  KeyboardArrowDownOutlined,
  NoteAltOutlined,
  ScheduleOutlined,
  SendOutlined,
  StarOutline,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../app/features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateOutlined />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption icon={<Inbox />} title="Inbox" number={500} selected />
      <SidebarOption icon={<StarOutline />} title="Starred" number={34} />
      <SidebarOption icon={<ScheduleOutlined />} title="Snoozed" number={3} />
      <SidebarOption icon={<SendOutlined />} title="Sent" number={3} />
      <SidebarOption icon={<NoteAltOutlined />} title="Drafts" number={2} />
      <SidebarOption icon={<KeyboardArrowDownOutlined />} title="More" />
    </div>
  );
};

export default Sidebar;
