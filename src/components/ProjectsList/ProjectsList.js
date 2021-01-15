import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Typography } from '@material-ui/core';
import IntroCard from '../IntroCard'
import ProjectCard from './ProjectCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // overflow: 'hidden'
  },
  gridList: {
    // width: 800,
    // height: 600
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
    <div className={classes.root}>
      <GridList cols={4} spacing={30} cellHeight={180} className={classes.gridList}>
        {/* <GridListTile key="Subheader" style={{ height: 'auto' }}>
          <ListSubheader component="div">Projects</ListSubheader>
        </GridListTile> */}
        {projects.map((project) => (
          // <GridListTile key={project.node_id}>
          //   {/* <img src={project.img} alt={project.title} /> */}
          //   <GridListTileBar
          //     title={project.name.replace('-', ' ').replace(/^(.)|\s+(.)/g, c => c.toUpperCase())}
          //     subtitle={<span>Language: {project.language}</span>}
          //     actionIcon={
          //       <IconButton aria-label={`info about ${project.title}`} className={classes.icon}>
          //         <InfoIcon />
          //       </IconButton>
          //     }
          //   />
          //   <GridListTileBar>
          //     <Typography>
          //       {project.description}
          //     </Typography>
          //   </GridListTileBar>
          <GridListTile key={project.node_id}>
          <ProjectCard project={project}/>
            
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default ProjectsList