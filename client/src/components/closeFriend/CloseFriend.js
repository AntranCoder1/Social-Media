import React from 'react';
import './CloseFriend.css';

const CloseFriend = ({ user }) => {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="sidebarFriend">
            <img className="sidebarImg" src={PF + user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriend
