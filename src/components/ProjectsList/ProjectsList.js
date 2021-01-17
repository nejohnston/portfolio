import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {GridList, Grid, Paper} from '@material-ui/core';
import ProjectCard from './ProjectCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexGrow: 1,
    maxWidth: 1200
  },
  paper: {
    height: 140,
    width: 100,
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const ProjectsList = ({projects}) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={10} className={classes.root}>
        {/* <GridListTile key="Subheader" style={{ height: 'auto' }}>
          <ListSubheader component="div">Projects</ListSubheader>
        </GridListTile> */}
        {projects.map((project) => (
          <Grid item key={project}>
            {/* <Paper> */}
          <ProjectCard project={project}/>
          {/* </Paper> */}
            
          </Grid>
        ))}
      {/* </Grid> */}
    </Grid>
  );
}

export default ProjectsList