import { configureStore } from '@reduxjs/toolkit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Provider} from "react-redux";
import HomeScreen from "./home-screen";
import LoginScreen from "./register-login/login-screen";
import SearchBar from './search/searchbar';
import DetailsScreen from './details/index';
import Nav from "../nav";
import {Routes, Route} from "react-router";
import RegisterScreen from "./register-login/register-screen";
import authReducers from "./reducers/auth-reducers";
import postsReducers from './reducers/posts-reducers';
import omdbReducer from './search/search-reducer';
import { BrowserRouter, useParams } from 'react-router-dom';
import UserProfile from "../profile/view-own-profile";
import ViewOwnProfile from '../profile/view-own-profile';
import ViewOtherProfiles from '../profile/profile-pages/view-other-profiles';
import userDetailReducers from './reducers/user-detail-reducers';

  const store = configureStore(
    {reducer: {posts: postsReducers,user:authReducers, omdb: omdbReducer, 
      userDetails: userDetailReducers,} 
  });

  function SearchRouteWrapper() {
    let { searchTerm } = useParams();  // Destructure searchTerm from useParams
    return <SearchBar searchTerm={searchTerm} />;
  }

function MovieReviewer() {


 return (
     <Provider store={store}>
       <div className="container">
         <div className="row justify-content-center mt-4">
           <div className="position-relative img-container">
             <img
                 className="header-img img-fluid extended-img"
                 src="/images/headers/header-background5.jpg"
                 alt="Banner"
             />
           </div>
         </div>

          <div className="bg-light">
         {/*<div>*/}
           <Nav />

           <Routes>
             <Route path="/home" element={<HomeScreen />} />
             <Route path="/login" element={<LoginScreen />} />
             <Route path="/register" element={<RegisterScreen />} />
             {/* <Route path="/profile/:id/*" element={<ViewOwnProfile />} /> */}
             {/* <Route path="/profile/:id/*" element={<UserProfile />} /> */}
             <Route path="/profile/:id" element={<ViewOtherProfiles />} />
             <Route path="/profile" element={<ViewOwnProfile />} />
             <Route path="/search" element={<SearchBar />} />
             <Route path="/search/:searchTerm" element={<SearchRouteWrapper />} />
             <Route path="/details/:imdbID" element={<DetailsScreen />} />
           </Routes>
         </div>
       </div>
     </Provider>
 );
}

export default MovieReviewer;
