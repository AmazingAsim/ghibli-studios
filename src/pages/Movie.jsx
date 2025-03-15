import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
export default function Movie() {
  let [movie,setMovie] = useState({});
  let [loading,setLoading] = useState(true);
  let {id} = useParams();
  async function getMovie(){
      let result= await axios.get(`https://ghibliapi.vercel.app/films/${id}`);
      console.log(result.data);
      if(result.status === 200){
        setLoading(false);
        setMovie(result.data);
      }
  }

  useEffect(function(){getMovie()},[])

  return (
    <div>
      {
        loading?<h1 className='text-center p-5 display-4'> <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div> Loading...</h1>:
        <div className='mt-5'>
            <div className="container">
               <div className="row">
                <div className="col-sm-6">
                <img src={movie.image} className='img-fluid' alt="" />
                </div>
                <div className="col-sm-6">
                  <h1>{movie.title}</h1>
                  <h2>{movie.original_title}</h2>
                  <p>{movie.description}</p>
                  <p> Director: {movie.director}</p>
                  <p> Producer: {movie.producer}</p>
                  <p> Release Date: {movie.release_date}</p>
                  <p> Running Time: {movie.running_time}</p>
                  <p> RT Score: {movie.rt_score}</p>

                </div>
               </div>
            </div>
        </div>
      }
    </div>
  )
}
