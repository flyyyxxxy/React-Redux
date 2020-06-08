import { connect } from 'react-redux'
import React from 'react';
import { getUsers, setFollowingProgress, follow, unfollow, setCurrentPage, } from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../loadderscomponent/Loader';
import { compose } from 'redux';
import {withAuthRedirect} from './../../hoc/withAuthRedirect'

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Loader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    pageSize={this.props.pageSize}
                    followingInProgress={this.props.followingInProgress}
                     />
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
        followingInProgress: state.usersPage.followingInProgress
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






export default compose(
        connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setFollowingProgress,
        getUsers,
    }),
    withAuthRedirect
)(Users);