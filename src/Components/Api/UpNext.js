export default function Upnext() {
  return (
    <div class=" ml-8  upcoming">
      <h1 class=" text-lg  font-bold text-indigo-400 md:mt-0 mt-8 ">
        Up Coming Film
      </h1>
      <div class=" flex flex-wrap -mt-2 ">
        <div class="card card-side pt-0 h-36  bg-base-400 shadow-xl text-white">
          <figure>
            <img
              class="w-16"
              src="https://image.tmdb.org/t/p/original/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg"
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <p>She Hulk</p>
            <span>Click the button to watch a trailer.</span>
            <div class="card-actions justify-end">
              <button class="btn btn-outline btn-primary text-sm h-4">
                Watch
              </button>
            </div>
          </div>
        </div>
        <div class="card card-side h-36 relative bg-base-400 shadow-xl text-white">
          <figure>
            <img
              class="w-16"
              src="https://image.tmdb.org/t/p/original/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg"
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <p>The Black Phone</p>
            <span>Click the button to watch a trailer.</span>
            <div class="card-actions justify-end">
              <button class="btn btn-outline btn-primary text-sm h-4">
                Watch
              </button>
            </div>
          </div>
        </div>
        <div class="card card-side h-36 relative bg-base-400 shadow-xl text-white">
          <figure>
            <img
              class="w-16"
              src="https://image.tmdb.org/t/p/original/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <p>Spiderman: No Way Home</p>
            <span>Click the button to watch a trailer.</span>
            <div class="card-actions justify-end">
              <button class="btn btn-outline btn-primary text-sm h-4">
                Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
