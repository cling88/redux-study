import React, { useEffect } from 'react'

function Post(props) {
    const {
        loadingList,
        loadingUsers,
        list,
        users
    } = props; 

    useEffect(() => {
        console.log(">> list ", list)
    }, [])

    return (
        <div>
            <section>
                <h2>POST</h2>
                { loadingList && 'LOADING...' }
                {
                    !loadingList && list && (
                        <div>
                            <h3>{ list.title }</h3>
                            <h2>{ list.body }</h2>
                        </div>
                    )
                }
            </section>
            <br/><hr/><br/>
            <section>
                <h2>POST</h2>
                { loadingUsers && 'LOADING...' }
                {
                    !loadingUsers && users && (
                        <ul>
                            {
                                users.map(user => (
                                    <li key={user.id}>{ user.name }aa ({ user.email })</li>
                                ))
                            }
                        </ul>
                    )
                }
            </section>
        </div>
    )
}

export default Post
