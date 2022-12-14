import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import RecipePage from './components/RecipePage';
import FavoritePage from './components/FavoritePage/FavoritePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { ToastProvider } from './components/Toasts/ToastService';
import SingleFavoriteDetail from './components/FavoritePage/SingleFavoriteDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ToastProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>

          <Route exact path="/recipes" element={<HomePage />} >
            <Route path='/recipes/:id' element={<RecipePage />} />
          </Route>

          <Route path='/favorites' element={<FavoritePage />} >
            <Route path='/favorites/:id' element={<SingleFavoriteDetail />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ToastProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
