import React from 'react'
import { useState } from 'react';
import AddMovie from '../Components/AddMovie';
import MovieList from '../Components/MovieList';
import Filter from '../Components/Filtrer';


const Home = ({movies, setMovies}) => {

  const [search, setSearch] = useState("");
  console.log("search", search)

  const [rate, setRate] = useState(1)

  const [addButton, setAddButton] = useState(false);




  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);

  };

  const handleAdd = () => {
    setAddButton(!addButton);
  }

  console.log('movies', movies)


  return (
    <div>
      
  <h1>Movies  </h1>
      <p style={{textAlign: 'center',fontWeight: 'bold'}}>
      Whether it is scary, comedic, dramatic, romantic, or something else, cinema knows how to awaken our senses. <br/>
      And with so many titles available, there is so much to discover!”</p>

    
      <header className="App-header">

        <Filter setSearch={setSearch} rate={rate} setRate={setRate} />


        <hr />
        <button onClick={handleAdd}>  {addButton ? "Hide Movies" : "Add Movies "} </button>
      {addButton && (
        <AddMovie addMovie={addMovie} />
      )}
        <hr />
       

        <hr />
        <div className='container-md'>

          <MovieList movies={movies.filter((el) => el.Title.toLowerCase().includes(search?.toLowerCase().trim()) && el.Rating >= rate)} />
        </div>


      </header> 


    </div>
  )
}

export default Home
