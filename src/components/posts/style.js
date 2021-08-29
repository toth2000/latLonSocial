import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    gap: "25px",
    marginTop: "15px",
    marginBottom: "45px",
  },
  mainContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },

  avatar: {
    cursor: "pointer",
    width: "64px",
    height: "64px",
    backgroundColor: "#3f51b5",
    position: "fixed",
    bottom: "55px",
    right: "55px",

    "@media screen and (max-width:500px)": {
      width: "48px",
      height: "48px",
      bottom: "25px",
      right: "25px",
    },
  },
});
