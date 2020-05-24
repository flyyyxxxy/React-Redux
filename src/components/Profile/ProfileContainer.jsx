import React from 'react';
import ProfileInfo from './Profileinfo/ProfileInfo'
import MypostsContainer from './Mypost/MypostsConteiner';
import { connect } from 'react-redux';
import {getProfilePage} from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';



class ProfileAPI extends React.Component  {

    componentDidMount(){
      
      let userId = this.props.match.params.userId
      this.props.getProfilePage(userId);
    }
    render(){
      if(props.isAuth ===false){
            return <Redirect to={'/login'}/>
        }
      return(
        <div>
          <ProfileInfo profile={this.props.profile}
          isAuth={this.props.isAuth}/>
          <MypostsContainer  />
        </div>
    );
    }
    
}

let mapStateToProps= (state)=> {
  return {
    profile : state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}
let WithRouterUrlContainerComponent = withRouter(ProfileAPI);
const ProfileConteiner = connect(mapStateToProps, {getProfilePage})(WithRouterUrlContainerComponent);

export default ProfileConteiner;