import { getTopRatedMovies } from "@/lib/tmdb";

export default function TopRatedMovies(){
      const data = getTopRatedMovies();

   return (
    <div>
      <h1>Mais bem avaliados</h1>
      {data.results.map((movie) => (
        <h2 key={movie.id}>{movie.title}</h2>
      ))}
    </div>
  );
}