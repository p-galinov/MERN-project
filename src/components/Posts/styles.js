import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root:{
      height: '100vh',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: 'wrap',
  },
  loading:{ 
   position: "absolute",
   left: "0",
   right: "0",
   margin: "auto",
   marginTop: "-20vh",
   color: "white",
  },
}));