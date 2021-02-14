import React from "react";
import clsx from "clsx";
import Header from "../../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Orders from "../../components/Orders";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    maxWidth: "50%",
    margin: "0 auto",
  },
}));

const Resumo = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <Header title="Resumo" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Orders />
          </Paper>
        </Grid>
      </main>
    </div>
  );
};

export default Resumo;
