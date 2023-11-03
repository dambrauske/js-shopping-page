import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "../features/userSlice.jsx";

const UserDropdown = ({ toggleUserDropdown }) => {

    const currentUser = useSelector(state => state.user.currentUser)

    const dispatch = useDispatch()

    const logout = () => {
        sessionStorage.clear()
        dispatch(setCurrentUser(undefined))
    }

    return (
        <div
            className={`absolute ${currentUser ? `-bottom-8` : `-bottom-20`} right-0 w-48 bg-white border border-gray-200 rounded shadow-lg`}
            onMouseLeave={toggleUserDropdown}
        >
            <ul>
                {
                    !currentUser ?
                    <li>
                        <Link to="/login"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">
                            Login
                        </Link>
                    </li>

                        :
                        <li>
                            <div
                                onClick={logout}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">
                                Logout</div>
                        </li>

                }

                {
                    !currentUser &&
                    <li>
                        <Link to="/register"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">
                            Register
                        </Link>
                    </li>
                }

            </ul>
        </div>
    );
};

export default UserDropdown;
