import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import { Posts } from '../../dummyData'; 
import './Feed.css';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                { Posts.map(item => (
                    <Post key={item.id} post={item} />
                )) }
            </div>
        </div>
    )
}

export default Feed
