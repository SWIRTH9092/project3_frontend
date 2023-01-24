//----------------------
//  Index Page
//----------------------

//----------------------
//  import dependencies
//----------------------
import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom" 

function Index (props) {
    //define list of places from loader data
    const places = useLoaderData();

    // for setting state on Form so that when onsubmit is executed
    //   the form can be cleared out
    
    const [category, setCategory] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [title, setTitle] = React.useState('');


    //Sytling
    const placeContainer = {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(14rem, max-content))",
      gridGap: "16px",
      justifyContent: "center"
    }
    
    const placeCard = {
      border: "5px solid black",
      borderRadius: "20px",
      padding: "5px",
      textAlign: "center"
    }

    const centerTitle = {
      textAlign: "center"
    }
  
    const imageSize = {
      maxWidth: "200px"
    }

    const createForm = {
        fontSize: "1.5rem", 
        width: "20rem",
        margin: ".5rem",
      }
      
    const formCenter = {
      textAlign: "center"
    }   

    const createFormButton = {
      fontSize: "1.40rem",
      color: "white",
      background: "rgb(25, 25, 25)",
      borderRadius: "10px"
    }
    
    return (
        <div>
            <h1 style={centerTitle}>Around the World</h1>
            <h2 style={centerTitle}>Add an Accommodation</h2>
            <Form style={formCenter}
              onSubmit={(event) => { 
                setTitle('')
                setCategory('')
                setUrl('')
              }}
              action="/create" method="post">

                <input type="input" name="title" placeholder="accommodation" 
                  value={title} required style={createForm}
                  onChange={e => {
                    setTitle(e.target.value)
                  }}
                />     

                <input type="input" name="category" placeholder="category" 
                  value={category} required style={createForm}
                  onChange={e => {
                    setCategory(e.target.value)
                  }}
                />

                <input type="input" name="url" placeholder="image" 
                  value={url} required style={createForm}
                  onChange={e => {
                    setUrl(e.target.value)
                  }}
                />
                <input type="submit" value="Create Accommodation"
                  style={createFormButton} />
            </Form>
            <br></br>
            <br></br>
                <div style={placeContainer}>
                  {places.map(place => (
                    <div key={place._id} style={placeCard}>
                        <Link to={`/${place._id}`}>
                            <h2>{place.title}</h2>
                        </Link>
                        <h3>Category: {place.category}</h3>
                        <img src={place.url} alt={place.title} style={imageSize}/>
                        <br></br>
                    </div>
                  ))}
                </div>
        </div>
    )
}

//----------------------
//  Export Index Page
//----------------------
export default Index;