import React, { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { getUsers } from './store/reducers/ActionCreators'
import { PostContainer } from './components/PostContainer'
import { PostContainer2 } from './components/PostContainer2'


function App() {

    const dispatch = useAppDispatch()
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div className="App">
            <h1>Users</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>Loading users error: {error}</p>}
            {users.length > 0 &&
                <ul>
                    {users.map(user =>
                        <li key={user.id}>
                            {user.name}
                        </li>
                    )}
                </ul>
            }
            <h1>Posts</h1>
            <div style={{display: 'flex'}}>
                <PostContainer/>
                <PostContainer2/>
            </div>

        </div>
    );
}

export default App;
