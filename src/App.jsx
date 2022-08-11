import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./global.css";
import Header from "./components/Header";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import Details from "./pages/Details";
/**
 * The starting page for your App
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.StrictMode>
          <BrowserRouter>
          <Header />
            <main>
              <section>
                <Routes>
                  <Route path='/login' element={<Login />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/toprated" element={<TopRated />} />
                  <Route path="/upcoming" element={<Upcoming />} />
                  <Route path="/details/:id" element={<Details />} />
                </Routes>
              </section>
            </main>
          </BrowserRouter>
        </React.StrictMode>
      </div>
    );
  }
}

export default App;
