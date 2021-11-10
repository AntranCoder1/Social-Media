import React from 'react';
import './Online.css';

const Online = ({ users }) => {
    return (
        <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
                <img className="rightBarProfileImg" src={users.profilePicture} alt="" />
                <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">{users.username}</span>
        </li>
    )
}

export default Online
