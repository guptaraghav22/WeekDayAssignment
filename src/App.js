import './App.css';
import Homepage from './component/homePage';
import SideBar from './component/sideBar';
import { useState } from "react";


function App() {
  let [sideBarOpean, setSideBarOpean] = useState(true);

  return (
    <div className="App">
      <SideBar sideBarOpean={sideBarOpean} setSideBarOpean={setSideBarOpean} />
      <Homepage sideBarOpean={sideBarOpean} setSideBarOpean={setSideBarOpean}/>
    </div>
  );
}

export default App;
