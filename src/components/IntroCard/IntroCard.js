import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, IconButton, Typography, CardMedia} from '@material-ui/core';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {NavLink} from 'react-router-dom'
import profilePicture from '../../config/assets/images/sadie-and-i.png'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 400,
  },
  cardContent: {
    // maxWidth: 500,
    marginBottom: 0,
    padding: 0
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10
  },
  media: {
    height: 100,
    paddingTop: '56.25%', // 16:9
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
    <Card 
    className={classes.root} 
    variant="outlined"
    >
      <CardContent className={classes.cardContent}>
        <CardMedia
        className={classes.media} 
        image={profilePicture}
        />
        <Typography 
        className={classes.title} 
        color="textPrimary"
        >
          Nicholas Johnston
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <NavLink to='/projects' className={classes.linkText}>
          <Button size="small">Projects</Button>
        </NavLink>
        {/* <NavLink to='/about' className={classes.linkText}>
          <Button size="small">About</Button>
        </NavLink> */}
      </CardActions>
      <div className={classes.buttonContainer}>
        <IconButton href="https://github.com/nejohnston/"  size="medium">
          <AiFillGithub className={classes.icon}/>
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/n-johnston/" size="medium">
          <AiFillLinkedin className={classes.icon}/>
        </IconButton>
      </div>
    </Card>
  );
}

export default IntroCard
