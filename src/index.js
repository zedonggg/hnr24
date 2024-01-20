import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginForm from './login';
import HomePage from './home';
import ErrorPage from './errorpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/signin",
      element: <LoginForm />
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
