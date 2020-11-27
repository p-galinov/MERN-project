import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     height: "100vh",
     fontFamily: "Nunito",
    },
    appbar: {
        background: "none",
    },
    addNew: {
        color: "#fff",
        fontFamily: "Nunito",
        fontWeight: "bold",
    },
    appbarTitle: {
        flexGrow: '1',
    },
    appbarWrapper: {
        width: "80%",
        margin: "0 auto",
    },
    colorText: {
        color: "rgb(252, 173, 104)",
    },
    container: {
      textAlign: "center"  
    },
    title: {
        color: '#fff',
        textAlign: "center",
        fontSize: "4rem",
    },
    goDown: {
        color: "rgb(252, 173, 104)",
        fontSize: "4rem",
    }
}));