import React, { useState } from "react";
import {
  Button,
  Container,
  ErrorMessage,
  Input,
  LoginForm,
  Title,
} from "./LoginPageStyle";
import { useNavigate } from "react-router-dom"; 

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dummyCredentials = [
    { username: "deepesh@gmail.com", password: "password123" },
    { username: "user2@example.com", password: "Admin@456" },
    { username: "testuser3", password: "Test@789" },
    { username: "dummyUser4", password: "Dummy@321" },
    { username: "guest5@example.com", password: "Guest#654" },
  ];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidUser = dummyCredentials.some(
      (user) => user.username === email && user.password === password
    );

    if (email === "" || password === "") {
      setError("Please fill in all fields.");
    } else if (!isValidUser) {
      setError("Invalid username or password.");
    } else {
      setError("");
      alert("Logged in successfully!");
      onLoginSuccess(); 
      navigate("/home"); 
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </Container>
  );
};

export default LoginPage;
