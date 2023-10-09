import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { isLoading, data, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} padding="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit={"cover"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize={"lg"}
                variant="link"
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
