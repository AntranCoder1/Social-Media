import React from 'react';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import './RightBar.css';

const RightBar = ({ profile }) => {

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
                <h4 className="rightBarTitle">User information</h4>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">City: </span>
                        <span className="rightBarInfoValue">HCM </span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">From: </span>
                        <span className="rightBarInfoValue">Cam Ranh </span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">Relationship: </span>
                        <span className="rightBarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightBarTitle">User friends</h4>
                <div className="rightBarFollowings">
                    <div className="rightBarFollowing">
                        <img 
                            className="rightBarFollowingImg" 
                            src="assets/person/1.jpeg"
                            alt=""
                        />
                        <span className="rightBarFollowingName">John Carter</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img 
                            className="rightBarFollowingImg" 
                            src="assets/person/2.jpeg"
                            alt=""
                        />
                        <span className="rightBarFollowingName">John Carter</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img 
                            className="rightBarFollowingImg" 
                            src="assets/person/3.jpeg"
                            alt=""
                        />
                        <span className="rightBarFollowingName">John Carter</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img 
                            className="rightBarFollowingImg" 
                            src="assets/person/4.jpeg"
                            alt=""
                        />
                        <span className="rightBarFollowingName">John Carter</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightBar">
            <div className="rightBarWrapper">
                { profile ? <ProfileRightBar /> : <HomeRightBar /> }
            </div>
        </div>
    )
}



export default RightBar
