import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

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

interface FetchGamesResponse {
    count: number;
    results: Games[];
  }

const useGames = () => {
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
  
    useEffect(() => {
        const controller = new AbortController()

        setIsLoading(true);
      apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then((res) => 
        {
          setGames(res.data.results)
          setIsLoading(false)
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setIsLoading(false);
        });

        return () => controller.abort()
    },[]);
//[] is stop constant requests
    return {games, error, isLoading}
}

export default useGames