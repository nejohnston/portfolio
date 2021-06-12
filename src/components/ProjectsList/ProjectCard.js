import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, CardMedia, Card, CardActions, CardContent, Typography, Paper} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language'
import {AiFillGithub} from 'react-icons/ai'
import boomtownImage from '../../config/assets/images/portfolio-boomtown.png'
import yahtzeeImage from '../../config/assets/images/yahtzee.jpeg'
import libraryImage from '../../config/assets/images/portfolio-library.png'
import sacMapImage from '../../config/assets/images/portfolio-sacmap.png'
import unityImage from '../../config/assets/images/portfolio-unity.png'
import r10Image from '../../config/assets/images/portfolio-r10.png'
import sproutImage from '../..//config/assets/images/portfolio-sprout.png'

const useStyles = makeStyles({
  cardContainer: {
    minWidth: 275,
    width: 300,
    height: 350,
    overflowX: 'hidden'
  },
  cardContent: {
    paddingBottom: 0
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    paddingLeft: 0,
    paddingRight: 0
  },
  title: {
    fontSize: 20,
    paddingTop: 10
  },
  pos: {
    paddingBottom: 10
  }
});

const IntroCard = ({project}) => {
  const classes = useStyles();
  const imageArray = [yahtzeeImage, libraryImage, sacMapImage, r10Image, boomtownImage, unityImage, sproutImage]
  
  return (
    <Paper>
      <Card className={classes.cardContainer} variant="outlined">
        <CardContent className={classes.cardContent}>
      <CardMedia
      image={imageArray[project.image]}
      className={classes.media} 
      />
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            {project.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {project.language}
          </Typography>
          <Typography variant="body2" component="p">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.buttonContainer}>
        <IconButton href={project.github} className={classes.icon}><AiFillGithub/></IconButton>
        {project.link ? <IconButton href={project.link} className={classes.icon}><LanguageIcon/></IconButton> : false}
        </CardActions>
    </Card>
    </Paper>
  );
}

export default IntroCard
