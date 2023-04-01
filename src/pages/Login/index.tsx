import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Checkbox, Input, Button } from "antd";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [validInput, setValidInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };
  const onFinish = (values: any) => {
    navigate("/");
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const validateInput = () => {
    // 简单的规则校验，仅供参考
    if (username.trim() === "") {
      setErrorMessage("Username cannot be empty!");
      return false;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long!");
      return false;
    }
    if (isLogin) {
      // 登录无需校验确认密码
      return true;
    }
    if (confirmPassword !== password) {
      setErrorMessage("Passwords do not match!");
      return false;
    }
    return true;
  };
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidInput(false); // 先将消息设置为无效
    // 校验表单
    if (validateInput()) {
      if (isLogin) {
        // 登录逻辑

        navigate("/");
        console.log("Username:", username);
        console.log("Password:", password);
      } else {
        // 注册逻辑
        console.log("Register Username:", username);
        console.log("Register Password:", password);
        console.log("Confirm Password:", confirmPassword);
      }
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
    } else {
      setValidInput(true); // 如果校验不通过则设置消息为有效
    }
  };

  return (
    <div>
      <h1>{isLogin ? "Login" : "Register"}</h1>
      {validInput && <div style={{ color: "red" }}>{errorMessage}</div>}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {/* <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        {!isLogin && (
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        )}
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </Form> */}
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button onClick={handleToggleForm}>{isLogin ? "Register" : "Login"}</button>
      </p>
    </div>
  );
};
export default LoginPage;
