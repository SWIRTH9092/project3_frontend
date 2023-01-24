//----------------------
//  "Project 3 Loader URL (all items) for Index page
//----------------------
const URL = "https://project3bkend.onrender.com";

export const indexLoader = async () => {
    const response = await fetch(URL + "/place")
    const places = await response.json()
    return places
}