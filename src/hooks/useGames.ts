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
  
    useEffect(() => {
        const controller = new AbortController()
      apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)});

        return () => controller.abort()
    },[]);
//[] is stop constant requests
    return {games, error}
}

export default useGames