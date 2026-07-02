import TopRatedMovies from "@/components/TopRatedMovies";

export default async function Home() {

  
  return (
    <main>
      {data.results.map((movie) => (
        <h2 key={movie.id}>{movie.title}</h2>
      ))}
    </main>
  );
}