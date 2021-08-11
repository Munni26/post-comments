import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';

const Comment = () => {
    const { ID } = useParams();
    const [comment, setComment] = useState([]);
    //console.log(comment);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${ID}`)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setComment(data);
            })
    }, [])
    return (
        <div>
            <h1>All Comments For This PostID:{ID}</h1>
            {
                comment.map(comment => {
                    return <CommentDetails comment={comment}></CommentDetails>
                })
            }
        </div>
    );
};

export default Comment;