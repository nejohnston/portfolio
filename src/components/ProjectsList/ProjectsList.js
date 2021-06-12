import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import ProjectCard from './ProjectCard'
import { CardGroup } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100vw',
    display: 'grid',
    justifyContent: 'space-evenly',
    gridRowGap: 10,
    gridColumnGap: 10,
    gridTemplateColumns: '1fr 20px',
    overflow: 'hidden'
    // flexGrow: 1,
    // maxWidth: '100%',
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
  },
  jss1: {
    // width: '100',
    height: '0 !important'
  }
}));

const ProjectsList = ({projects}) => {
  const classes = useStyles();
  return (
    <>
    <CardGroup className={classes.root}>
    {/* <div className={classes.root}> */}
        {projects.map((project) => (
          <div className={classes.gridItem} key={project.title}>
            <ProjectCard project={project} key={project}/>
          </div>
        ))}
    </CardGroup>
    </>
  );
}

export default ProjectsList