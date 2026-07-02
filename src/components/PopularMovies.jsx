import { getPopularMovies } from "@/lib/tmdb";
import { getPoster } from "@/lib/getposter";
import Image from "next/image";

export default async function PopularMovies() {
  const data = await getPopularMovies();

  return (
    <div>
      <h1>Em alta</h1>

      {data.results.map((movie) => (
        <div key={movie.id}>
          <Image
            src={getPoster(movie.poster_path)}
            alt={movie.title}
            width={300}
            height={450}
          />

          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
}