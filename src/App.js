import {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  const openSidebar = () => {
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={openSidebar} openSidebar={openSidebar}/>
      <Sidebar sidebarOpen={openSidebar} openSidebar={openSidebar}/>
      <h1>React dashboard</h1>
    </div>
  );
}

export default App;
