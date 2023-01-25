import { useLoaderData } from "react-router-dom"

function Show(props) {
    const place = useLoaderData()
  
    return (
      <div className="place">
        <h1>{place.title}</h1>
        <h2>{place.category}</h2>
        <img src={place.url} alt={place.title} />
      </div>
    )
  }
  
  export default Show