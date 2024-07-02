import axios from "axios";

async function RegUser(newUser){
    const response = await axios.post('https://localhost:7143/API/Ranking/RegisterUser', newUser);
    return response.data;
};
export default RegUser;