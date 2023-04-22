import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import SendMail from "./components/Mail/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./app/features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Outlet />
      </div>
      {sendMessageIsOpen && <SendMail />}
    </div>
  );
}

export default App;
