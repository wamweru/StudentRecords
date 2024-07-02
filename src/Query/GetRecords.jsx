
import axios from 'axios';
async function GetRecords(){
     const records = await axios.get('https://localhost:7143/API/Ranking/StudentRanking');
    
     return records.data;
}
export default GetRecords;