import { connect } from 'react-redux'
import React from 'react';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersCountAC, setFetchingAC } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Loader from '../loadderscomponent/Loader';


class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {

            this.props.setUsers(response.data.items);
            this.props.setUsersCount(response.data.totalCount)
            this.props.setFetching(false);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {


            this.props.setUsers(response.data.items);
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
                        pageSize={this.props.pageSize} />
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
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersCount: (totalCount) => {
            dispatch(setUsersCountAC(totalCount))
        },
        setFetching: (fetching) => {
            dispatch(setFetchingAC(fetching));
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;