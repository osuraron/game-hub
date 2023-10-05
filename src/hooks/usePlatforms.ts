import useData from "./useData";

//interface defined based on RAWG api object
interface Platforms{
    id: number;
    name: string;
    slug: string;
}

//<Platform> to get from interface
//useData hook is called and the endpoint url is passed 
const usePlatforms = () => useData<Platforms>('/platforms/lists/parents')

export default usePlatforms