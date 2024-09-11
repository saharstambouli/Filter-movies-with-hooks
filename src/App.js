import './App.css';
import { useState } from 'react';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import Filter from './Components/Filtrer';
import NavigationBar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Popularmovies from './pages/Popularmovies';
import TvShows from './pages/TvShows';
import Login from './pages/Login';
import Trailer from './pages/Trailer';
import { v4 as uuidv4 } from 'uuid';




function App() {

  const [movies, setMovies] = useState([
    {
      Title: "Gladiator",
      Description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family",
      imageURL: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
      Rating: 5,
      id: uuidv4(),
      trailer :"https://www.youtube.com/embed/PE2YZhcC4NY?si=Axzw8gz_EURQn5Pq" 

    },
    
    {
      Title: "Inception",
      Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      imageURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
      Rating: 4,
      id: uuidv4(),
      trailer:"https://www.youtube.com/embed/YoHD9XEInc0?si=QS6QYbD0dWcVGvi-" 
    },
    {
      Title: "12 years a slave",
      Description: "In the antebellum United States, Solomon Northup, a free black",
      imageURL: "https://upload.wikimedia.org/wikipedia/en/5/5c/12_Years_a_Slave_film_poster.jpg",
      Rating: 3,
      id: uuidv4(),
      trailer:"https://www.youtube.com/embed/z02Ie8wKKRg?si=IQzSt13jFwXDHq4q" 
    },
    {
      Title: "The Dark Knight",
      Description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      imageURL: "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
      Rating: 4,
      id: uuidv4(),
       trailer:"https://www.youtube.com/embed/g8evyE9TuYk?si=V3NN-0aABH5uJOoO" 
    },
    {
      Title: "The Pursuit of Happyness",
      Description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
      imageURL: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/thepursuitofhappyness_onesheet_1400x2100.png?itok=BSpvsOsJ",
      Rating: 4,
      id: uuidv4(),
       trailer:"https://www.youtube.com/embed/DMOBlEcRuw8?si=xd64eUDd97-nYE12"

    },
    {
      Title: "The Dark Knight",
      Description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      imageURL: "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
      Rating: 4,
      id: uuidv4(),
       trailer:"https://www.youtube.com/embed/DMOBlEcRuw8?si=xd64eUDd97-nYE12"
    },
    {
      Title: "Gladiator",
      Description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family",
      imageURL: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
      Rating: 5,
      id: uuidv4(),
       trailer:"https://www.youtube.com/embed/DMOBlEcRuw8?si=xd64eUDd97-nYE12"
    },
    {
      Title: "Inception",
      Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      imageURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
      Rating: 4,
      id: uuidv4(),
       trailer:"https://www.youtube.com/embed/DMOBlEcRuw8?si=xd64eUDd97-nYE12"
    },


  ]);



  return (
    <div className="App">

      <NavigationBar />
      <Routes>

      <Route path="/" element={<Home movies={movies} setMovies={setMovies} />} />

      
        <Route path="/Trailer/:id" element={<Trailer movies={movies}/>} />

        <Route path="/Popular-movies" element={<Popularmovies/>} />
        <Route path="/Tv-shows" element={<TvShows/>} />
        <Route path='/Login' element={<Login/>} />



      </Routes>






     
    </div>
  );
}


export default App;
