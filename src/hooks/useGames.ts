
import { GameQuery } from '../App';
import useData from './useData';


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
    rating_top: number;
  }

const useGames = (gameQuery: GameQuery) => useData<Games>('/games',
{params: {
  genres: gameQuery.genre?.id, 
  platforms: gameQuery.platform?.id,
  ordering: gameQuery.sortOrder,
  search: gameQuery.searchText
}}, 
[gameQuery]);
  


export default useGames