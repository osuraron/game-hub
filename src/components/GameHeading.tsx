import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

//calling gamequery interface from App.tsx
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  //creating a custom heading by retrieving variables from app.tsx gameQuery object
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
