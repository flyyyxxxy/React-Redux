import React from 'react';
import classes from './Profile.module.css';
import Myposts from './Mypost/Myposts';
import ProfileInfo from './Profileinfo/ProfileInfo'
import MypostsContainer from './Mypost/MypostsConteiner';

function Profile (props) {

  
    return(
        <div>
          <ProfileInfo/>
          <MypostsContainer store={props.store}  />
        </div>
    );
}



export default Profile;