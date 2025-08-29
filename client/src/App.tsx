import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./root/root";
import Home from "./pages/home";
import Team from "./pages/team";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      // loader: rootLoader,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "team",
          element: <Team />,
          // loader: teamLoader,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
