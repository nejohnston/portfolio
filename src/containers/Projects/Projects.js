import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import IntroCard from "../../components/IntroCard";
import ProjectsList from '../../components/ProjectsList'

const useStyles = makeStyles({
  cardContainer: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  }
});

const Projects = (projects) => {
    const classes = useStyles()
    console.log(projects)
    return(
        <div className={classes.cardContainer}>
            <IntroCard/>
            {/* <ProjectsList /> */}
        </div>
    )
}

export default Projects
