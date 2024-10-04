import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

interface Props {
  isFavorite?: boolean; // To determine the initial state of the button
  onToggle: (favorited: boolean) => void; // Callback to handle toggling
}

const FavoriteIcon = ({ isFavorite = false, onToggle }: Props) => {
  const handleClick = () => {
    onToggle(!isFavorite); // Toggle the favorited state
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      colorScheme={isFavorite ? "red" : "gray"} // Change color based on state
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />} {/* Toggle icon */}
    </Button>
  );
};

export default FavoriteIcon;
