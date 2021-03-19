import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPost, getUsers } from '../redux/post'
import Post from './Post'

function PostContainer(props) {
    const {
        getPost,
        getUsers,
        loadingList,
        loadingUsers,
        list,
        users
    } = props;

    useEffect(() => {
        getPost(1)
        getUsers(1)
    }, [getPost, getUsers])
    
    useEffect(() => {
        console.log(">> list : ", list)
    }, [list])

    return (
        <div>
            <Post
                list={list}
                users={users}
                loadingList={loadingList}
                loadingUsers={loadingUsers}
            />        
        </div>
    )
}

export default connect(
    ({post, loading}) => ({
        list: post.list,
        users: post.users,
        loadingList: loading['post/GET_LIST'],
        loadingUsers: loading['post/GET_USERS']
    }),
    {
        getPost,
        getUsers
    }
)(PostContainer)
