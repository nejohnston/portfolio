import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, IconButton, Typography} from '@material-ui/core';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
});

const IntroCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Hi, my name is Nicholas
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          I'm passionate about snowboarding, coding, and my grandma's buttertarts.
        </Typography>
      </CardContent>
      <IconButton href="https://github.com/nejohnston/">
        <AiFillGithub/>
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/n-johnston/">
        <AiFillLinkedin/>
      </IconButton>
      <CardActions className={classes.buttonContainer}>
        <NavLink to='/about'>
          <Button size="small">About</Button>
        </NavLink>
        <NavLink to='/projects'>
          <Button size="small">Projects</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}

export default IntroCard
