import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard"


function ListingsContainer({search, setSearch}) {

  const [listings, setListings] = useState([])

  const getData=()=>{
    fetch(`http://localhost:6001/listings`
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        setListings(myJson);
      })
      .then(err=> console.log(err));
  }
  useEffect(()=>{
  getData()
  }, [])

  
  
    const handleDelete = (id) => {
    const filteredListings = listings.filter(item => item.id !== id)
    setListings(filteredListings)

    fetch(`http://localhost:6001/listings/${id}`
    ,{

      method: "DELETE",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
    .catch((err)=> console.log(err))
  }
  

  const searchFilteredListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  const listingsArr = searchFilteredListings.map((item, id)=>
    <ListingCard handleDelete={handleDelete} key={id} item={item}/>
    )

 
  return (
    <main>
      <ul className="cards">
        {listingsArr.length !== 0 ? listingsArr : <h1> No listings available!</h1>}
      </ul>
    </main>
  );
}

export default ListingsContainer;
