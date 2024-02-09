import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Root from "./routes/root";
import Home from "./routes/home";
import ErrorPage from "./routes/ErrorPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<ErrorPage />}
    >
      <Route
      path="/home"
       element={<Home/>}
      />
    </Route>
  )
);

function App() {    
  return <RouterProvider router={router} />;
}

export default App;
