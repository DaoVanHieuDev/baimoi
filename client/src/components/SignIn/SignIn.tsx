import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import "./signin.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = async () => {
    try {
      const thongTinNguoiDung = {
        email: email,
        password: password,
      };
      const phanHoi = await axios.post(
        `http://localhost:8080/api/v1/auth/signin`,
        thongTinNguoiDung
      );

      if (phanHoi.data.message === "Đăng nhập thành công") {
        Swal.fire(
          "Đăng nhập thành công",
          "Bạn đã đăng nhập thành công!",
          "success"
        );
        localStorage.setItem("idUser", phanHoi.data.id);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        Swal.fire(
          "Lỗi",
          "Không tìm thấy email hoặc mật khẩu không đúng.",
          "error"
        );
      }
    } catch (loi) {
      console.log(loi);
      Swal.fire("Lỗi", "Có lỗi xảy ra trong quá trình đăng nhập.", "error");
    }
  };

  return (
    <div className="login-form">
      <img
        className="login-form1"
        style={{ height: "500px", width: "500px" }}
        src="https://thumbs.dreamstime.com/b/jbl-logo-portable-speaker-bucarest-romania-march-illustrative-editorial-image-213430604.jpg"
        alt=""
      />
      <div className="login-form2">
        <h1 className="login-form3">Đăng nhập</h1>
        <p className="login-form3">
          Hãy đăng nhập để được hưởng đặc quyền riêng dành cho bạn
        </p>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item label="" name="username">
            Email:
            <Input
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <Alert message="Lỗi" type="error" /> */}
          </Form.Item>

          <Form.Item name="password">
            Password:
            <Input.Password
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              className="login-form4"
              style={{ background: "red" }}
              htmlType="submit"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>

        <p className="login-form3">Bạn chưa có tài khoản ?</p>
        <a href="/signUp">
          <p className="login-form3" style={{ color: "blue" }}>
            Đăng ký ngay
          </p>
        </a>
      </div>
    </div>
  );
};

export default SignIn;
