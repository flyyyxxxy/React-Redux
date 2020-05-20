import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/imageava.png';


const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount/props.pageSize);
        let pages = [];
        for(let i = 1; i<=pageCount; i++){
            pages.push(i);
        }
        
    return (
        <div>
            
            {pages.map(p =>  {
                return <span onClick={()=>{props.onPageChanged(p)}} className={props.currentPage === p && styles.selectedPage}>{p}</span>
            })}
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img className={styles.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                    </div>
                    <div>
                        {user.followed ? <button onClick={() => { props.unfollow(user.id) }}>Подписаться</button> : <button onClick={() => { props.follow(user.id) }}>Отписаться</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.city"}</div>
                        <div>{"user.location.country"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}

export default Users;