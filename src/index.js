import  React from 'react';
import  ReactDOM from 'react-dom/client';
import App from './App';
import { 
  Route,
  RouterProvider, 
  createBrowserRouter, 
} from "react-router-dom";
import WebDesign from './pages/webDesign/WebDesign';


const router = createBrowserRouter(
  // <Route path='/' element={<App />}>
  //   <Route path='/webDesign' lazy={() => import('./pages/webDesign/WebDesign')} element={<WebDesign/>}></Route>

  // </Route> 
  [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/webDesign",
    element: <WebDesign />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

