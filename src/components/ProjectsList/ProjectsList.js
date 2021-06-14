import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import ProjectCard from './ProjectCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    // overflowX: 'hidden',
    // overflowY: 'hidden',
    // width: '100vw',
    // maxHeight: '100vh',
    // boxSizing: 'border-box',
  },
  paper: {
    height: 140,
    width: 100,
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  gridItem: {
    paddingBottom: "20px !important"
  }
}));

const ProjectsList = ({projects}) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems='center' className={classes.root}>
        {projects.map((project) => (
          <Grid item className={classes.gridItem} key={project.title}>
            <ProjectCard project={project} key={project}/>
          </Grid>
        ))}
    </Grid>
  );
}

export default ProjectsList