import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.8)",
    margin: "20px"
  },
  media: {
    height: 440,
  },
  title: {
      fontFamily: "Nunito",
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#fff"
  },
  desc: {
     color: "#ddd",
     fontFamily: "Nunito",
     fontSize: "1.1rem",
  },
  btn: {
      color: "#fff",
  },
  creator: {
      color: "#fff",
      fontStyle: "italic"
  },
  tags: {
      color: "rgb(252, 173, 104)",
  }
});