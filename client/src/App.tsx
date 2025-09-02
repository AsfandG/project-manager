import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./root/root";
import Home from "./pages/home";
import Team from "./pages/team";
import AuthLayout from "./pages/auth/auth-layout";
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";
import ForgotPassword from "./pages/auth/forgot-password";

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
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
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
