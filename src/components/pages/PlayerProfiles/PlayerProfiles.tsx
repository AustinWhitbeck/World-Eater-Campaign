import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  PlayerContentContainer,
  PlayerSummaryContainer,
} from './PlayerProfiles.styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    padding: 20,
  },
});

const PlayerProfiles = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h1" classes={{ root: classes.title }}>
        Player Profiles
      </Typography>
      <PlayerContentContainer>
        <Typography variant="h2">Player Name</Typography>
        <PlayerSummaryContainer>
          <Typography>This is some info about the character</Typography>
        </PlayerSummaryContainer>
      </PlayerContentContainer>
      <Link to="/">Home</Link>
    </>
  );
};

export default PlayerProfiles;
