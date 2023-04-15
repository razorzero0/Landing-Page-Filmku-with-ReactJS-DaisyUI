import Pin from "./Pin";
import useAxios from "./Axios/Axios";
export default function Card(props) {
  const { items } = useAxios(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=e8dfd2bbed47c2bb916bc9b14367e201&language=en-US&page=1"
  );

  return (
    <div className="flex flex-wrap justify-center mt-8">
      <h4 class="mx-12 text-white text-3xl font-lg block">Top Trending</h4>
      <div className="pt-6 flex flex-wrap justify-center ">
        {items.map((item, i) => (
          <div
            data-aos="zoom-out"
            data-aos-delay="150"
            data-aos-duration="5000"
            class="card w-56 mt-6 mx-4 shadow-sm shadow-neutral-100  bg-neutral-900  "
            key={i}>
            <Pin />
            <figure>
              <img
                className="relative"
                src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
                alt="gambar"
              />
            </figure>
            <div class="card-body flex justify-center">
              <span class=" text-white  ">
                <i class="bi bi-star-fill text-warning"> </i>
                {item.vote_average}
              </span>
              <h4 class="card-title text-white text-base text">
                {item.name}
                {item.title}
              </h4>
            </div>
            <div class="flex justify-center">
              <button class="btn btn-active text-md text-indigo-500 w-40 normal-case">
                <i class="bi bi-plus "></i> Watchlist
              </button>
            </div>

            <button class="btn btn-ghost text-white text-md normal-case mb-4 mt-2">
              <i class="bi bi-play-fill"> </i> &nbsp; Trailer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
