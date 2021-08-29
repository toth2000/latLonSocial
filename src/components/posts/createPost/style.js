import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  grid: {
    height: "80vh",
  },

  container: {
    backgroundColor: "#fff",
    padding: "35px",
    borderRadius: "15px",

    "@media screen and (max-width:800px)": {
      maxWidth: "70%",
    },

    "@media screen and (max-width:500px)": {
      maxWidth: "95%",
    },
  },

  heading: {
    marginBottom: "25px",
    
    "@media screen and (max-width:500px)": {
        fontSize : "25px",
    },
  },

  file: {
    width: "100%",
  },

  rowGrid: {
    gap: "8px",
  },

  button: {
    marginTop: "25px",
  },
});
