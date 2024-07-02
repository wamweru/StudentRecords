import React, { useState } from 'react';
import 'devextreme/dist/css/dx.dark.css';
import {TextBox } from 'devextreme-react/text-box';
import { Validator, RequiredRule, EmailRule } from 'devextreme-react/validator';
import {Button} from 'devextreme-react';
import { useNavigate, Link } from 'react-router-dom';
import { UseAuth } from './UseAuth';
import { useMutation, useQuery } from '@tanstack/react-query';
import GetUser from '../Query/GetUser';
import toast from 'react-hot-toast';
import {useMsal} from '@azure/msal-react';
import { loginRequest } from '../authConfig';

function Login () {
  const { instance } = useMsal();
  const {login } =UseAuth();
  const [formData, setFormData]=useState({
    username:"",
    password:"",
    
})
const handleFormDataChange = (name, value) => {
  setFormData({ ...formData, [name]: value});
};


const loginMutation = useMutation({
  mutationFn: ({ username, password }) => GetUser(username, password),
  onSuccess: (data) => {
    if (data === true) {
      toast.success("Logging successful");
      login({username:formData.username})
      handleNavigate();
    } else {

      toast.error("Username or password is invalid!");
    }
  },
  onError: (error) => {
    if (formData.username === "")
        {
           toast.error("Fill all Fields")
         }
       else if (formData.password === "")
        {
         toast.error("Fill all Fields")
       }
       else{
    toast.error("Error Logging In!!");
    console.log({ error });
       };
  },
});

  const navigate = useNavigate();
    
  const handleNavigate = () =>{
      navigate('/Welcome')
   };

  const handleLogin = () => {
    instance.loginPopup(loginRequest)
      .then((response) => {
        // Handle successful authentication
        const account = response.account;
        login({ username: account.username });

        // Optionally, trigger your mutation if you need to verify with your backend
        loginMutation.mutate({
          username: account.username,
          password: '', // Password isn't needed for Azure AD login
        });

        handleNavigate();
      })
      .catch((error) => {
        // Handle authentication errors
        toast.error("Error Logging In!!");
        console.log({ error });
      });

    // 
    // else{
    // loginMutation.mutate({
    //   username: formData.username,
    //   password: formData.password,
    // });
    //};
  };

  return (
    <div className="flex flex-col items-center justify-center w-max  bg-slate-200 border-4 border-stone-600 rounded">
      <h2 className="font-mono">Log In</h2>
      <form className="justify-self-center">
        <div className="form-group m-6">
          <TextBox
            value={formData.username}
            onValueChanged={(e) => handleFormDataChange ('username', e.value)}
            placeholder="User Name"
          >
            <Validator>
              <RequiredRule message="Username is required" />
              
            </Validator>
          </TextBox>
        </div>
        <div className="form-group m-6">
          <TextBox
            value={formData.password}
            onValueChanged={(e) => handleFormDataChange ('password', e.value)}
            placeholder="Password"
            mode="password"
          >
            <Validator>
              <RequiredRule message="Password is required" />
            </Validator>
          </TextBox>
        </div>
        <div className="form-group m-6">
        <Button text="Login"  onClick={handleLogin} />
        </div>
        
      </form>
      <div className="m-6">
        <p>Don't have an account? <Link to={'/Register'} className="no-underline hover:underline hover:text-cyan-700">Register here</Link></p>
        
      </div>
    </div>
  );
};

export default Login;