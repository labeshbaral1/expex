import './App.css';
import Header from "./components/Header.js"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Signin from "./components/Landing/Signin"
import Signup from "./components/Landing/Signup" 
import Overview from './components/Overview';
import LinkAccount from './components/LinkAccount';
import Transactions from './components/Transactions';
import Budget from "./components/Budget"
import History from './components/History';
import Sidebar from "./components/Sidebar"
import SidebarRight from "./components/SidebarRight"
import Help from "./components/Help" 
import Error from "./components/Error.js"
import {useState} from "react"
import {useSelector} from "react-redux"
function App() {

    const loggedIn = useSelector(state => state.loggedIn.isLogged)

  
  return (
    <div className="App">

      
      <Router>

        {loggedIn && <Header/>}

        <Routes>
          
        <Route exact path="" element=

        {loggedIn ? <LinkAccount/> : 
          <Signin/> 
        }
        

        />
          <Route exact path='linkAccount' element= {<LinkAccount/>}/>

          <Route exact path='signin' element= {<Signin/>}/>

        
          <Route exact path='signup' element= {<Signup/>}/>


          <Route exact path='overview' element= {
          
          <div className='content-container'>
            <Sidebar/>
            <div className="content">
               <Overview/>
            </div>
            <SidebarRight/>
          </div>

        }/>

          <Route exact path='transactions' element={<Transactions/>}/>
          <Route exact path='budget' element={<Budget/>}/>
          <Route exact path='history' element={<History/>}/>
          <Route exact path='error' element={<Error/>}/>
        </Routes>
        
      
      </Router> 
      

    </div>
  );
}

export default App;
