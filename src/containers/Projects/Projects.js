import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import IntroCard from "../../components/IntroCard";
import ProjectsList from '../../components/ProjectsList/ProjectsList'

const useStyles = makeStyles({
  cardContainer: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  }
});

const Projects = () => {
    const classes = useStyles()
    return(
        <div className={classes.cardContainer}>
            <IntroCard/>
            <ProjectsList />
        </div>
    )
}

export default Projects
