import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, IconButton, Typography} from '@material-ui/core';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
  },
  cardContent: {
    maxWidth: 350
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
  },
  icon: {
    width: 50,
    height: 50
  },
  linkText: {
    textDecoration: "none"
  }
});

const IntroCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Hi, my name is Nicholas
        </Typography>
        <Typography color="textSecondary">
          I'm passionate about snowboarding, coding, and my grandma's buttertarts!
        </Typography>
      </CardContent>
      <div className={classes.buttonContainer}>
        <IconButton href="https://github.com/nejohnston/"  size="medium">
          <AiFillGithub className={classes.icon}/>
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/n-johnston/" size="medium">
          <AiFillLinkedin className={classes.icon}/>
        </IconButton>
      </div>
      <CardActions className={classes.buttonContainer}>
        <NavLink to='/about' className={classes.linkText}>
          <Button size="small">About</Button>
        </NavLink>
        <NavLink to='/projects' className={classes.linkText}>
          <Button size="small">Projects</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}

export default IntroCard
