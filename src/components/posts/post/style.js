import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  root: {
      width: "45%",

      "@media screen and (max-width:800px)": {
        width: "70%",
      },

      "@media screen and (max-width:500px)": {
        width: "90%",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});
