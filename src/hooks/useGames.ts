
import useData from './useData';
import { Genre } from './useGenres';

//export to use in PlatformIconList
export interface Platform {
  id: number,
  name: string,
  slug: string,
}

//export to use in GameCard
//this interface should match the JSON response results from API
export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }

const useGames = (selectedGenre: Genre | null) => useData<Games>('/games',{params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);
  


export default useGames