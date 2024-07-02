import React, { useState } from 'react';
import 'devextreme/dist/css/dx.dark.css';
import { Button } from 'devextreme-react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from './UseAuth';

function Bye() {
  const { user, logout } = UseAuth();
  const navigate = useNavigate();
  //const [isLoggedOut, setIsLoggedOut] = useState(false);

  // const handleLogout = () => {
  //   logout();
  //   setIsLoggedOut(true);
  // };

  return (
    <div className="goodbye-container flex flex-col items-center justify-center">
     
        <div className="text-center">
          <h1 className="text-3xl font-bold">Goodbye!</h1>
          <p className="text-xl mt-4">We hope to see again</p>
          <Button
            text="Login"
            onClick={() => navigate('/Login')}
            className="mt-6"
          />
        </div>
     
        
       
     
    </div>
  );
}

export default Bye;