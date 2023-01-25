import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
    const place = useLoaderData()
  
    return (
      <div className="place">
        <h1>{place.title}</h1>
        <h2>{place.category}</h2>
        <img src={place.url} alt={place.title} />

        <h2>Update {place.title}</h2>
        <Form action={`/update/${place._id}`} method="post">
          <input type="input" name="title" placeholder="place title"/>
          <input type="input" name="category" placeholder="place category"/>
          <input type="input" name="image" placeholder="place picture" />
          <input type="submit" value={`update ${place.title}`}/>
        </Form>

        <h2>Delete {place.title}</h2>
        <Form action={`/delete/${place._id}`} method="post">
          <input type="submit" value={`delete ${place.title}`} />
        </Form>
      </div>
    )
  }
  
  export default Show