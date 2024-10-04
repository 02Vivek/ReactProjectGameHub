import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box 
      borderRadius={10} 
      overflow="hidden"
      boxShadow="lg" // Adding a large shadow for elevation
      transition="transform 0.2s, box-shadow 0.2s" // Smooth transition for hover effect
      _hover={{ 
        boxShadow: "xl", // Increase shadow on hover
        transform: "scale(1.05)" // Slightly scale the card on hover
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
