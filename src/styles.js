import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  icon: {
    marginRight: "8px", // Adjust as needed
  },
  container: {
    marginTop: "64px", // Adjust as needed
    marginBottom: "64px", // Adjust as needed
  },
  buttons: {
    marginTop: "32px", // Adjust as needed
  },
  cardGrid: {
    paddingTop: "64px", // Adjust as needed
    paddingBottom: "64px", // Adjust as needed
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9 aspect ratio
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#fff", // Adjust background color as needed
    padding: "48px", // Adjust padding as needed
  },
});

export default useStyles;
