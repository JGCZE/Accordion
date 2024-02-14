import { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import './styles.css'


const StartRatings = () => {
  const [rating, setRating] = useState(1);
  const startingPoint = 5;

  const settingValue = (value) => {
    console.log(value);
    setRating(value)
  }

  return (
    <div>
      <h4>Start Ratings</h4>
      <div className="allStars">
        <div className="oneStar">
          {
            [...Array(startingPoint)].map((_, index) => 
            (
              <span 
                key={index}
                onMouseEnter={() => setRating(index + 1)}
                onClick={() => settingValue(index + 1)}
              >
                { rating > index ? 
                  <IoIosStar /> 
                : 
                  <IoIosStarOutline /> }
              </span>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default StartRatings
