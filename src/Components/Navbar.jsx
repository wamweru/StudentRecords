import 'devextreme/dist/css/dx.dark.css';
import { Menu } from 'devextreme-react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from './UseAuth';

function Navibar() {
  const { user, logout } = UseAuth();
  const navigate = useNavigate();

  const commonItems = [
    { id: 1, text: 'Home', icon: 'home' },
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
    
  ];
  const userItem= {
     id: 7, 
     text: user ? user.username : 'User', 
     icon: 'user',
    items:[
      { id: 5, text: 'Logout', icon: 'logout' }
    ]
   }
  const loginItem = { id: 6, text: 'Login', icon: 'login' };

  const handleItemClick = (e) => {
    console.log(`Clicked on: ${e.itemData.text}`);
    switch (e.itemData.text) {
      case 'Home':
        navigate('/Welcome');
        break;
      case 'Logout':
        logout();
        navigate('/Bye');
        break;
      case 'Exam One':
        navigate('/ExamOne');
        break;
      case 'Exam Two':
        navigate('/ExamTwo');
        break;
      case 'Exam Three':
        navigate('/ExamThree');
        break;
      case 'Login':
        navigate('/Login');
        break;
      default:
        break;
    }
  };

  const menuItems = user ? [...commonItems, userItem] : [...commonItems, loginItem];

  return (
    <div className="navigation-bar flex">
      <Menu
        dataSource={menuItems}
        displayExpr="text"
        orientation="horizontal"
        itemsExpr="items"
        onItemClick={handleItemClick}
        width="100%"
      />
    </div>
  );
}

export default Navibar;
