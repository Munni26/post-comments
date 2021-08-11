import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 25,
    },
    pos: {
        marginBottom: 12,
    },
});

const PostDetails = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { ID } = useParams();

    const [post, setPost] = useState({});

    //console.log(post);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPost(data)
            })
    }, [])
    const { id, title, body, userId } = post;
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    UserId:
                </Typography>
                <Typography variant="h5" component="h2">
                    {userId}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    ID:
                </Typography>
                <Typography variant="h5" component="h2">
                    {id}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Title:
                </Typography>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Body:
                </Typography>
                <Typography variant="h5" component="h2">
                    {body}
                </Typography>

            </CardContent>
            <Comment />

        </Card>

    );
};

export default PostDetails;