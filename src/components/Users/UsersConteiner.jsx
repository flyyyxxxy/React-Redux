import { connect } from 'react-redux'
import React from 'react';
import { setFollowingProgress, follow, unfollow, setUsers, setCurrentPage, setUsersCount, setFetching } from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../loadderscomponent/Loader';
import {usersApi} from './../../api/api';


class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setUsersCount(data.totalCount)
            this.props.setFetching(false);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setFetching(false);
        });
    }

    render() {


        
            return (
                <div>
                    {this.props.isFetching ? <Loader/>: null}
                    <Users totalUsersCount={this.props.totalUsersCount}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        pageSize={this.props.pageSize}
                        followingInProgress={this.props.followingInProgress}
                        setFollowingProgress={this.props.setFollowingProgress} />
                </div>
            );
        
        
    }

}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress : state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setUsersCount: (totalCount) => {
//             dispatch(setUsersCountAC(totalCount))
//         },
//         setFetching: (fetching) => {
//             dispatch(setFetchingAC(fetching));
//         }
//     }
// }


const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersCount,
    setFetching,
    setFollowingProgress
    })(UsersAPI);

export default UsersContainer;