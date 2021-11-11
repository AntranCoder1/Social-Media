import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import axios from 'axios';
// import { Posts } from '../../dummyData'; 
import './Feed.css';

const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get('/posts/timeline/6184ae3535254409cc30ff17');
            setPosts(res.data);
        }
        fetchPost();
    }, []);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                { posts.map(item => (
                    <Post key={item.userId} post={item} />
                )) }
            </div>
        </div>
    )
}

export default Feed
