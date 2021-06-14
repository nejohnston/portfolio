import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import ProjectCard from './ProjectCard'
import { CardGroup } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
}));

const ProjectsList = ({projects}) => {
  const classes = useStyles();
  return (
    <Grid 
    container 
    spacing={10}
    justify='space-evenly'
    alignItems='center'
    >
        {projects.map((project) => (
          <Grid item key={project.title} xs={5}>
            <ProjectCard project={project} key={project}/>
          </Grid>
        ))}
    </Grid>
  );
}

export default ProjectsList