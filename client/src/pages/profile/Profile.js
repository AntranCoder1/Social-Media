import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightBar/RightBar';
import SideBar from '../../components/sideBar/SideBar';
import TopBar from '../../components/topBar/TopBar';
import { useParams  } from 'react-router';
import './Profile.css';

const Profile = () => {

    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data.other);
        }
        fetchUser();
    }, [username]);

    return (
        <>
            <TopBar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img 
                                src={ user.coverPicture || PF + "person/noCover.png"} 
                                className="profileCoverImg"
                                alt=""
                            />
                            <img 
                                src={user.profifePicture || PF + "person/noAvatar.png"}
                                className="profileUserImg"
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <RightBar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
