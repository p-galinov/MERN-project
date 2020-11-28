import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Collapse} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import useStyles from "./postStyles";

function Post({ post, setCurrentId, checked, openForm }){
    const classes = useStyles();
    const dispatch = useDispatch();

    const editPost = () => {
        setCurrentId(post._id);
        openForm();
    }

    return(
        <Collapse in={checked} {...(checked ? {timeout: 1000}: {})} collapsedHeight={0}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={post.selectedFile}
            title={post.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
              {post.title}
            </Typography>
            <Typography variant="body2" className={classes.tags}>
                    {post.tags.map((tag) => `#${tag} `)}
            </Typography>
            <Typography variant="h6" className={classes.creator}>
               Created by {post.creator}
           </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
              {post.message}
            </Typography>
          </CardContent>
        <CardActions>
            <Button size="small" className={classes.button} onClick={() => dispatch(likePost(post._id))}>
                <ThumbUpAltIcon fontSize="small" />
                &nbsp; Like &nbsp;
                {post.likeCount}
            </Button>
            <Button size="small" className={classes.button} onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" />
                Delete
            </Button>
            <Button size="small" className={classes.button} onClick={editPost}>
                <MoreHorizIcon fontSize="small"/>Edit
            </Button>
        </CardActions>
      </Card>
      </Collapse>
    )
}

export default Post;