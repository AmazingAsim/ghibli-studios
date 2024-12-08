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
            setMovies(result.data.data.data);
            setLinks(result.data.data.links);
            setLoading(false);
        }
    }

    useEffect(function(){getMovies('https://marvel-film-api.fly.dev/api/movies')},[])

  return (
    <div>
       {
        loading?<h1 className='text-center p-5 display-4'> <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div> Loading...</h1>:
         <div>
              <header className='bg-dark p-3 text-white text-center'>
            <h1 className='display-4'> Welcome to Marvel Studio</h1>
        </header>
       <div className="container">
          <div className="row">
            {
              movies.map((movie)=>(
                <div className="col-sm-4">
                    <div className="card" key={movie.id} style={{cursor:'pointer'}} onClick={()=>{navigate(`/movie/${movie.id}`)}}>
                       <img src={movie.poster} alt="" className="card-img-top" />
                    </div>
                </div>
              ))
            }
          </div>
       </div>

       <div className="container text-center p-3">
          {
            links?.map((link)=>(
             link?.url!=null && <button className='btn btn-primary mx-1' onClick={()=>{setLoading(true);getMovies(link.url)}}>{link.label}</button>
            ))
          }
       </div>
         </div>
       }
    </div>
  )
}
