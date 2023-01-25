//---------------------------------------
//   import dependencies
//---------------------------------------
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
}  from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { indexLoader } from "./loaders/indexLoader"
import { showLoader } from "./loaders/showLoader"
import { actionsCreate} from "./actions/actionsCreate"
import { actionsUpdate } from "./actions/actionsUpdate"
// import { deleteAction } from "./actions/actionsDelete"

//---------------------------------------
//   Router Paths
//---------------------------------------
const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path="/" element={<App />}>
              {/* router path below does not include indexLoader - for use until need to load data */}
              {/* <Route path="" element={<Index />}  /> */}
              <Route path="" element={<Index />} loader={indexLoader} />
              <Route path=":id" element={<Show />} loader={showLoader} />
              <Route path="create" action={actionsCreate} />
              <Route path="update/:id" action={actionsUpdate} /> 
              {/* <Route path="delete/:id" action={deleteAction} /> */}
          </Route>)
)

//---------------------------------------
//   Export Router Definition
//---------------------------------------
export default router;
