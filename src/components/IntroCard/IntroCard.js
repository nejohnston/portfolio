import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink, Route} from 'react-router-dom'

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
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
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
