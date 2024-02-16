import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root,{loader as rootLoader} from './routes/route';
import ErrorPage from './error-page';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './routes/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    loader:rootLoader,
    children:[
      {
        path:'/contacts/:contactId',
        element:<Contact/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
