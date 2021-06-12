import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import ProjectCard from './ProjectCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexGrow: 1,
    maxWidth: 1200,
    paddingTop: 350
  },
  paper: {
    height: 140,
    width: 100,
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  gridItem: {
    paddingBottom: "20px !important",
    overflowX: 'hidden'
  }
}));

const ProjectsList = ({projects}) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
    
        {projects.map((project) => (
          // <Grid item className={classes.gridItem} key={project.title}>
            <ProjectCard project={project} key={project}/>
          
        ))}
    </Grid>
  );
}

export default ProjectsList