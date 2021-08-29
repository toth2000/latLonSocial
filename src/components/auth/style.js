import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  grid: {
    height: "90vh",
  },

  infoGrid: {
    gap: "18px",
    marginBottom: "25px",
  },

  container: {
    paddingTop: "25px",
    paddingBottom: "25px",
    backgroundColor: "white",
    borderRadius: "15px",

    "@media screen and (max-width: 1000px)": {
      maxWidth: "90%",
    },
  },

  buttonContainer: {
    marginTop: "25px",

    "& Button": {
      marginBottom: "8px",
    },
  },

  avatar: {
    height: "48px",
    width: "48px",
  },

  input: {
    marginBottom: "8px",
  },
});
