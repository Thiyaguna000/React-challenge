import React, { useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import './global.css';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import Details from './pages/Details';
import axios from 'axios';
import NotFound from './pages/NotFound';
/**
 * The starting page for your App
 */

const App = () => {
  useEffect(() => {
    if (!sessionStorage.getItem('requesttoken')) {
      axios
        .get(
          'https://api.themoviedb.org/3/authentication/token/new?api_key=7009bcbd203a44c230df630f8447bbc9'
        )
        .then((res) => {
          sessionStorage.setItem('requesttoken', res.data.request_token);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="App">
      <React.StrictMode>
        <HashRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route exact path="/details/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </React.StrictMode>
    </div>
  );
};

export default App;
