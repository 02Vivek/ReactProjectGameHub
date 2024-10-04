import { useSelector } from 'react-redux';
import { SimpleGrid, Text } from '@chakra-ui/react';
import { Game } from '../hook/useGames';
import GameCard from './GameCard';
import { RootState } from '../store/store';

const FavoriteGamesList = () => {
  // Retrieve favorite games from the Redux store
  const favoriteGames = useSelector((state: RootState) => state.favorites.games);
    // console.log(favoriteGames)
  // If there are no favorite games, display a message
  if (favoriteGames.length === 0) {
    return <Text fontSize="lg">You have no favorite games yet!</Text>;
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
      {favoriteGames.map((game: Game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default FavoriteGamesList;
