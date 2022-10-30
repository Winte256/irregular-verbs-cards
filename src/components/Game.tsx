import React from 'react';
import { data } from '../api/data';
import shuffleArray from '../functions/shuffleArray';
import OutlinedCard from './OutlinedCard';

type Props = {};

const Game = (props: Props) => {
  const [item, setItem] = React.useState(0);
  const gameData = React.useRef(shuffleArray(data));

  const getNextCard = () => {
    setItem(item + 1);
  };

  return <OutlinedCard goNext={getNextCard} data={gameData.current[item]} />;
};

export default Game;
