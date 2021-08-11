import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post, setPost] = useState([]);
    //console.log(post)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setPost(data);
            })
    }, [])
    return (
        <div className="container">
            <h2 style={{ textAlign: 'center' }}>Total Post: {post.length}</h2>
            {
                post.map(post => {
                    return <Post post={post} key={post.id}></Post>
                })
            }
        </div>
    );
};

export default Home;