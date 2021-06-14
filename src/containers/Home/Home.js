import React from "react";
import IntroCard from "../../components/IntroCard";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardContainer: {
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10%'
  }
});

const Home = () => {
    const classes = useStyles()
    return(
        <div className={classes.cardContainer}>
            <IntroCard/>
        </div>
    )
}

export default Home
