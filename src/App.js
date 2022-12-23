import './App.css';
import Header from "./components/Header.js"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Overview from './components/Overview';
import LinkAccount from './components/LinkAccount';
import Transactions from './components/Transactions';
import Budget from "./components/Budget"
import History from './components/History';
import Sidebar from "./components/Sidebar"
import SidebarRight from "./components/SidebarRight"
import Help from "./components/Help" 
import Error from "./components/Error.js"
function App() {
  return (
    <div className="App">

      
      <Router>
        <Header/>
        <Sidebar/>
        <SidebarRight/>
        <Routes>
        <Route exact path='' element={<LinkAccount/>}/>
          <Route exact path='overview' element={<Overview/>}/>
          <Route exact path='transactions' element={<Transactions/>}/>
          <Route exact path='budget' element={<Budget/>}/>
          <Route exact path='history' element={<History/>}/>
          <Route exact path='error' element={<Error/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router> 
      

    </div>
  );
}

export default App;
