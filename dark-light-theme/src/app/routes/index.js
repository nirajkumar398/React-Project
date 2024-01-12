import React from "react";
import { Route, Routes } from "react-router-dom";
import * as Pages from "../pages";

const routes = [
  {
    path: "/",
    exact: true,
    Component: Pages.HomePage,
  },
  {
    path: "/details*",
    Component: Pages.DetailsPage,
  },
  {
    path: "/about*",
    Component: Pages.AboutUsPage,
  },
];

export default () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route {...route} key={index} />
      ))}
    </Routes>
  );
};
