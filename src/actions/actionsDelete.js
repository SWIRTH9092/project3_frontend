// import dependencies
//---------------------------
import { redirect } from "react-router-dom";
//---------------------------
// URL for data
//---------------------------
const URL = "https://project3bkend.onrender.com"

export const actionsDelete = async ({params}) => {

    await fetch(URL + "/place/" + params.id, {
        method: "delete"
    })
    return redirect("/")
}