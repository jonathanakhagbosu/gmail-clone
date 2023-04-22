import React from "react";
import "./header.css";
import { Avatar, IconButton } from "@mui/material";
import {
  Apps,
  HelpOutline,
  Menu,
  Search,
  Settings,
  Tune,
} from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="gmail_icon"
        />
      </div>

      <div className="header__middle">
        <IconButton>
          <Search className="gray" />
        </IconButton>
        <input type="text" placeholder="Search mail" />
        <IconButton>
          <Tune className="gray" />
        </IconButton>
      </div>

      <div className="header__right">
        <IconButton>
          <HelpOutline />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
