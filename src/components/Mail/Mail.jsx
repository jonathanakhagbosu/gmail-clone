import {
  AccessTimeOutlined,
  AccountCircleOutlined,
  ArchiveOutlined,
  ArrowBackOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  DeleteOutlineOutlined,
  LabelOutlined,
  LocalPrintshopOutlined,
  MailOutline,
  MoreVertOutlined,
  OpenInNewOutlined,
  ReplyOutlined,
  ReportGmailerrorredOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mail.css";

const Mail = () => {
  const navigate = useNavigate();

  return (
    <div className="mail">
      <div className="mailTools">
        <div className="mailTools__left">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackOutlined />
          </IconButton>
          <IconButton>
            <ArchiveOutlined />
          </IconButton>
          <IconButton>
            <ReportGmailerrorredOutlined />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlined />
          </IconButton>
          <IconButton>
            <MailOutline />
          </IconButton>
          <IconButton>
            <AccessTimeOutlined />
          </IconButton>
          <IconButton>
            <LabelOutlined />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>

        <div className="mailsTools__right">
          <IconButton>
            <ChevronLeftOutlined />
          </IconButton>
          <IconButton>
            <ChevronRightOutlined />
          </IconButton>
        </div>
      </div>

      <div className="mailBody">
        <div className="mailBody__header">
          <div className="mailBody__headerTop">
            <div className="mailBody__headerTopLeft">
              <h2>Subject</h2>
            </div>
            <div className="mailBody__headerTopRight">
              <IconButton>
                <LocalPrintshopOutlined />
              </IconButton>
              <IconButton>
                <OpenInNewOutlined />
              </IconButton>
            </div>
          </div>

          <div className="mailBody__headerBottom">
            <div className="mailBody__headerBottomLeft">
              <IconButton>
                <AccountCircleOutlined fontSize="large" />
              </IconButton>
              <h5>
                Jonathan Akhagbosu{" "}
                <span className="user__email">jonathanakhagbosu@gmail.com</span>
              </h5>
            </div>
            <div className="mailBody__headerBottomRight">
              <small>02:00PM</small>
              <IconButton>
                <StarBorderOutlined />
              </IconButton>
              <IconButton>
                <ReplyOutlined />
              </IconButton>
              <IconButton>
                <MoreVertOutlined />
              </IconButton>
            </div>
          </div>
        </div>

        <div className="mailBody__messageWrapper">
          <div className="mailBody__message">
            <p>Here! I've got some funds for you.</p>
          </div>
        </div>

        <div className="mailBody_footer">
          {/* <Button variant="outlined" startIcon={<ReplyOutlined />}>
            Reply
          </Button> */}
          hello
        </div>
      </div>
    </div>
  );
};

export default Mail;
