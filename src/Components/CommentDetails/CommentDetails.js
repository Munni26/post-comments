import React, { useEffect, useState } from 'react';

const CommentDetails = ({ comment }) => {
    const commentStyle = {
        border: "1px solid blue",
        padding: '10px',
        margin: '10px'
    }
    const { name, email, body } = comment;

    // const [pic, setPic] = useState([]);
    // useEffect(() => {
    //     fetch('https://randomuser.me/')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])
    return (
        <div style={commentStyle}>
            <h3>Commented By(name): {name}</h3>
            <h5>Commented By(email): {email}</h5>
            <p>Comment Body: {body}</p>
        </div>
    );
};

export default CommentDetails;