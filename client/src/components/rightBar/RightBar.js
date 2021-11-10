import React from 'react';
import './RightBar.css';

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="rightBarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img className="rightBarAd" src="assets/ad.png" alt="" />
                <h4 className="rightBarTitle">Online friends</h4>
                <ul className="rightBarFriendList">
                    <li className="rightBarFriend">
                        <div className="rightBarProfileImgContainer">
                            <img className="rightBarProfileImg" src="assets/person/3.jpeg" alt="" />
                            <span className="rightBarOnline"></span>
                        </div>
                        <span className="rightBarUsername">John Carter</span>
                    </li>
                    <li className="rightBarFriend">
                        <div className="rightBarProfileImgContainer">
                            <img className="rightBarProfileImg" src="assets/person/2.jpeg" alt="" />
                            <span className="rightBarOnline"></span>
                        </div>
                        <span className="rightBarUsername">John Carter</span>
                    </li>
                    <li className="rightBarFriend">
                        <div className="rightBarProfileImgContainer">
                            <img className="rightBarProfileImg" src="assets/person/4.jpeg" alt="" />
                            <span className="rightBarOnline"></span>
                        </div>
                        <span className="rightBarUsername">John Carter</span>
                    </li>
                    <li className="rightBarFriend">
                        <div className="rightBarProfileImgContainer">
                            <img className="rightBarProfileImg" src="assets/person/1.jpeg" alt="" />
                            <span className="rightBarOnline"></span>
                        </div>
                        <span className="rightBarUsername">John Carter</span>
                    </li>
                    <li className="rightBarFriend">
                        <div className="rightBarProfileImgContainer">
                            <img className="rightBarProfileImg" src="assets/person/7.jpeg" alt="" />
                            <span className="rightBarOnline"></span>
                        </div>
                        <span className="rightBarUsername">John Carter</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}



export default RightBar
