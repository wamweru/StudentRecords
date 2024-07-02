import examimage from '../images/images.jpg';
import React from 'react';
import Navibar from './Navbar';
import Navbar2 from './Navbar2';
import {TileView} from 'devextreme-react/tile-view';
import { useNavigate } from 'react-router-dom';
import {AcademicCapIcon, UserGroupIcon, CalendarIcon, DocumentChartBarIcon} from '@heroicons/react/24/solid';
import { UseAuth } from './UseAuth';

function Welcome (){


  const navigate = useNavigate();
  const {user}=UseAuth();
  const handleTileClick = (path) => {
    navigate(path);
  };
    return(
        <div className="flex flex-col">
        <div className="flex justify-end basis-1/4 m-8 ">
       <Navibar/>
     </div>
   
     <div className="flex flex-row ">
      
   
       <div className="basis-full md:basis-7/8 border-2  border-zinc-700 p-2 mx-2 md:mx-8 min-h-screen flex flex-col">
     {user ? (
      <div>
       <div>
            <img src={examimage} alt="Welcome Image" className="w-full md:w-full"/>
        </div>
          <div>
            <h2>
                Keep track of Students' Perfomance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 p-4">
              <div
                className="bg-blue-500 p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 flex items-center justify-center"
                onClick={() => handleTileClick('/students')}
              >
               <AcademicCapIcon className="h-16 w-16 text-white mb-2" />
                <span className="text-white text-4xl font-semibold">Top Students</span>
              </div>
              <div
                className="bg-green-500 p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 flex items-center justify-center"
                onClick={() => handleTileClick('/courses')}
              >
                <UserGroupIcon className="h-16 w-16 text-white" />
                <span className="text-white text-4xl font-semibold">Results Per Student</span>
              </div>
              <div
                className="bg-yellow-500 p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 flex items-center justify-center"
                onClick={() => handleTileClick('/grades')}
              >
                <CalendarIcon className="h-16 w-16 text-white" />
                <span className="text-white text-4xl font-semibold">Term Dates</span>
              </div>
              <div
                className="bg-red-500 p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 flex items-center justify-center"
                onClick={() => handleTileClick('/ExamOne')}
              >
               <DocumentChartBarIcon className="h-16 w-16 text-white" />
                <span className="text-white text-4xl font-semibold">Reports</span>
              </div>
           
            </div>
          </div>
        </div>
           ):(
            <div>
              <h2 className="font-mono">Log In To access this page</h2>
            </div>
          )}
       </div>
      
     
      
   </div>
    </div>   


       
    );
}
export default Welcome;