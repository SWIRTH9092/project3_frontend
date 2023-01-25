// import dependencies
//---------------------------
import { redirect } from "react-router-dom";
//---------------------------
// URL for data
//---------------------------
const URL = "https://project3bkend.onrender.com"

export const actionsUpdate = async ({request, params}) => {
    const formData = await request.formData()

    const updatedPlace = {
        title: formData.get("title"),
        category: formData.get("category"),
        image: formData.get("image")

    }

    await fetch(URL + "/place/" + params.id, {
        method: "put",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedPlace)
    })

    return redirect("/")
}