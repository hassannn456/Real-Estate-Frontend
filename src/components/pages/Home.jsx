import Slider from "../componentsextended/HomeExtensions/Slider";
import RandomDetails from "../componentsextended/HomeExtensions/RandomDetails";
import OfferCards from "../componentsextended/HomeExtensions/OffersExtension/OfferCards";
import Locations from "../componentsextended/HomeExtensions/Locations";
import Reviews from "../componentsextended/HomeExtensions/ReviewsExtension/Reviews";
import { Box } from "@mui/material";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { navActions } from '../Redux/NavSlice';

const Home = () => {
  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(navActions.toggle());
  }, [dispatch]);

  return (
    <Box sx={{background: '#fff'}}>
      <Slider />
      <RandomDetails/>
      <OfferCards/>
      <Locations/>
      <Reviews/>
    </Box>
  );
};

export default Home;
