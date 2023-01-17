import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Frontpage, RootLayout } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Frontpage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
