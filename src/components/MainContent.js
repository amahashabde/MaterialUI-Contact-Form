import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <form className={classes.content} noValidate autoComplete="off">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <TextField id="standard-basic" label="Standard" />
        </div>
        <TextField id="filled-basic" label="Filled" variant="filled" /><br></br>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br></br>
      </form>
      <div className={classes.content}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
          nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
          felis nec erat
        </Typography>
      </div>
    </main>
  );
}

export default MainContent;
