import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ProjectsList from '../../components/ProjectsList'

const useStyles = makeStyles({
  cardsContainer: {
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'

  }
});

const Projects = ({projects}) => {
    const classes = useStyles()
    return(
        <div className={classes.cardsContainer}>
            <ProjectsList projects={projects} />
        </div>
    )
}

export default Projects
