import {
  AddToDrive,
  ArrowDropDownOutlined,
  AttachFileOutlined,
  Close,
  DeleteOutlined,
  EmojiEmotionsOutlined,
  FormatColorTextOutlined,
  ImageOutlined,
  InsertLinkOutlined,
  LockClockOutlined,
  MinimizeOutlined,
  MoreVertOutlined,
  OpenInFullOutlined,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import "./SendMail.css";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../app/features/mailSlice";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <div className="sendMail__headerLeft">
          <h3>New Message</h3>
        </div>
        <div className="sendMail__headerRight">
          <IconButton>
            <MinimizeOutlined className="sendMail__icon" />
          </IconButton>
          <IconButton>
            <OpenInFullOutlined className="sendMail__icon" />
          </IconButton>
          <IconButton onClick={() => dispatch(closeSendMessage())}>
            <Close className="sendMail__icon" />
          </IconButton>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="recipient"
          id=""
          placeholder="Recipients"
          {...register("recipient", {
            required: true,
            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          })}
        />
        {errors.recipient && errors.recipient.type === "required" && (
          <p className="sendMail__error">Email is required!</p>
        )}
        {errors.recipient && errors.recipient.type === "pattern" && (
          <p className="sendMail__error">Email is not valid!</p>
        )}

        <input
          type="text"
          name="subject"
          id=""
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required!</p>
        )}
        <textarea
          name="message"
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is required!</p>
        )}

        <div className="sendMail__footer">
          <div className="sendMail__footerLeft">
            <Button className="sendMail__button" type="submit">
              Send
              {/* <ArrowDropDownOutlined /> */}
            </Button>
            <IconButton>
              <FormatColorTextOutlined className="sendMail__icon" />
            </IconButton>
            <IconButton>
              <AttachFileOutlined className="sendMail__icon" />
            </IconButton>
            <IconButton>
              <InsertLinkOutlined className="sendMail__icon" />
            </IconButton>
            <IconButton>
              <EmojiEmotionsOutlined className="sendMail__icon" />
            </IconButton>
            <IconButton>
              <AddToDrive className="sendMail__icon" />
            </IconButton>
            <IconButton>
              <ImageOutlined className="sendMail__icon" />
            </IconButton>
            <IconButton>
              <LockClockOutlined className="sendMail__icon" />
            </IconButton>
            <IconButton>
              <MoreVertOutlined className="sendMail__icon" />
            </IconButton>
          </div>
          <div className="sendMail__footerRight">
            <IconButton>
              <DeleteOutlined />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
