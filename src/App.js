import React, { useState, useEffect } from "react";
import { CssBaseline, Modal } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import useStyles from "./styles";

function App(){
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        dispatch(getPosts());
    }, [])

    const openForm = () => {
        setOpenModal(true);
    }

    const closeForm = () => {
        setOpenModal(false);
    }

    return(
        <div className={classes.root}>
            <CssBaseline />
            <Header openForm={openForm} />
            <Posts setCurrentId={setCurrentId} openForm={openForm} />
            <Modal
            open={openModal}
            className={classes.modal}
            >
            <Form currentId={currentId} setCurrentId={setCurrentId} closeForm={closeForm}/>
            </Modal>
        </div>
    )
}

export default App;