import React from 'react';
import ProfileInfo from './Profileinfo/ProfileInfo'
import MypostsContainer from './Mypost/MypostsConteiner';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { usersApi } from '../../api/api';


class ProfileAPI extends React.Component  {

    componentDidMount(){
      
      let userId = this.props.match.params.userId
      if(!userId){
        userId =2;
      }
      usersApi.getProfile(userId)
      .then(data => {
        this.props.setUserProfile(data);
      });
    }
    render(){
      return(
        <div>
          <ProfileInfo profile={this.props.profile}/>
          <MypostsContainer  />
        </div>
    );
    }
    
}

let mapStateToProps= (state)=> {
  return {
    profile : state.profilePage.profile
  }
}
let WithRouterUrlContainerComponent = withRouter(ProfileAPI);
const ProfileConteiner = connect(mapStateToProps, {setUserProfile})(WithRouterUrlContainerComponent);

export default ProfileConteiner;