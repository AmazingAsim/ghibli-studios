import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [links,setLinks] = useState([]);
    const [loading,setLoading] = useState(true);
    async function getMovies(movieUrl){
        let result = await axios.get(movieUrl);

        if(result.status === 200){
            setMovies(result.data);
            setLinks(result.data);
            setLoading(false);
        }
    }

    useEffect(function(){getMovies('https://ghibliapi.vercel.app/films')},[])

  return (
    <div>
       {
        loading?<h1 className='text-center p-5 display-4'> <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div> Loading...</h1>:
         <div>
              <header className='bg-dark p-3 text-white text-center'>
            <h1 className='display-4'> Welcome to Ghibli Studio Guide</h1>
        </header>
       <div className="container">
          <div className="row">
            {
              movies.map((movie)=>(
                <div className="col-sm-6 p-3">
                    <div className="card" key={movie.id} style={{cursor:'pointer'}} onClick={()=>{navigate(`/movie/${movie.id}`)}}>
                       <img src={movie.movie_banner} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5> 
                        </div>
                    </div>
                </div>
              ))
            }
          </div>
       </div>
         </div>
       }
    </div>
  )
}
