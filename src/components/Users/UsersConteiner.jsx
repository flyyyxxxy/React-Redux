import { connect } from 'react-redux'
import React from 'react';
import { getUsers, setFollowingProgress, follow, unfollow, setCurrentPage, } from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../loadderscomponent/Loader';
import { compose } from 'redux';
import {withAuthRedirect} from './../../hoc/withAuthRedirect'
import { getPageSize, getUsersSelector, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingProgress} from '../../redux/users-selectors';

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
                {this.props.isFetching ? <Loader /> :  <Users totalUsersCount={this.props.totalUsersCount}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    pageSize={this.props.pageSize}
                    followingInProgress={this.props.followingInProgress}
                     />}
               
            </div>
        );


    }

}


// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingProgress(state)
    }
}







export default compose(
        connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setFollowingProgress,
        getUsers,
    }),
    withAuthRedirect
)(UsersAPI);