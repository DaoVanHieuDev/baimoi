import React, { useState } from "react";
import "./header.css";
import { Avatar, Badge } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Header = () => {
  const [username, setUserName] = useState(null) as any;
  const navigate = useNavigate();
  const optionBuy = useSelector((state: any) => state.cart);
  const totalClickNumber = optionBuy.reduce(
    (total: number, item: any) => total + item.numberBuy,
    0
  );
  const handleSignUp = () => {
    navigate("/signUp");
  };
  const id = JSON.parse(localStorage.getItem("idUser") as any);
  const loadUser = () => {
    axios
      .get(`http://localhost:8080/api/v1/user/${id}`)
      .then((res) => setUserName(res.data.data[0].userName))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadUser();
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem("idUser");
    loadUser();
  };
  const handleToShop = () => {
    navigate("/shop");
  };
  return (
    <div className="header">
      <div className="logo-header">
        <a href="/">
          <img
            width="65"
            height="58"
            src="https://bizweb.dktcdn.net/100/445/497/themes/900710/assets/logo.png?1696912769507"
            className="attachment-thumbnail size-thumbnail"
            alt=""
          ></img>
        </a>
      </div>
      <div className="menu-header">
        <p>Trang chủ</p>
        <p onClick={handleToShop}>Sản phẩm</p>
        <p>Blog</p>
        <p>Giới thiệu</p>
        <p>Hệ thống cửa hàng</p>
      </div>
      <div className="icon-header">
        <i className="fa-solid fa-magnifying-glass"></i>
        {username != null ? (
          <p>{username}</p>
        ) : (
          <div onClick={handleSignUp}>
            <i className="fa-solid fa-user"></i>
          </div>
        )}
        {id == null ? (
          ""
        ) : (
          <i
            className="fa-solid fa-right-from-bracket"
            onClick={handleLogOut}
          ></i>
        )}

        <a href="#">
          <Badge count={totalClickNumber}>
            <i
              className="fa-sharp fa-solid fa-cart-shopping"
              style={{ color: "black", fontSize: "25px" }}
            ></i>
          </Badge>
        </a>
      </div>
    </div>
  );
};

export default Header;
