import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

//import interface as a child from GameCard
interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
