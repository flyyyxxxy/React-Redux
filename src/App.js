import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HederContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersConteiner'
import Login from './components/Login/Login'


function App(props) {
  
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <HeaderContainer/>
        <Navbar />
        
        <div className="app-wraper-content">
          <Route path='/dialogs' render={()=><DialogsContainer  />}/>
            <Route path='/profile/:userId?' render={()=><ProfileContainer />}/>
          <Route  path='/users' render={()=><UsersContainer/>}/>
          <Route  path='/news' render={()=><News/>}/>
          <Route   path='/music' render={()=><Music/>}/>
          <Route  path='/settings' render={()=><Settings/>}/>
          <Route  path='/login' render={()=><Login/>}/>
          
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
