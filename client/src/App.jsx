import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/Home";

// Components
import Navbar from "./components/Navbar";
import AvatarPlayground from "./components/AvatarPlayground";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/avatar",
        element: <AvatarPlayground />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
