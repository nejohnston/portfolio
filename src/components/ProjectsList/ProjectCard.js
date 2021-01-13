import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridListTile from '@material-ui/core/GridList'
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  //   maxWidth: 500
  // },
  // title: {
  //   fontSize: 30,
  // },
  // pos: {
  //   marginBottom: 12,
  // },
  // buttonContainer: {
  //   display: 'flex',
  //   justifyContent: 'space-around'
  // },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const IntroCard = ({project}) => {
  const classes = useStyles();

  return (
    // <Card className={classes.root} variant="outlined">
    //   <CardContent>
    //     <Typography className={classes.title} color="textPrimary" gutterBottom>
    //       Hi, my name is Nicholas
    //     </Typography>
    //     <Typography className={classes.pos} color="textSecondary">
    //       adjective
    //     </Typography>
    //     <Typography variant="body2" component="p">
    //       well meaning and kindly.
    //       <br />
    //       {'"a benevolent smile"'}
    //     </Typography>
    //   </CardContent>
    //   <CardActions className={classes.buttonContainer}>
    //     <NavLink to='/about'>
    //       <Button size="small">About</Button>
    //     </NavLink>
    //     <NavLink to='/projects'>
    //       <Button size="small">Projects</Button>
    //     </NavLink>
    //   </CardActions>
    // </Card>
    <GridListTile key={project.node_id}>
            <img src={project.img} alt={project.title} />
            <GridListTileBar
              title={project.title}
              subtitle={<span>by: {project.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${project.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
  );
}

export default IntroCard
