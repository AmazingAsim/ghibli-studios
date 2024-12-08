import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
export default function Movie() {
  let [movie,setMovie] = useState({});
  let [loading,setLoading] = useState(true);
  let {id} = useParams();
  async function getMovie(){
      let result= await axios.get(`https://marvel-film-api.fly.dev/api/movies/${id}`);
      console.log(result.data.data);
      if(result.status === 200){
        setLoading(false);
        setMovie(result.data.data);
      }
  }

  useEffect(function(){getMovie()},[])

  return (
    <div>
      {
        loading?<h1 className='text-center p-5 display-4'> <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div> Loading...</h1>:
        <div>
            <iframe src={movie.trailer} frameborder="0" style={{width:'100%',height:'70vh'}}></iframe> <br />
            <div className="container">
               <div className="row">
                <div className="col-sm-6">
                <img src={movie.poster} className='img-fluid' alt="" />
                </div>
                <div className="col-sm-6">
                  <h1>{movie.title}</h1>
                  <p>{movie.plot}</p>
                </div>
               </div>
            </div>
        </div>
      }
    </div>
  )
}
