import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom'


function MovieCard(movie) {
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height="300px"  src={movie.imageURL} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text style={{ height: "15rem" }}>
          {movie.Description}  <br />
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <StarRatingComponent
              name="rating" // name of the radio input, required
              value={movie.Rating}
              editing={false}
            />
          </div>
        </Card.Text>
        <Link to= {`/Trailer/${movie.id}`}className='text-decoration-none text-dark'> Trailer  </Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;