import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/imageava.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            { pages.map(p => {
                return <span onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p && styles.selectedPage}>{p}</span>
            }
 )}
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={styles.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ? <button disabled={props.followingInProgress} onClick={() => {
                            props.unfollow(user.id)
                        }}>Отписаться</button> : <button disabled={props.followingInProgress} onClick={() => {
                            props.follow(user.id)
                        }}>Подписаться</button>}
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