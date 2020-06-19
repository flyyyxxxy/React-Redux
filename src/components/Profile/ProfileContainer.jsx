import React from 'react';
import ProfileInfo from './Profileinfo/ProfileInfo'
import MypostsContainer from './Mypost/MypostsConteiner';
import { connect } from 'react-redux';
import {getProfilePage, getProfileStatus, updateProfileStatus} from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component  {

    componentDidMount(){
      
      let userId = this.props.match.params.userId
      if(!userId){
        userId = this.props.autorizedUserId;
      }
      this.props.getProfilePage(userId);
      this.props.getProfileStatus(userId);
      
    }
    
    render(){
      
      
      return(
        <div>
          <ProfileInfo profile={this.props.profile} status={this.props.status}
          updateProfileStatus={this.props.updateProfileStatus}/>
          <MypostsContainer  />
        </div>
    );
    }
    
}

let mapStateToProps= (state)=> {
  return {
    profile : state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, {getProfilePage,getProfileStatus, updateProfileStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
