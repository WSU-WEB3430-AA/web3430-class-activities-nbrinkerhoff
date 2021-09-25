// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'


export default function StarRating({totalStars = 5}) {
    // const movieRating = (MovieList.rating)/2
    const Star = ({ selected = false }) => (
        <FaStar color={selected ? "maroon" : "grey"} />
    );
    const createArray = length => [...Array(length)];
    const [selectedStars] = useState(4);
    return (
      <>
        {createArray(totalStars).map((_n, i) => (
          <Star key={i} selected={selectedStars > i} />
        ))}
        <p>
          {selectedStars} of {totalStars} stars
        </p>
      </>
    );
  }




ReactDOM.render(<App/>, document.getElementById('main'))