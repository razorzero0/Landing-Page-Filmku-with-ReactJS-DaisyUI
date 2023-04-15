import Pin from './Pin'
import  Card from './Card'
import React, { useState, useEffect } from 'react';

export default function Api() {
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
   
    
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=e8dfd2bbed47c2bb916bc9b14367e201&language=en-US&page=1?limit=2")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.results);
            
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      
      return (
        <div></div>
        // <Card items={items}/>
      );
    }
  }

  
//   return (
//     <div className='flex flex-wrap justify-center mt-8'>
//         <h4 class="mx-12 text-white text-3xl font-lg block">Top Trending</h4>
//     <div className="pt-6 flex flex-wrap justify-center ">
    
//       {items.map((item,i) => (
//       <div data-aos="zoom-out" data-aos-delay="150"
//       data-aos-duration="5000"
//       class="card w-56 mt-6 mx-4 shadow-sm shadow-neutral-100  bg-neutral-900  " key={i} >
//         <Pin />
//       <figure><img className="relative"src={'https://image.tmdb.org/t/p/w500/' + 
//       item.poster_path} alt="gambar" /></figure>
//       <div class="card-body flex justify-center">
//         <span class=" text-white  "><i class="bi bi-star-fill text-warning"> </i> 
//          {item.vote_average}</span>
//         <h4 class="card-title text-white text-base text">

//           {item.name}
//           {item.title}
          
//         </h4>
//       </div>
//       <div class="flex justify-center">
//       <button class="btn btn-active text-md text-indigo-500 w-40 normal-case"><i class="bi bi-plus "></i> Watchlist</button>
//       </div>
      
//       <button class="btn btn-ghost text-white text-md normal-case mb-4 mt-2"><i class="bi bi-play-fill"> </i> &nbsp;  Trailer</button>
      
//     </div>

//       ))}
//       </div>
//     </div>
//   );
// }
  