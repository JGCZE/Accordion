// single selection
// multiple selection
import { useState } from "react";
import data from "./data"

const Accordian = () => {
  const [selected, setSetselected] = useState(null)

  const handleSingleSelect = (id) => {
    console.log(id);
    //setting right object
    const updatedQ = data.filter(oneObject => oneObject.id == id)
 
    setSetselected(updatedQ[0].answer)
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? 
        data.map((dataItem) => 
          <div className="item">
            <div className="title" onClick={() => handleSingleSelect(dataItem.id)}>
              <h3>{dataItem.question}</h3>
              <span>+</span>

              <span>{dataItem.answer}</span>
          </div>
        </div>
        ) : (  <div> No data </div>  )
      }

      </div>
    </div>
  )
}

export default Accordian;