import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";

const navBar = () => {
  return (
    <HStack justify="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ColourModeSwitch />
    </HStack>
  );
};

export default navBar;
