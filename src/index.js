import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactDOM from 'react-dom/client';
import App from './App';
import Root from './routes/Root';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import JoinProject from './pages/JoinProject';
import OurWork from './pages/OurWork';
import Resources from './pages/Resources';
import Trainings from './pages/Trainings';
import Workshops from './pages/Workshops';
import ContactUs from './pages/ContactUs';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import ExpressInterest from './pages/ExpressInterest';
import ErrorPage from './pages/ErrorPage';
import ResourceDetailsPage from './pages/ResourceDetailsPage';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';



const router = createBrowserRouter([
  {
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "express_interest",
        element: <JoinProject/>,
      },
      {
        path: "join_project",
        element: <JoinProject/>,
      },
      {
        path: "our_work",
        element: <OurWork/>,
      },
      {
        path: "resources",
        element: <Resources/>,
      },
      {
        path: "trainings",
        element: <Trainings/>,
      },
      {
        path: "/workshops",
        element: <Workshops/>,
      },
      {
        path: "contact_us",
        element: <ContactUs/>,
      },
      {
        path: "events",
        element: <Events/>,
      },
      {
        path: "gallery",
        element: <Gallery/>,
      } ,
      {
        path:"participant-details/:id",
        element: <ResourceDetailsPage/>
      },
      {
        path:"cookie-policy",
        element: <CookiePolicy/>
      },
      {
        path:"privacy-policy",
        element: <PrivacyPolicy/>
      },
      {
        path:"terms&conditions",
        element: <TermsConditions/>
      }

    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
