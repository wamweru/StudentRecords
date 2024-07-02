import { useState } from 'react'
import './App.css'
import './index.css';
import Addmarks from './Components/Addmarks'
import ExamOne from './Components/ExamOne'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Navibar from './Components/Navbar'
import Navbar2 from './Components/Navbar2'
import Register from './Components/Register';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import Bye from './Components/Bye';
import ProtectedComponent from './Components/ProtectedComponent';


function App() {
  
  const queryClient=new QueryClient();

  return (
    <div className="bg-emerald-100 items-center justify-center min-h-screen flex flex-col">
   <QueryClientProvider client={queryClient}>
    
   <Router>
   
   <div className="flex-grow overflow-auto p-4">
   <Routes>
              <Route path="/" element={<Login/>} />     
              <Route path="/Login" element={<Login/>} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Welcome" element={<ProtectedComponent><Welcome /></ProtectedComponent>} />
              <Route path="/ExamOne" element={<ProtectedComponent><ExamOne /></ProtectedComponent>} />
              <Route path="/Addmarks" element={<ProtectedComponent><Addmarks /></ProtectedComponent>} />
              <Route path="/Bye" element={<ProtectedComponent><Bye /></ProtectedComponent>} />

      </Routes>
    </div>
    </Router>
    </QueryClientProvider>




</div>
   
  );
}

export default App;
 
      