import {
  Routes as ReactRouterRoutes,
  Route,
  useLocation,
} from "react-router-dom";

import { AboutUs } from "../pages/about-us";
import { MovieDetail } from "../pages/movie-detail";
import { ContactUS } from "../pages/contact-us";
import { OurWork } from "../pages/our-work";

export const Routes = () => {
  const location = useLocation();

  return (
    <ReactRouterRoutes location={location} key={location.pathname}>
      <Route path="/" element={<AboutUs />} />
      <Route exact path="/work" element={<OurWork />} />
      <Route path="/work/:id" element={<MovieDetail />} />
      <Route path="/contact" element={<ContactUS />} />
    </ReactRouterRoutes>
  );
};
