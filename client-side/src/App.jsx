import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import AddNewScreen from "./Screens/AddNewScreen";
import RenderNewScreen from "./Screens/RenderNewScreen";



const dynamicRoutes = [
  {
    name: "Render Screen",
    path: "/",
    component: AddNewScreen,
    authRequired: true,
  },
  {
    name: "Render New Screen",
    path: "/new-screen",
    component: RenderNewScreen,
    authRequired: true,
    params: { parameter: "SignUpTemplate" },
  },
];

const App = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Routes>
        {dynamicRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component {...route.params} />}
          />
        ))}
      </Routes>
      <Outlet />
    </div>
  );
};

export default App;
