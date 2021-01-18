import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
  card: {
    width: 645,
    background: "rgba(0,0,0,0.8)",
    margin: "20px",
    fontFamily: "Nunito",
  },
  media: {
    height: 440,
  },
  title: {
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#fff"
  },
  description: {
     color: "#ddd",
     fontSize: "1.1rem",
  },
  button: {
      color: "#fff",
  },
  creator: {
      color: "#fff",
      fontStyle: "italic"
  },
  tags: {
      color: "rgb(252, 173, 104)",
  },
  '@media screen and (max-width: 750px)': {
    card: {
      width: "90%",
    },
  },
});