import React from 'react';
import { Users } from '../../dummyData';
import Online from '../online/Online';
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
                    { Users.map(item => (
                        <Online key={item.id} users={item} />
                    )) }
                </ul>
            </div>
        </div>
    )
}



export default RightBar
