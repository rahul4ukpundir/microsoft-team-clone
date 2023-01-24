import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import SideBar from "./component/SideBar";
import Chats from './Chats';
function App() {
  return (
    <div className="App">
      <div className='app_header'>
        <Header />
      </div>
      <div className='app_body'>
         <SideBar />
         <Chats />
      </div>

      
    </div>
  );
}

export default App;
