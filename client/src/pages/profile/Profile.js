import React from 'react';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightBar/RightBar';
import SideBar from '../../components/sideBar/SideBar';
import TopBar from '../../components/topBar/TopBar';
import './Profile.css';

const Profile = () => {

    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <>
            <TopBar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img 
                                src={`${PF}post/3.jpeg`} 
                                className="profileCoverImg"
                                alt=""
                            />
                            <img 
                                src={`${PF}person/7.jpeg`}
                                className="profileUserImg"
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
