import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About.js";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";

const resObj = {
  resName: "KFC",
  cuisine: "Burgers, Fast Food",
  deliveryTime: "35 mins",
  starRating: "4.4",
};
const resList = [
  {
    id: 101,
    resName: "Meghana Foods",
    cuisine: "Birayani, Fast Food, Chinese",
    deliveryTime: "40 mins",
    starRating: "4.7",
  },
  {
    id: 102,
    resName: "Dominos",
    cuisine: "Pizza, American Food",
    deliveryTime: "30 mins",
    starRating: "4.0",
  },
  {
    id: 103,
    resName: "Cafe Coffee Day",
    cuisine: "Coffee, Snacks",
    deliveryTime: "25 mins",
    starRating: "4.2",
  },
  {
    id: 104,
    resName: "Subway",
    cuisine: "Subs, Fast Food",
    deliveryTime: "35 mins",
    starRating: "4.1",
  },
];

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
