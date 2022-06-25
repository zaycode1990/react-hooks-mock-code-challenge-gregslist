import React, {useState} from "react";

function ListingCard({item, handleDelete}) {

  const [isActive, setIsActive] = useState(true)

const handleClick = () => {
  setIsActive((prev)=>  !prev )
  //state deas with booleans too
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">{item.price}</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {isActive ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={() => {handleDelete(item.id)}} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
