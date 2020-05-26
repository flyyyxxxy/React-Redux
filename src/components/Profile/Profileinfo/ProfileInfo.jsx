import React from 'react';
import classes from './ProfileInfo.module.css';
import Loader from '../../loadderscomponent/Loader';
import ProfileStatus from './ProfileStatus';




function ProfileInfo(props) {
    
    if (!props.profile){
        return(
            <Loader/>
        );   
    } 
        
    return (
        
        <div>
            <div className={classes.content}>
                {/* <img src='https://lux.fm/uploads/800x450_DIR/media_news/2019/12/5e07071a44b8f090207200.jpg' alt='' /> */}
            </div>
            <div className={classes.discriptionBlock}>
                <img src={props.profile.photos.large} alt=''/>
                <div><ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/> </div>
            </div>
        </div>
    );
}




export default ProfileInfo;