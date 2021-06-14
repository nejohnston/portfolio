import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ProjectsList from '../../components/ProjectsList'

const useStyles = makeStyles({
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
      width: '100%',
      marginTop: 90,
      // justifyContent: 'center',
      // alignItems: 'center'
  }
});

const Projects = ({projects}) => {
    const classes = useStyles()
    return(
        <div className={classes.cardContainer}>
            <ProjectsList projects={projects} />
        </div>
    )
}

export default Projects
