import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MainContainer from "./components/mainContainer/MainContainer";
import Home from "./features/home/Home";
import Explore from "./features/explore/Explore";
import {BookMark} from "./features/bookMark/BookMark";
import Profile from "./features/profile/mainProfile/Profile";
import ThirdProfile from "./features/profile/thirdProfile/ThirdProfile";
import PostDetails from "./features/postDetails/PostDetails";
import Login from "./features/login/Login";
import { SignUp } from "./features/signup/SignUp";
import { PageNotFound } from "./features/pageNotFound/PageNotFound";
import Layout from "./Layout";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
// import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={1200}
        reverseOrder={false}
      />
      {/* <Layout/> */}
      <Routes>
        <Route
          path="/"
          element={
            <MainContainer>
              <Home />
            </MainContainer>
          }
        />
        <Route
          path="/explore"
          element={
            <MainContainer>
              <Explore />
            </MainContainer>
          }
        />
        <Route
          path="/bookmark"
          element={
            <MainContainer>
              <BookMark />
            </MainContainer>
          }
        />
        <Route
          path="/profile"
          element={
            <MainContainer>
              <Profile />
            </MainContainer>
          }
        />
        <Route
          path="/post/:_id"
          element={
            <MainContainer>
              <PostDetails />
            </MainContainer>
          }
        />
        <Route
          path="/profile/:userHandler"
          element={
            <MainContainer>
              <ThirdProfile />
            </MainContainer>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/mockman" element={<Mockman />} />  */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
     {/* <NavBar/>
     <LeftBar/> */}
     {/* <MainContainer/> */}
    </div>
  );
}

export default App;
