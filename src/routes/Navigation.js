import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { map } from "lodash";
import routes from "./routes";


export function Navigation() {
  console.log('routes --->', routes);
  return (
      <Router>
          <Routes>
            {map(routes, (routes, index) => (
              <Route 
                key={index}
                path={routes.path}
                element={
                  <routes.layout>
                    <routes.component />
                  </routes.layout>
                }
              />
            ))}
          </Routes>
      </Router>
  );
}
