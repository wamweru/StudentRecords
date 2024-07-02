
import axios from 'axios';
import { useParams } from 'react-router-dom';
async function GetUser(username, password){
    
     const { data } = await axios.get(`https://localhost:7143/API/Ranking/ValidateUserLogin?Name=${username}&Password=${password}`);
    
     return data;
}
export default GetUser;