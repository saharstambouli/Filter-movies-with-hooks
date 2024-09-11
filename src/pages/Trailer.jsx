import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Trailer = ({ movies }) => {
  const params = useParams();
  console.log('params', params)

  const moviesObject = movies.find((el) => el.id == params.id)
  console.log('moviesObject',moviesObject)

  return (
    <div>

      <h1> About the movie  </h1>

      <h1> {moviesObject.Description} </h1>
    

      <iframe 
        width="560" 
        height="315" 
        src={moviesObject.trailer} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>

        </iframe>
      
      <Link to='/'> Go back </Link> 


    </div>
  )
}

export default Trailer
