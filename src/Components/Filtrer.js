import React from 'react';
import '../Filter.css';
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({ setSearch, rate, setRate }) => {
  const handleInputs = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='container'>
      
      <div className='filter-row'>
      <label htmlFor="" style={{ marginRight: '10px' }}>Search</label>

        <input
          type="text"
          placeholder="Search by movie Title"
          onChange={handleInputs}
          className='filter-input'
        />
        <StarRatingComponent
          name="rating" /* name of the radio input, it is required */
          value={rate}
          onStarClick={(value) => { setRate(value); }} /* number of icons in rating, default `5` */
          className='star-rating'
        />
      </div>
    </div>
  );
}

export default Filter;
