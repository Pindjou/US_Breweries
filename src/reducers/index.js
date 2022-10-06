import BreweryDetails from "./breweryDetails";
import Breweries from "./breweries";
import UserInfo from "./userInfo";
import Isloged from "./isLoged";
import Comments from "./comments";
import Reviews from "./reviews";
import Favorites from "./favorites";
import Users from "./users";
import { combineReducers } from "@reduxjs/toolkit";
const reducers=combineReducers({
    breweryDetails: BreweryDetails,
    breweries: Breweries,
    userInfo: UserInfo,
    isLoged:Isloged,
    comments:Comments,
    reviews:Reviews,
    favorites:Favorites,
    users:Users
})
export default reducers;