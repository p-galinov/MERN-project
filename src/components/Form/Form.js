import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

function Form({ currentId, setCurrentId, closeForm }){
    const classes = useStyles();
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    useEffect(() => {
        if(post){
            setPostData(post);
        }
    }, [post])
    
    const handleSubmit = (e) =>{
       e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId, postData));
            clear();
        } else {
            dispatch(createPost(postData));
            clear();
        }
    }

    const clear = () => {
        setCurrentId(null);
        closeForm();
        setPostData({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',})
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {currentId ? `Editing ${postData.title}` :  "Make a new post"}
                </Typography>
                <TextField required name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value })} />
                <TextField required name="title"  variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value })} />
                <TextField required name="message" multiline rows={4} variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value })} />
                <TextField required name="tags"  variant="outlined" label="Tags e.g (cool,awesome)" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})} />
                <div className="classes.fileInput">
                    <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64})=>setPostData({...postData, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Close</Button>
            </form>
        </Paper>
    )
}

export default Form;