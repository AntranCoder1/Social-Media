import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from "@material-ui/icons";
import './RightBar.css';

const RightBar = ({ user }) => {

    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
    const [friend, setFriend] = useState([]);
    const { user: currentUser } = useContext(AuthContext);
    const [followed, setFollowed] = useState(false);

    useEffect(() => {

    })

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get('/users/friends/' + user._id);
                setFriend(friendList.data);
            } catch (error) {}
        }
        getFriends();
    },[user]);

    const handleClick = () => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className="rightBarAd" src="assets/ad.png" alt="" />
                <h4 className="rightBarTitle">Online friends</h4>
                <ul className="rightBarFriendList">
                    { Users.map(item => (
                        <Online key={item.id} users={item} />
                    )) }
                </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
                { user.username !== currentUser.username && (
                    <button className="rightBarFollowButton" onClick={handleClick}>
                        Follow <Add />
                    </button>
                ) }
                <h4 className="rightBarTitle">User information</h4>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">City: </span>
                        <span className="rightBarInfoValue">{user.city} </span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">From: </span>
                        <span className="rightBarInfoValue">{user.from} </span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">Relationship: </span>
                        <span className="rightBarInfoValue">
                            {
                                user.relationship === 1
                                    ? "Single"
                                    : user.relationship === 1
                                    ? "Married"
                                    : "-"
                            }
                        </span>
                    </div>
                </div>
                <h4 className="rightBarTitle">User friends</h4>
                <div className="rightBarFollowings">
                    {friend.map((item) => (
                        <div className="rightBarFollowing">
                            <img 
                                className="rightBarFollowingImg" 
                                src={item.profifePicture ? PF + item.profifePicture : PF + "person/noAvatar.png" }
                                alt=""
                            />
                            <span className="rightBarFollowingName">{item.username}</span>
                        </div>
                    ))}
                </div>
            </>
        )
    }

    return (
        <div className="rightBar">
            <div className="rightBarWrapper">
                { user ? <ProfileRightBar /> : <HomeRightBar /> }
            </div>
        </div>
    )
}



export default RightBar
