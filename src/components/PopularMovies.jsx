import { getPopularMovies } from "@/lib/tmdb";

export default async function PopularMovies(){
      const data = await getPopularMovies();

   return (
    <div>
      <h1>Em alta</h1>
      {data.results.map((movie) => (
        <h2 key={movie.id}>{movie.title}</h2>
      ))}
    </div>
  );
}