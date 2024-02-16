import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataStoreProvider } from "./context/dataStore";
import { AuthProvider } from "./context/authentication-context";
import { PlayListProvider } from "./context/playList-context";
import { FilterProvider } from "./context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataStoreProvider>
        <AuthProvider>
          <PlayListProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </PlayListProvider>
        </AuthProvider>  
      </DataStoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
