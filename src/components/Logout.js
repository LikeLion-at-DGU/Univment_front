import React from "react";
import styles from "../static/css/Logout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Logout = ({ isLoggedIn, setIsLoggedIn }) => {
  const onLogout = async () => {
    if (window.confirm("정말 로그아웃하시겠습니까?")) {
      setIsLoggedIn(false);
      localStorage.clear();
      await axios
        .post("http://127.0.0.1:8000/auth/logout/")
        .then(() => {
          window.location.replace("/");
        })
        .catch((error) => {
          console.log(error);
          alert("로그아웃에 실패하였습니다.");
        });
    } else {
      return;
    }
  };
  return (
    <>
      <button className={styles.logout} onClick={onLogout}>
        <FontAwesomeIcon icon={faRightFromBracket} size="2x" />
      </button>
    </>
  );
};

export default Logout;
