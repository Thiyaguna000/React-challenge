import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./Input/Input";
import { Button } from "./Button/Button";

const Form = () => {
  const history = useNavigate();

  const handleLogin = () => {
    history("/home");
  };

  return (
    <div>
      <Input
        description="Username"
        placeholder="Enter your username"
        type="text"
      />
      <Input
        description="Password"
        placeholder="Enter your password"
        type="password"
      />
      <Button title="Log in" type="submit" handleClick={handleLogin} />
    </div>
  );
};

export default Form;
