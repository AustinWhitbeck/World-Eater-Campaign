import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { HomeContainer } from './HomePage.styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    color: 'white',
    backgroundColor: 'purple',
    textAlign: 'center',
    padding: 20,
    border: 'solid black 10px',
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <HomeContainer>
      <Typography variant="h1" classes={{ root: classes.root }}>
        World Eater Campaign
      </Typography>
      <Link to="/player-profiles">Player Profiles</Link>
    </HomeContainer>
  );
};

export default HomePage;
