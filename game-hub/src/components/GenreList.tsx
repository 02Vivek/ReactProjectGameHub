import { Button, HStack, Image, List, ListItem, Spinner
  } from "@chakra-ui/react";
  import useGenres, { Genre } from "../hook/useGenres";
  import getCroppedImageUrl from "../services/image-url";
  
  interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
  }
  
  const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();
  
    if (error) return null;
  
    if (isLoading) return <Spinner />;
  
    return (
      <>
        <List>
          {data.map((genre) => (
            <ListItem 
              key={genre.id} 
              paddingY="5px"
            >
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                  onClick={() => onSelectGenre(genre)}
                  fontSize="md"
                  variant="link"
                  transition="transform 0.2s, box-shadow 0.2s" // Smooth transition for hover effect
                  _hover={{transform: "scale(1.05)" }}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </>
    );
  };
  
  export default GenreList;
  