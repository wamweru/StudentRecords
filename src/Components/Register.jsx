import React, { useState } from 'react';
import 'devextreme/dist/css/dx.dark.css';
import {TextBox } from 'devextreme-react/text-box';
import { Validator, RequiredRule, EmailRule } from 'devextreme-react/validator';
import {Button} from 'devextreme-react';
import { useNavigate, Link } from 'react-router-dom';
import { UseAuth } from './UseAuth';
import { useMutation } from '@tanstack/react-query';
import RegUser from '../Query/RegUser';
import toast from 'react-hot-toast';

function Register () {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [conPassword, setConPassword] = useState('');
  const {reguser } =UseAuth();
    const [formData, setFormData]=useState({
        username:"",
        email:"",
        password:"",
        conPassword:""
    })

    //const QRegUser = RegUser;
  const createMutation = useMutation({
    mutationFn: RegUser,
    onSuccess:()=>{
        //Console.log("successful");
       
        toast.success("User Added Successfully")
        // setFormData=({
        //     username:"",
        //    email:"",
        //    password:"",
        //    conPassword:""})
        handleNavigate();
    },
    onError:(error)=>{
        if (error.response.data === "E1") {
            toast.error("Username already exists");
          } 
        else{
        toast.error("Error Registering User!!")
     }
}
  });

  const handleFormDataChange = (name, value) => {
    setFormData({ ...formData, [name]: value});
  };
  
  const navigate = useNavigate({ from: '/Register'});
    
  const handleNavigate = () =>{
      navigate('/Login')
   }

  const handleRegister = () => {
   
   if (formData.password == formData.conPassword)
   {
       const newUser ={
        Name: formData.username, 
        Email: formData.email, 
        Password: formData.password
    };
        createMutation.mutate(newUser);
       
   }
   else
   {
    toast.error("Confirm password is not the same as Password")
    console.log("passnot same as conf")
   }
   // const userData = {username}
   
    
  };

  return (
    <div className=" w-max justify-items-center bg-slate-200 border-4 border-stone-600 rounded">
      <h2 className="font-mono">Register</h2>
      <form className="justify-self-center">
        <div className="form-group m-6">
          <TextBox
          name='username'
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
          name='email'
            value={formData.email}
            onValueChanged={(e) => handleFormDataChange ('email', e.value)}
            placeholder="Email"
          >
            <Validator>
              <RequiredRule message="Email is required" />
              
            </Validator>
          </TextBox>
        </div>
        <div className="form-group m-6">
          <TextBox
          name='password'
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
          <TextBox
          name='conPassword'
            value={formData.conPassword}
            onValueChanged={(e) => handleFormDataChange ('conPassword', e.value)}
            placeholder="Confirm Password"
            mode="password"
          >
            <Validator>
              <RequiredRule message="Confirm Password is required" />
            </Validator>
          </TextBox>
        </div>
        <div className="form-group m-6">
        <Button text="Register"  onClick={handleRegister} />
        </div>
        
      </form>
      <div className="m-6">
        <p>Already have an account? <Link to={'/Login'} className="no-underline hover:underline hover:text-cyan-700">Log In here</Link></p>
      </div>
    </div>
  );
};

export default Register;