import { HStack, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface Props {
    ratings: number
}

const Ratings = ({ratings}: Props) => {
    const stars = [];
    for (let i = 0; i < ratings; i++) {
      stars.push(i);
    }
    return (
      <>
        <HStack>
        {stars.map((star) => (
          <Icon key={star} as={FaStar} color="yellow.400" />
        ))}
        </HStack>
      </>
    );
}

export default Ratings;