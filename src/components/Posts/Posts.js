import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import useWindowPosition from "../../hooks/useWindowPosition";
import Post from "./Post/Post";
import useStyles from "./styles";

function Posts({ setCurrentId, openForm }){
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    const checked = useWindowPosition('header');

    return(
       !posts.length ? <CircularProgress className={classes.loading} /> : (
          <div className={classes.root} id="place-to-visit">
            {posts.map((post) => (
                    <Post post={post} setCurrentId={setCurrentId} checked={checked} key={post._id} openForm={openForm}/>
                ))} 
          </div>
       )
    );
}

export default Posts;