import React from 'react';
import {useDispatch} from "react-redux";
import {getUsersAction} from "../../action/actions";


function PostsPage() {
    const dispatch = useDispatch()

    const handleUsers = () => {
        const data = {
            name: "",
            email: ""
        }
        dispatch(getUsersAction(data))
    }

    return (
        <div>

            <input type="text" name="name"/>
            <input type="email" name="email"/>
            <button onClick={handleUsers}>post user</button>
        </div>
    )
}

export default PostsPage;