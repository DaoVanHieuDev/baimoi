import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const SignUp: React.FC = () => {
  const navigate = useNavigate();
  // Lay gia tri o input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Bao loi
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const isEmailValid = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setFormErrors({ ...formErrors, email: "Email không đúng định dạng" });
      return false;
    }
    return true;
  };
  const isNameValid = (name: string) => {
    const nameRegex = /^[a-zA-Z\s']{3,}$/;
    if (!nameRegex.test(name)) {
      setFormErrors({ ...formErrors, name: "Tên không đúng định dạng" });
      return false;
    }
    return true;
  };
  const isPasswordValid = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setFormErrors({
        ...formErrors,
        password: "Mật khẩu không đúng định dạng",
      });
      return false;
    }
    return true;
  };

  // Ham submit
  const onFinish = () => {
    setFormErrors({ name: "", email: "", password: "" });

    if (
      !isNameValid(name) ||
      !isEmailValid(email) ||
      !isPasswordValid(password)
    ) {
      return;
    } else {
      const newUser = {
        name: name,
        email: email,
        password: password,
      };
      axios
        .post(`http://localhost:8080/api/v1/auth/signup`, newUser)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Đăng ký thành công",
            showConfirmButton: false,
            timer: 2000,
          }),
            setTimeout(() => {
              navigate("/signIn");
            }, 1500);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="register-form">
      <img
        className="register-form1"
        style={{ height: "500px", width: "500px" }}
        src="https://thumbs.dreamstime.com/b/jbl-logo-portable-speaker-bucarest-romania-march-illustrative-editorial-image-213430604.jpg"
        alt=""
      />
      <div className="register-form2">
        <h1 className="register-form3">Đăng ký</h1>
        <p className="register-form3">
          Hãy đăng ký để được hưởng nhiều đặc quyền riêng dành cho bạn
        </p>

        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item name="name">
            Họ và tên:
            <Input
              name="name"
              placeholder="Họ và tên"
              onChange={(e) => setName(e.target.value)}
            />
            {formErrors.name && (
              <span className="error-message" style={{ color: "red" }}>
                {formErrors.name}
              </span>
            )}
          </Form.Item>

          <Form.Item name="email">
            Email:
            <Input
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {formErrors.email && (
              <span className="error-message" style={{ color: "red" }}>
                {formErrors.email}
              </span>
            )}
          </Form.Item>

          <Form.Item name="password">
            Password:
            <Input.Password
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {formErrors.password && (
              <span className="error-message" style={{ color: "red" }}>
                {formErrors.password}
              </span>
            )}
          </Form.Item>
          <p className="register-form3">
            Thông tin của bạn sẽ được bảo mật theo chính sách riêng tư của chúng
            tôi
          </p>
          <Form.Item>
            <Button className="register-form4" htmlType="submit">
              Đăng ký ngay
            </Button>
          </Form.Item>
        </Form>

        <p className="register-form3">Bạn đã có tài khoản ?</p>
        <a href="/signIn">
          <p className="register-form3" style={{ color: "blue" }}>
            Đăng nhập ngay
          </p>
        </a>
      </div>
    </div>
  );
};

export default SignUp;
