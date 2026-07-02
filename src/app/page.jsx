import Header from "@/components/Header";
import PopularMovies from "@/components/PopularMovies";
import TopRatedMovies from "@/components/TopRatedMovies";

export default async function Home() {

  return (
    <main className="bg-gray">
      <div>
        <Header/>
        <PopularMovies/>
        </div>
    </main>
  );
}