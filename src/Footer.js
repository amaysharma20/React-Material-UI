import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        2007-2020 Flipkart
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              style={{ width: "100%", height: "250px" }}
              src={require("./1.webp")}
            />
            <h4>Electronics Items</h4>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              style={{ width: "100%", height: "250px" }}
              src={require("./grocery-store.jpg")}
            />
            <h4>Groceries Items</h4>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              style={{ width: "100%", height: "250px" }}
              src={require("./images.jpeg")}
            />
            <h4>HouseHold </h4>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
      <CssBaseline />
      <footer
        className="site-footer"
        style={{ backgroundColor: "#242121", color: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <h4>About</h4>
              <ul className="footer-links">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Contribute</li>
                <li>Privacy Policy</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <h4>Social</h4>
                <ul className="social-icons">
                  <li className="facebook" href="#">
                    Facebook
                  </li>
                  <li className="twitter" href="#">
                    Twitter
                  </li>
                  <li className="dribbble" href="#">
                    Dribbble
                  </li>
                  <li className="linkedin" href="#">
                    linkedin
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col-md-12">
              <p className="copyright-text">
                Copyright &copy; 2007-2020 Flipkart.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
