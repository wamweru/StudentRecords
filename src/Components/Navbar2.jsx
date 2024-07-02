import 'devextreme/dist/css/dx.light.css';
import { Menu } from 'devextreme-react';


function Navbar2(){

    const menuItems = [
        { id: 1, text: 'Top Students', icon: 'home' },
        { id: 2, text: 'Products', icon: 'product' },
        { 
          id: 3, 
          text: 'Exams', 
          icon: 'folder',
          items: [
            { id: 31, text: 'Exam One' },
            { id: 32, text: 'Exam Two' },
            { id: 33, text: 'Exam Three' }
          ]
        },
        { id: 4, text: 'About', icon: 'info' },
        { id: 5, text: 'Contact', icon: 'email' }
      ];
      
      const handleItemClick = (e) => {
        console.log(`Clicked on: ${e.itemData.text}`);
        // You can add navigation logic here, like using React Router
      };

    return(
        <div className="navigation-bar">
            <Menu
             dataSource={menuItems}
             displayExpr="text"
             orientation="vertical"
             itemsExpr="items"
             onItemClick={handleItemClick}
             width="100%"
            >

            </Menu>
        </div>
    )
}
export default Navbar2;