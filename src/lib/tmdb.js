import { headers } from "next/headers";

const API_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const response = await fetch(`${API_URL}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error("Erro ao buscar filmes");
  }
  return response.json();
}

export async function getTopRatedMovies() {
  const response = await fetch(`${API_URL}/movie/top-rated`,{
    headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  }) 
   if (!response.ok){
    throw new Error("Erro ao buscar filmes")
   }
   return response.json()
}