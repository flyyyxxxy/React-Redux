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
import {initializeApp} from './redux/app-reducer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router";
import Loader from './components/loadderscomponent/Loader';

class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp();
}
  render() {
    if(!this.props.initialized){
      return <div className="containerSpiner">
        <div>
          <h1>Инициализация приложения</h1>
        </div>
        <Loader/>
      </div>
    }  

    return (
      <BrowserRouter>
        <div className="app-wraper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wraper-content">
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/login' render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

