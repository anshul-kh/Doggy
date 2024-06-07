import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import components from pages/index.ts
import {Home,Services,About,Shop,Contact} from './pages'

// different routes
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/services',
    element:<Services/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/shop',
    element:<Shop/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
