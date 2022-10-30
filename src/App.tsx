import { Box, Button } from '@mui/material';
import React from 'react';
import './App.css';

import Game from './components/Game';

function App() {
  const [isPlaying, setPlaying] = React.useState(false);

  const onStartPlaying = () => {
    setPlaying(true);
  };

  return (
    <Box
      sx={{
        minWidth: '100vw',
        minHeight: '100vh',
        bgcolor: 'rgb(240, 237, 234)',
        paddingBottom: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '*': {
          boxSizing: 'border-box',
        },
      }}
    >
      {isPlaying ? (
        <Game />
      ) : (
        <Button size="large" onClick={onStartPlaying}>
          Start!
        </Button>
      )}
    </Box>
  );
}

export default App;
