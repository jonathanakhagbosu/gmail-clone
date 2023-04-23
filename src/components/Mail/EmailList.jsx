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
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import Section from "./Section";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedMails = querySnapshot.docs.map((doc) => doc.data());
      setEmails(updatedMails);
    });
    return unsubscribe;
  }, []);

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
        {emails.map((email, index) => (
          <EmailRow
            key={index}
            sender={email.recipient}
            subject={email.subject}
            description={email.message}
            time={email.timestamp && email.timestamp.toDate().toLocaleString()}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
