import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes/router";

const router = createBrowserRouter(ROUTES)
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
