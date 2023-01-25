
const URL = "https://project3bkend.onrender.com";

export const showLoader = async ({params}) => {
    const response = await fetch(URL + "/place/" + params.id )
    const place = await response.json()
    return place
}