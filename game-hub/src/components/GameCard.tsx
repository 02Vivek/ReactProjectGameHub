import { Button, Card, CardBody, HStack, Image } from '@chakra-ui/react'
import { Game } from '../hook/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import PlatformIconList from './PlatformIconList'
import Ratings from './Ratings'
import FavoriteIcon from './FavoriteIcon'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { addFavorite, removeFavorite } from '../store/favGame/favGameSlice'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {


  const dispatch = useDispatch();
  
  // Get current favorite state for this game
  const isFavorite = useSelector((state: RootState) =>
    state.favorites.games.some((favGame:Game) => favGame.id === game.id)
  );

  const handleToggleFavorite = (favorited: boolean) => {
    if (favorited) {
      dispatch(addFavorite(game)); // Add game to favorites
    } else {
      dispatch(removeFavorite(game.id)); // Remove game from favorites
    }
  };

  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Button
          whiteSpace="normal"
          textAlign="left"
          fontWeight={"bold"}
          fontSize={25}
          variant="link"
        >{game.name}</Button>
        <br />
        <HStack justifyContent='space-between'>
          <Ratings ratings={game.rating_top} />
          <FavoriteIcon isFavorite={isFavorite} onToggle={handleToggleFavorite} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard