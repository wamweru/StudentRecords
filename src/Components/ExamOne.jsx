import 'devextreme/dist/css/dx.dark.css';
//import Link from 'react-router-dom';
import Navibar from './Navbar';
import Navbar2 from './Navbar2';
import DataGrid,{ 
    Column,
    Pager,
    Paging,
    FilterRow,
    HeaderFilter,
    SearchPanel    
} from 'devextreme-react/data-grid';
import { useQuery} from '@tanstack/react-query';
import GetRecords from '../Query/GetRecords';
import { useParams } from 'react-router-dom';
import { UseAuth } from './UseAuth';

function ExamOne (){
    const {user}=UseAuth();
    const {data}=useQuery({
        queryKey:['fetch-records'],
        queryFn:GetRecords
    })
    
    const notAuth="Log In to view ExamOne results"
    return(
        <div className="flex flex-col">
        <div className="flex justify-end basis-1/4 m-8 ">
       <Navibar/>
     </div>
   
     <div className="flex flex-row ">
      
   
       <div className="basis-7/8  border-t-4 border-l-4 border-zinc-700">
       {user ? (
       <DataGrid
        dataSource={data}
        showBorders={true}
        rowAlternationEnabled={true}
        columnAutoWidth={true}
        searchPanel={{ visible: true }}
        headerFilter={{ visible: true }}
        filterRow={{ visible: true }}>

        <Paging defaultPageSize={20} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={[20, 50]}
          showInfo={true}
        />

        <Column dataField="studentId" caption="Reg Number" width={50} />
        <Column dataField="name" caption="Name" />
        <Column dataField="examRecord[0].mathScore" caption="Maths" />
        <Column dataField="examRecord[0].englishScore" caption="English" />
        <Column dataField="examRecord[0].swahiliScore" caption="Kiswahili" />
        <Column dataField="total" caption="Total" />
        <Column dataField="grade" caption="Grade" />
        <Column dataField="position" caption="Position" />

        </DataGrid>
         ):(
          
             <DataGrid
        //dataSource={notAuth}
        showBorders={true}
        rowAlternationEnabled={true}
        columnAutoWidth={true}
        searchPanel={{ visible: true }}
        headerFilter={{ visible: true }}
        filterRow={{ visible: true }}>

        <Paging defaultPageSize={20} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={[20, 50]}
          showInfo={true}
        />

        <Column dataField="studentId" caption="Reg Number" width={50} />
        <Column dataField="name" caption="Name" />
        <Column dataField="examRecord[0].mathScore" caption="Maths" />
        <Column dataField="examRecord[0].englishScore" caption="English" />
        <Column dataField="examRecord[0].swahiliScore" caption="Kiswahili" />
        <Column dataField="total" caption="Total" />
        <Column dataField="grade" caption="Grade" />
        <Column dataField="position" caption="Position" />
          <div><h1>Log In to View Exam One Results</h1></div>
        </DataGrid>
            
        )} 
       </div>
       

       
     </div>
   </div>
        
      
       
    )
}
export default ExamOne;