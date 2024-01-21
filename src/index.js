import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginForm from './login';
import HomePage from './home';
import ErrorPage from './errorpage';
import SignUp from './SignUp';
import FundRaiser from './fundraiserpage';
import ProductPage from './productpage';
import Community from './communitypage';
import Faculty from './facultypage';
import ProfilePage from './Profile';
// import { AuthProvider } from './AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/signin",
      element: <LoginForm />
    },
    {
      path: "/fundraiser",
      element: <FundRaiser />
    },
    {
      path: "/community",
      element: <Community />
    },
    {
      path: "/faculty",
      element: <Faculty />
    },
    {
      path: "productpage/:productId",
      element: <ProductPage />
    },
    {
      path: "/profile",
      element: <ProfilePage />
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
