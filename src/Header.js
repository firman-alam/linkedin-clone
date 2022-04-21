import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { getAuth, signOut } from "firebase/auth";

function Header() {
  const dispatch = useDispatch();
  const auth = getAuth();

  const logoutOfApp = () => {
    dispatch(logout());

    signOut(auth).then(() => {
      // successfully sign out
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        ></img>

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search..." type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Message" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption onClick={logoutOfApp} avatar="true" title="me" />
      </div>
    </div>
  );
}

export default Header;
