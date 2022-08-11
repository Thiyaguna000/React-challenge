import React, { useState } from 'react';
import './Login.css';
import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useNavigate();

  const handleLogin = async (e) => {
    console.log(user, password);
    e.preventDefault();
    await axios
      .post(
        `
    https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=7009bcbd203a44c230df630f8447bbc9`,
        {
          username: user,
          password: password,
          request_token: sessionStorage.getItem('requesttoken')
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          sessionStorage.setItem('login', true);
          sessionStorage.setItem('user', user);
          toast.success('Success!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: false
          });
          history('/home');
          setErrorMessage(false);
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          axios
            .get(
              'https://api.themoviedb.org/3/authentication/token/new?api_key=7009bcbd203a44c230df630f8447bbc9'
            )
            .then((res) => {
              sessionStorage.setItem('requesttoken', res.data.request_token);
              axios
                .post(
                  `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=7009bcbd203a44c230df630f8447bbc9`,
                  {
                    username: user,
                    password: password,
                    request_token: res.data.request_token
                  }
                )
                .then((response) => {
                  if (response.status == 200) {
                    sessionStorage.setItem('login', true);
                    history('/home');
                  }
                });
            })
            .catch((err) => {
              console.log(err);
              setErrorMessage(true);
              toast.error('Please Re-Enter!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 20000
              });
            });
        }
        toast.error('Please Re-Enter!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 20000
        });
        setErrorMessage(true);
        console.log(error);
      });
  };

  return (
    <div id="loginform">
      <h2 id="headerTitle">Please Login</h2>
      <div>
        <Input
          description="Username"
          placeholder="Enter your username"
          type="text"
          inputHandler={(e) => setUser(e.target.value)}
        />
        <Input
          description="Password"
          placeholder="Enter your password"
          type="password"
          inputHandler={(e) => setPassword(e.target.value)}
        />
        <Button title="Log in" type="submit" handleClick={handleLogin} />
        {errorMessage ? <span className="error_message">Please Enter Valid Credentials</span> : ''}
      </div>
    </div>
  );
};

export default Login;
