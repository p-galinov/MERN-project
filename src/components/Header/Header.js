import React, { useEffect, useState } from 'react';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import ExpandMoreicon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from 'react-scroll'
import useStyles from "./styles";

function Header({ openForm }){
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, [])

    return(
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>My<span className={classes.colorText}>Plovdiv.</span></h1>
                    <IconButton onClick={openForm} >
                       <span className={classes.addNew}>Add new</span>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} {...(checked ? {timeout: 1000}: {})} collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>Welcome to <br/> My<span className={classes.colorText}>Plovdiv.</span>
                    </h1>
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMoreicon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    )
}

export default Header;