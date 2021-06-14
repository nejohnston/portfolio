import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import ProjectCard from './ProjectCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexGrow: 1,
    overflowX: 'hidden',
    overflowY: 'hidden',
    maxWidth: '100vw',
    maxHeight: '100vh',
    // boxSizing: 'box-content',
    marginTop: '10%'
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
    <Grid container justify="center" className={classes.root} spacing={3}>
        {projects.map((project) => (
          <Grid item key={project.title} imageUrl={project.image} xs={6}>
            <ProjectCard project={project} key={project}/>
          </Grid>
        ))}
    </Grid>
  );
}

export default ProjectsList