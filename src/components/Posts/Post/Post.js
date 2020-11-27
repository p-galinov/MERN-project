import React from "react";
import useStyles from "./styles";
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Collapse} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

function Post({ post, setCurrentId, checked, openForm }){
    const classes = useStyles();
    const dispatch = useDispatch();

    const editPost = () => {
        setCurrentId(post._id);
        openForm();
    }

    return(
        <Collapse in={checked} {...(checked ? {timeout: 1000}: {})} collapsedHeight={0}>
        <Card className={classes.root}>
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
            <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
              {post.message}
            </Typography>
          </CardContent>
        <CardActions>
            <Button size="small" className={classes.btn} onClick={() => dispatch(likePost(post._id))}>
                <ThumbUpAltIcon fontSize="small" />
                &nbsp; Like &nbsp;
                {post.likeCount}
            </Button>
            <Button size="small" className={classes.btn} onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" />
                Delete
            </Button>
            <Button size="small" className={classes.btn} onClick={editPost}>
                <MoreHorizIcon fontSize="small"/>Edit
            </Button>
        </CardActions>
      </Card>
      </Collapse>
    )
}

export default Post;