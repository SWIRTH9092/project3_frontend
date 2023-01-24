//---------------------------
// actions for routes
//---------------------------
//---------------------------
// import dependencies
//---------------------------
import { redirect } from "react-router-dom";
//---------------------------
// URL for data
//---------------------------
const URL = "https://project3bkend.onrender.com"
export const actionsCreate = async ({ request }) => {
   //get new place data from Form
   const formData = await request.formData()
   //set up our new place to match schema
   const newPlace = {
       title: formData.get("title"),
       category: formData.get("category"),
       url: formData.get("url")
   }
   //send new place to our API
   await fetch(URL + "/place", {
       method: "post",
       headers: {
           "Content-Type": "application/json",
       },
       body: JSON.stringify(newPlace),
   })
   // redirect to index
   return redirect("/")
}