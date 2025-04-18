import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Landing from "./Pages/Landing";
import { ThemeProvider } from "./Context/ThemeContext";
import AdminLogin from "./Pages/AdminLogin";
import Dashboard from "./Pages/Dashboard/Pages/Dashboard";
import Projects from "./Pages/Dashboard/Pages/Projects";
import Education from "./Pages/Dashboard/Pages/Education";
import UserProfile from "./Pages/Dashboard/Pages/UserProfile.jsx";
import AdminLayout from "./Pages/Dashboard/AdminApp";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { Toaster } from "react-hot-toast";
import Expertise from "./Pages/Dashboard/Pages/Expertise";
import Experience from "./Pages/Dashboard/Pages/Experience.jsx";
import AllMessages from "../src/Pages/Dashboard/Pages/AllMessages.jsx";
import Loader from "./Components/Loader.jsx";
import PageNotFound from "./Components/PageNotFound.jsx";
import GoToTopButton from "./Components/GoToTop.jsx";
import Resume from "./Components/Resume/Resume.jsx"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <Landing /> }],
    },
    { path: "/login", element: <AdminLogin /> },
    { path: "/resume", element:<Resume/>},
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "projects", element: <Projects /> },
        { path: "education", element: <Education /> },
        { path: "expertise", element: <Expertise /> },
        { path: "experience", element: <Experience /> },
        { path: "settings", element: <UserProfile /> },
        { path: "messages", element: <AllMessages /> },
      ],
    },
    { path: "*", element: <PageNotFound /> },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  }
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Toaster />
        <RouterProvider router={router} />
        <GoToTopButton />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
