import React from "react";
import clsx from "clsx";
import Header from "../../components/Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

const Comprovantes = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <Header title="Comprovantes" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <h2>Comprovantes</h2>
      </main>
    </div>
  );
};

export default Comprovantes;
